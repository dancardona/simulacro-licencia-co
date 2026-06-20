# Agent Notes

- This is a single-file static app: `index.html` contains all HTML, CSS, JavaScript, and the 144-question bank.
- There is no package manifest, lockfile, build config, CI, lint, formatter, or test runner in this repo. Do not run or add `npm`/`pnpm` commands unless adding tooling is explicitly requested.
- The quiz runtime is plain browser JavaScript: `buildPool()` samples 10 `high`, 20 `med`, and 10 `low` questions, shuffles questions/options, and computes the max score from `WEIGHTS`.
- Scoring is duplicated in user-facing copy and runtime constants: high = 4 pts, med = 2 pts, low = 0.5 pts; 40 questions total; max = 85 pts; pass threshold = 90% (`maxScore * 0.9`). Keep these in sync if changing weights or sample sizes.
- Question content is Spanish and references Colombian transit law. Preserve the `weight`, `topic`, `q`, `options`, `correct`, and `explanation` object shape when editing the bank.
- Focused verification is manual: open `index.html` in a browser, start the quiz, answer at least one correct and one incorrect question, finish or force a short temporary pool locally, and verify scoring, explanations, results, and restart behavior.
- For layout changes, check both the narrow mobile layout (`max-width:520px` app shell) and desktop centering; styles are inline in the `<style>` block.
