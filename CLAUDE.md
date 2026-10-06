## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Design rules (The Rookery)

- Colours only from `src/styles/tokens.css`; each token has a dark-mode value. Beak yellow is a highlighter, never text.
- One line weight: icons are 1.75px round-capped strokes on a 24px grid (`src/lib/icons.ts`).
- Shantell Sans for headings and margin notes only (Informal axis via `--infm-head` / `--infm-note`); Atkinson Hyperlegible Next for body; Atkinson Hyperlegible Mono for small spaced-caps labels.
- Never retype "The Rookery" in a font; use `<Logo variant="word" />`.
- Only Problem cards and Passports get a drawn border. Dashed means "ahead", solid means "done".
- Copy lives in `src/data/`; keep the first-person, plain voice of the Structure Draft.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
