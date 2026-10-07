## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Design rules (The Rookery)

- Colours only from `src/styles/tokens.css`; each token has a dark-mode value. Beak yellow is a highlighter, never text.
- One line weight: icons are 1.75px round-capped strokes on a 24px grid (`src/lib/icons.ts`).
- Shantell Sans (hand-lettered) for headings, labels and notes (Informal axis via `--infm-head` / `--infm-note`); DM Sans for body text.
- Sea is the one accent (buttons, links, walked trail). Cards use soft tints (`.tint-blue/peach/mint`) and the wobbly `.sketch` edge, never sharp boxes.
- Use the full screen (up to `--page`, 1440px). Every block sits in a `.lane` beside the trail's rail; sections split words and a scene side by side on wide screens. `<Spine>` draws the trail through every `[data-node]`; on wide screens the five stages step down across the page so the trail crosses it.
- Never retype "The Rookery" in a font; use `<Logo variant="word" />`.
- The penguin is the mascot. Only ever use the traced logo penguin (`<use href="#pg">` / `#pg-left` from PenguinDefs, or `<Scene>`); never hand-draw a new penguin. Scenes may place, flip, scale and tilt it.
- The club hasn't started: no stats, member counts or testimonials presented as real. Keep the tone promising; examples are labelled "Example".
- Dashed means "ahead", solid means "done".
- Visuals first, minimal words: like the logo, a drawing should carry the meaning. Captions 2–5 words, no paragraphs on the home page. Copy lives in `src/data/`.
- Lifecycle is Define → Prototype → Test → Ship → Showcase. Pilot: 25–30 penguins, 8 weeks. Don't name specific tracks on the site (there are many Guides and tracks).

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
