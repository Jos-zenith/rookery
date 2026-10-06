# The Rookery — website

Static site for The Rookery, built with [Astro](https://astro.build). Start small, keep moving.

## Run it

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npx astro check  # type-check
```

## Before launch

Fill these in; until then the site shows "opens soon" states instead of broken links.

| What | Where |
| --- | --- |
| Application Google Form | `applyFormUrl` in `src/data/site.ts` |
| Sponsor Google Form | `sponsorFormUrl` in `src/data/site.ts` |
| Contact email, Instagram, LinkedIn | `src/data/site.ts` |
| Domain (makes the WhatsApp preview image work) | `site` in `astro.config.mjs` |
| Confirm the five stage names | `stages` in `src/data/content.ts` |
| First 3–4 sponsored problems | `problems` in `src/data/content.ts` |

## Where things live

- `src/data/` — all the words: outcomes, stages, levels, week, roles, glossary, FAQ, problems. Edit here, not in the pages.
- `src/styles/tokens.css` — colours, fonts, sizes. Every colour has a day and a night value.
- `src/components/` — Logo, Icon, Button, Trail (five stages), Stamps (levels), WeekStrip, ProblemCard, MarginNote, Term (glossary tooltip).
- `src/lib/logo-paths.ts` — the logo traced to vector paths. Inlined so it follows the text colour.
- `src/lib/icons.ts` — everyday icons plus the club icons (egg, huddle, pond, passport, fledge, ship, trail, pebble).
- `public/brand/` — logo SVGs for use elsewhere (slides, social): full, reversed, mark, wordmark, penguin, penguin-512.png.
- `public/og.png` — the link preview image (1200 × 630).

## Pages

- `/` — home
- `/apply` — what happens after you apply, and the form link
- `/404`

Next up, per the plan: `/pond` and `/how`, then `/showcase` after the first showcase.
