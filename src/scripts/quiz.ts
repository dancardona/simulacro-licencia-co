import { allQuestions } from '../data/questions';
import {
  buildPool,
  getQuestionPoints,
  getWeightLabel,
  MAX_SCORE as TOTAL_MAX_SCORE,
  PASS_RATIO,
  TOTAL_QUESTIONS,
  WEIGHTS,
  type ActiveQuestion,
} from '../lib/quiz';
import { launchConfetti } from './confetti';

let current = 0;
let score = 0;
let maxScore = 0;
let answered: Array<number | undefined> = [];
let activeQuestions: ActiveQuestion[] = [];

const mainEl = getEl<HTMLElement>('main');
const quizExitWrap = getEl<HTMLElement>('quizExitWrap');
const progressWrap = getEl<HTMLElement>('progress-wrap');
const progressFill = getEl<HTMLElement>('progressFill');
const progressText = getEl<HTMLElement>('progressText');
const qScoreText = getEl<HTMLElement>('qScoreText');
const scoreBarFill = getEl<HTMLElement>('scoreBarFill');
const scoreBarLabel = getEl<HTMLElement>('scoreBarLabel');
const initialStartHtml = mainEl.innerHTML;

bindStartButton();
getEl<HTMLButtonElement>('exitQuizBtn').addEventListener('click', exitQuiz);

function getEl<T extends HTMLElement>(id: string): T {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Missing #${id}`);
  return el as T;
}

function startQuiz(): void {
  current = 0;
  score = 0;
  answered = [];
  activeQuestions = buildPool(allQuestions);
  maxScore = activeQuestions.reduce((s, q) => s + WEIGHTS[q.weight], 0);
  quizExitWrap.style.display = 'flex';
  progressWrap.style.display = 'block';
  renderQuestion();
}

function bindStartButton(): void {
  getEl<HTMLButtonElement>('startBtn').addEventListener('click', startQuiz);
}

function exitQuiz(): void {
  current = 0;
  score = 0;
  maxScore = 0;
  answered = [];
  activeQuestions = [];
  quizExitWrap.style.display = 'none';
  progressWrap.style.display = 'none';
  progressFill.style.width = '0%';
  progressText.textContent = `Pregunta 1 de ${TOTAL_QUESTIONS}`;
  qScoreText.textContent = '';
  scoreBarFill.style.width = '0%';
  scoreBarLabel.textContent = `0 de ${TOTAL_MAX_SCORE} pts`;
  mainEl.innerHTML = initialStartHtml;
  bindStartButton();
}

function updateScoreBar(): void {
  const pct = maxScore > 0 ? (score / maxScore) * 100 : 0;
  scoreBarFill.style.width = `${pct}%`;
  scoreBarLabel.textContent = `${score.toFixed(1)} de ${maxScore.toFixed(1)} pts`;
}

function renderQuestion(): void {
  const total = activeQuestions.length;
  progressFill.style.width = `${(current / total) * 100}%`;
  progressText.textContent = `Pregunta ${current + 1} / ${total}`;

  const item = activeQuestions[current];
  const pts = getQuestionPoints(item.weight);
  const wLabel = getWeightLabel(item.weight);
  qScoreText.textContent = `${pts} pts en juego`;
  updateScoreBar();

  const optHtml = item.options
    .map((opt, i) => {
      const letter = String.fromCharCode(65 + i);
      return `<button class="option" data-index="${i}"><span class="letter">${letter}</span><span>${opt}</span></button>`;
    })
    .join('');

  mainEl.innerHTML = `
    <div class="card">
      <div><div class="topic-tag">${item.topic}</div><span class="weight-badge ${item.weight}">${wLabel} · ${pts} pts</span></div>
      <div class="question">${item.q}</div>
      <div class="options" id="optCont">${optHtml}</div>
      <div class="pts-feedback" id="ptsFeedback"></div>
      <div class="explanation" id="expBox">${item.explanation}</div>
      <div class="nav"><button class="btn" id="nextBtn" disabled>${current === total - 1 ? 'Ver resultados' : 'Siguiente'}</button></div>
    </div>`;

  document
    .querySelectorAll<HTMLButtonElement>('.option')
    .forEach((btn) => btn.addEventListener('click', () => selectOption(btn, item)));
  getEl<HTMLButtonElement>('nextBtn').addEventListener('click', nextQuestion);
}

