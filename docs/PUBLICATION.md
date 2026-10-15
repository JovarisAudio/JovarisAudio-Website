# Public product catalog

`src/data/products.json` is a public allowlist. Never store private roadmaps, algorithms, test builds, compatibility assumptions or unreleased UI here, even when a record is marked `internal`: this repository is public.

- `internal`: managed outside this repository; rejected by the public catalog validator.
- `preview`: name and optional existing official symbol only, maximum three across the site. No description, dates, progress, UI, download or detail routes.
- `released`: appears under Available and receives product routes and sitemap entries. Requires a zero price, verified platforms and formats, version, short description, completed local product imagery and an approved public HTTPS download with SHA-256.

Use `src/lib/catalog.mjs` selectors in every page, feed and search feature. Do not create routes directly from preview entries. A product has a single unique ID, preventing it from being released and previewed at the same time. Do not automatically promote another internal candidate when a preview ships; choose the next preview deliberately.

macOS Apps is shown only once at least one macOS app has an approved public release. Keep that collection separate from Audio Plugins. Home emphasizes music and released audio products; previews remain on Software.

All initial products are free, regardless of support. Do not add paywalls, subscriptions, sales or mandatory support dialogs. `SupportNote.astro` reuses `PUBLIC_SUPPORT_URL` only when it is a Buy Me a Coffee HTTPS profile link. If missing or invalid, show a quiet pending notice. Do not manufacture an account or link. Downloads must appear before support on product pages.

Checks:

- `pnpm test`: publication rules and existing archive logic.
- `pnpm build && pnpm qa`: generated links, metadata and publication route exclusions.
- `pnpm integration:qa`: fixture-based Music/Journal search, series, related posts and draft exclusion, restoring the real build afterward.
- `pnpm publication:qa`: preview the Pages build on port 4323 with `/JovarisAudio-Website/`, or override `QA_ORIGIN` and `QA_BASE`; verifies five widths, minimal previews, images, route exclusions and KO/EN.

Removing content from the current tree does not erase prior public Git history. Do not add internal material and rely on a publication flag to hide it.
