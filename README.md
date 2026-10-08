# Hussein Abozina — Personal Portfolio V7

A portable English/Arabic personal portfolio, originally rebuilt from the supplied V6 archive. It positions Hussein as **Mobile Software Engineer | Flutter · iOS · Android**, with Flutter/Dart as his core specialization, hands-on native development and a disciplined AI-Augmented Engineering workflow. The separate [Apps & Projects Showcase](https://husseinabozina.github.io/app-showroom/) is the primary hero destination and contains the full project stories and evidence.

## Preview

Open `index.html` directly, or run `npm run dev` and visit http://localhost:4181/. Python 3 is the only build/server requirement; npm is an optional command shortcut. There are no installed packages, remote fonts, API keys or backend services.

## Edit and rebuild

- `content/profile.json`: contact email, CV, GitHub and showroom destinations.
- `content/projects.json`: the three curated homepage projects, text in English/Arabic, images and destinations. Use `visible` and `order` to control selection. Keep the homepage to three projects; publish the full collection in the showroom.
- `content/earlier-projects.json`: the four preserved V6 case-study routes.
- `scripts/build.py`: shared page template and bilingual profile/experience copy.
- `assets/styles.css`: visual system, responsive layouts and RTL styling.
- `assets/app.js`: language persistence, accessible mobile navigation and anchor focus.
- `assets/docs/Hussein_Abozina_CV.pdf`: the supplied Master CV V3 PDF, unchanged. Download links include `?v=3` to refresh cached copies.

After editing content, run `npm run build` then `npm test` (or `python3 scripts/build.py` and `python3 scripts/verify.py`). The resulting HTML is pre-rendered and can be hosted as static files. Essential content and links work without JavaScript. Language changes use local storage when available, with a safe fallback when storage is blocked.

## Images and factual boundaries

MyShop, Brees and Etzan use actual app captures. They are independent engineering projects, not claimed production services. Brees retains attribution to its Figma Community design reference. MyShop checkout is explicitly Sandbox. Etzan includes original Arabic-first product design and Supabase client integrations; its showroom page explains the Android preview and backend dependencies. HealthTrack remains available in the wider showroom. See `docs/CONTENT-SOURCES.md`.

The old project URLs remain functional with the updated shared design; they do not crowd the homepage. The original Mushaf image is preserved byte-for-byte. Fonts are local Manrope files under the included SIL Open Font License; Arabic uses system fonts.

## Delivery and hosting

Live portfolio: https://hussein-abozina-portfolio.vercel.app/

Repository: https://github.com/Husseinabozina/personal-portfolio

Vercel project `hussein-abozina-portfolio` is connected to this repository, with `main` as the production branch. Push changes to `main` to publish an update to the same address. The included `vercel.json` runs `python3 scripts/publish.py`: it rebuilds the pages from content, runs the validation, and exports visitor-facing files to `dist`. Source content, scripts and review documents are excluded from the hosted output. Python is used only during the build; the deployed site has no backend, database or environment secrets.

To work from another computer, clone the repository, edit the content or design, run `npm run build` and `npm test`, then commit and push. Confirm that the Vercel deployment succeeds before considering an update live. Direct project editing within the portfolio is not implemented; use the existing showroom manager for its own project catalog.

The ready-to-open ZIP includes source and built pages. `.vercel`, `.git`, generated `dist` and local environment files should stay out of shared ZIP archives.

The separate app-showroom repository contains the complete project stories; its Etzan page is linked from this portfolio.
