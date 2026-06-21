# Agent Notes

- Astro static app using `pnpm`; do not use `npm` or add another lockfile.
- Commands: `pnpm dev`, `pnpm check`, `pnpm build`, `pnpm preview`. Run `check` and `build` sequentially because both write Astro's `.astro` cache.
- Entrypoint is `src/pages/index.astro`; the old root `index.html` source was removed. Production output is generated in `dist/`.
- SEO and JSON-LD live in `src/lib/seo.ts` and `src/layouts/BaseLayout.astro`; canonical domain is `https://simulacro-licencia-co.vercel.app/`.
- Static shell components live in `src/components/`; global styling is `src/styles/global.css`; browser-only quiz DOM code is `src/scripts/quiz.ts`; confetti is `src/scripts/confetti.ts`.
- The 144-question bank lives in `src/data/questions.ts`. Preserve the `weight`, `topic`, `q`, `options`, `correct`, and `explanation` object shape.
- Scoring constants are centralized in `src/lib/quiz.ts`: high = 4 pts, med = 2 pts, low = 0.5 pts; sample 10 high, 20 med, 10 low; 40 questions; max = 85 pts; pass threshold = 90%.
- Manual verification after runtime/layout changes: `pnpm build`, `pnpm preview`, start the quiz, answer at least one correct and one incorrect question, verify explanations/results/restart, and check mobile `max-width:520px` plus desktop centering.
