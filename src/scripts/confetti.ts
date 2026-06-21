export function launchConfetti(): void {
  const canvas = document.createElement('canvas');
  canvas.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:9999;';
  document.body.appendChild(canvas);

  const ctx = canvas.getContext('2d');
  if (!ctx) return;

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  const colors = ['#ffc72c', '#2e8b57', '#ffffff', '#e05a2b', '#5b8dd9', '#f4f1e8'];
  const pieces = Array.from({ length: 140 }, () => ({
    x: Math.random() * canvas.width,
    y: -20 - Math.random() * 200,
    r: 4 + Math.random() * 6,
    d: 2 + Math.random() * 3,
    color: colors[Math.floor(Math.random() * colors.length)],
    tilt: Math.random() * 10 - 5,
    tiltSpeed: 0.08 + Math.random() * 0.1,
    angle: 0,
    shape: Math.random() > 0.5 ? 'rect' : 'circle',
  }));

  let frame = 0;
  function draw() {
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    pieces.forEach((p) => {
      p.angle += p.tiltSpeed;
      p.tilt = Math.sin(p.angle) * 12;
      p.y += p.d + frame * 0.01;
      p.x += Math.sin(p.angle) * 0.8;
      ctx.fillStyle = p.color;
      ctx.beginPath();

      if (p.shape === 'circle') {
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
        return;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.tilt * Math.PI) / 180);
      ctx.fillRect(-p.r, -p.r / 2, p.r * 2, p.r);
      ctx.restore();
      ctx.fill();
    });

    frame++;
    if (frame < 220) {
      requestAnimationFrame(draw);
      return;
    }

    canvas.style.opacity = '0';
    canvas.style.transition = 'opacity 0.5s';
    setTimeout(() => canvas.remove(), 600);
  }

  draw();
}
