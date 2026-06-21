export type QuestionWeight = 'high' | 'med' | 'low';

export type Question = {
  weight: QuestionWeight;
  topic: string;
  q: string;
  options: string[];
  correct: number;
  explanation: string;
};

export type ActiveQuestion = Question;

export const WEIGHT_ORDER = ['high', 'med', 'low'] as const;

export const WEIGHTS: Record<QuestionWeight, number> = {
  high: 4,
  med: 2,
  low: 0.5,
};

export const SAMPLE_COUNTS: Record<QuestionWeight, number> = {
  high: 10,
  med: 20,
  low: 10,
};

export const PASS_RATIO = 0.9;

export const WEIGHT_LABELS: Record<QuestionWeight, string> = {
  high: 'Alta',
  med: 'Media',
  low: 'Baja',
};

export const TOTAL_QUESTIONS = WEIGHT_ORDER.reduce(
  (total, weight) => total + SAMPLE_COUNTS[weight],
  0,
);

export const MAX_SCORE = WEIGHT_ORDER.reduce(
  (total, weight) => total + SAMPLE_COUNTS[weight] * WEIGHTS[weight],
  0,
);

export const PASS_SCORE = MAX_SCORE * PASS_RATIO;

export function shuffle<T>(arr: T[]): T[] {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export function buildPool(questions: Question[]): ActiveQuestion[] {
  const selected = WEIGHT_ORDER.flatMap((weight) =>
    shuffle(questions.filter((q) => q.weight === weight)).slice(0, SAMPLE_COUNTS[weight]),
  );

  return shuffle(selected).map((q) => {
    const order = shuffle(q.options.map((_, i) => i));
    return {
      weight: q.weight,
      topic: q.topic,
      q: q.q,
      options: order.map((i) => q.options[i]),
      correct: order.indexOf(q.correct),
      explanation: q.explanation,
    };
  });
}

export function getWeightLabel(weight: QuestionWeight): string {
  return WEIGHT_LABELS[weight];
}

export function getQuestionPoints(weight: QuestionWeight): number {
  return WEIGHTS[weight];
}