function selectOption(btn: HTMLButtonElement, item: ActiveQuestion): void {
  if (answered[current] !== undefined) return;

  const chosen = Number(btn.dataset.index);
  const correct = item.correct;
  const pts = getQuestionPoints(item.weight);
  answered[current] = chosen;

  document.querySelectorAll<HTMLButtonElement>('.option').forEach((option) => {
    option.disabled = true;
    const idx = Number(option.dataset.index);
    if (idx === correct) option.classList.add('correct');
    if (idx === chosen && chosen !== correct) option.classList.add('incorrect');
  });

  const feedback = getEl<HTMLElement>('ptsFeedback');
  if (chosen === correct) {
    score += pts;
    feedback.textContent = `✅ Correcto · +${pts} pts`;
    feedback.className = 'pts-feedback correct show';
  } else {
    feedback.textContent = `❌ Incorrecto · +0 pts (correcta: ${String.fromCharCode(65 + correct)})`;
    feedback.className = 'pts-feedback incorrect show';
  }

  updateScoreBar();
  getEl<HTMLElement>('expBox').classList.add('show');
  getEl<HTMLButtonElement>('nextBtn').disabled = false;
}

function nextQuestion(): void {
  if (current < activeQuestions.length - 1) {
    current++;
    renderQuestion();
    return;
  }

  showResults();
}

function showResults(): void {
  const total = activeQuestions.length;
  progressFill.style.width = '100%';
  progressText.textContent = `Completado: ${total} / ${total}`;

  const pct = (score / maxScore) * 100;
  const threshold = maxScore * PASS_RATIO;
  const passed = score >= threshold;
  const correctCount = answered.filter((answer, i) => answer === activeQuestions[i].correct).length;
  const wrongCount = total - correctCount;
  const wrongItems: string[] = [];
  const rightItems: string[] = [];

  activeQuestions.forEach((q, i) => {
    const userAnswer = answered[i];
    const ok = userAnswer === q.correct;
    const pts = getQuestionPoints(q.weight);
    const wLabel = getWeightLabel(q.weight);
    const userLetter = typeof userAnswer === 'number' ? String.fromCharCode(65 + userAnswer) : '-';
    const userText = typeof userAnswer === 'number' ? q.options[userAnswer] : 'Sin respuesta';
    const correctLetter = String.fromCharCode(65 + q.correct);
    const card = `
      <div class="res-card ${ok ? 'res-right' : 'res-wrong'}">
        <div class="res-card-header">
          <span class="res-icon">${ok ? '✅' : '❌'}</span>
          <span class="res-topic">${q.topic}</span>
          <span class="res-badge ${q.weight}">${wLabel} · ${pts}pts</span>
        </div>
        <div class="res-question">${i + 1}. ${q.q}</div>
        ${!ok ? `<div class="res-answer wrong-ans">Tu respuesta: <strong>${userLetter}. ${userText}</strong></div>` : ''}
        <div class="res-answer correct-ans">Respuesta correcta: <strong>${correctLetter}. ${q.options[q.correct]}</strong></div>
        <div class="res-explanation">${q.explanation}</div>
      </div>`;

    if (ok) rightItems.push(card);
    else wrongItems.push(card);
  });

  mainEl.innerHTML = `
    <div class="results-screen">
      <div class="verdict-hero ${passed ? 'verdict-pass' : 'verdict-fail'}">
        <div class="verdict-icon">${passed ? '🏆' : '📋'}</div>
        <div class="verdict-score">${score.toFixed(1)}<span class="verdict-max"> / ${maxScore}</span></div>
        <div class="verdict-label">${passed ? '¡Aprobado!' : 'No aprobado'}</div>
        <div class="verdict-pct">${pct.toFixed(1)}% · Mínimo requerido: 90% (${threshold.toFixed(1)} pts)</div>
        <div class="verdict-chips">
          <div class="vchip vchip-green">✅ ${correctCount} correctas</div>
          <div class="vchip vchip-red">❌ ${wrongCount} incorrectas</div>
        </div>
      </div>

      <div class="results-body">
        <button class="restart-btn" id="restartBtn">↩ Repetir simulacro</button>
        ${
          wrongItems.length > 0
            ? `<div class="res-section-title res-title-wrong">❌ Fallaste ${wrongCount} pregunta${wrongCount !== 1 ? 's' : ''}</div>${wrongItems.join('')}`
            : '<div class="res-section-title res-title-right" style="margin-top:0">¡Cero errores! Perfecto.</div>'
        }
        ${
          rightItems.length > 0
            ? `<div class="res-section-title res-title-right">✅ Acertaste ${correctCount} pregunta${correctCount !== 1 ? 's' : ''}</div>${rightItems.join('')}`
            : ''
        }
        <button class="restart-btn" id="restartBtn2" style="margin-top:8px;">↩ Repetir simulacro</button>
      </div>
    </div>`;

  updateScoreBar();
  getEl<HTMLButtonElement>('restartBtn').addEventListener('click', startQuiz);
  getEl<HTMLButtonElement>('restartBtn2').addEventListener('click', startQuiz);
  if (passed) setTimeout(launchConfetti, 300);
}
