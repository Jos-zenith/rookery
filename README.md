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
| "Suggest a Guide" form | `guideFormUrl` in `src/data/site.ts` |
| Partner / CSR form | `partnerFormUrl` in `src/data/site.ts` |
| Colleges your penguins come from (shows a row under the hero) | `colleges` in `src/data/content.ts` |
| Co-Keeper's name | `team` in `src/data/content.ts` |
| Contact email, Instagram, LinkedIn | `src/data/site.ts` |
| Domain (makes the WhatsApp preview image work) | `site` in `astro.config.mjs` |
| First 3–4 sponsored problems | `problems` in `src/data/content.ts` |

## Where things live

- `src/data/` — all the words: lifecycle stages, onboarding, tracks, outcomes, week, levels, Guide perks, problems. Edit here, not in the pages. Keep captions to 2–5 words; the drawings carry the meaning.
- `src/styles/tokens.css` — colours, fonts, sizes. Every colour has a day and a night value.
- `src/components/` — Logo, Icon, Button, Trail (lifecycle), Stamps (levels), WeekStrip, ProblemCard.
- `src/lib/logo-paths.ts` — the logo traced to vector paths. Inlined so it follows the text colour.
- `src/lib/icons.ts` — everyday icons, the lifecycle (define, prototype, test, ship, showcase), tracks (ai, cad, iot) and club icons.
- `public/brand/` — logo SVGs for use elsewhere (slides, social): full, reversed, mark, wordmark, penguin, penguin-512.png.
- `public/og.png` — the link preview image (1200 × 630).

## Pages

- `/` — home
- `/apply` — what happens after you apply, and the form link
- `/404`

Next up: `/pond` once sponsors are in, then `/showcase` at the end of the 8 weeks.
