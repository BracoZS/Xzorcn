# Stack and conventions

## Stack

| Layer | Technology | Version | Note |
|---|---|---|---|
| Runtime/package manager | Bun | TBD | Used for install and project scripts |
| Language | TypeScript | `^7.0.2` | ES2022 target; strict mode |
| Framework/compiler | `@source-crafter/xzor` | `^0.1.7` | Xzor component compiler |
| Runtime | `@source-crafter/xzor-runtime` | `^0.1.7` | Xzor app runtime |
| Styling | Tailwind CSS | TBD | Loaded from CDN |
| Browser support | TBD | TBD | TBD |
| Hosting | TBD | TBD | TBD |

## Repository structure

- `src/pages/` - application pages
- `src/layouts/` - layout components
- `src/Routes.xzor` - client routes
- `src/styles.css` - application styles
- `main.ts` - application entry point
- `index.html` - browser entry document
- `.devcontainer/` - Codespaces setup

## Commands

| Action | Command |
|---|---|
| Install | `bun install` |
| Develop | `bun run dev` |
| Build | `bun run build` |

## Conventions

- Code: Write code in English; use strict TypeScript and Xzor component syntax.
- Git: TBD
- Tests: No test script is defined in `package.json`.

## Avoid
- TBD
