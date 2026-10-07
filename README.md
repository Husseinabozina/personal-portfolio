# Hussein Abozina — Personal Portfolio V7

A portable English/Arabic personal portfolio, rebuilt from the supplied V6 archive. The personal site introduces Hussein, his experience and three selected projects. The separate [App Showroom](https://husseinabozina.github.io/app-showroom/) contains the full project stories and evidence.

## Preview

Open `index.html` directly, or run `npm run dev` and visit http://localhost:4181/. Python 3 is the only build/server requirement; npm is an optional command shortcut. There are no installed packages, remote fonts, API keys or backend services.

## Edit and rebuild

- `content/profile.json`: contact email, CV, GitHub and showroom destinations.
- `content/projects.json`: the three curated homepage projects, text in English/Arabic, images and destinations. Use `visible` and `order` to control selection. Keep the homepage to three projects; publish the full collection in the showroom.
- `content/earlier-projects.json`: the four preserved V6 case-study routes.
- `scripts/build.py`: shared page template and bilingual profile/experience copy.
- `assets/styles.css`: visual system, responsive layouts and RTL styling.
- `assets/app.js`: language persistence, accessible mobile navigation and anchor focus.
- `assets/docs/Hussein_Abozina_CV.pdf`: the supplied V2 PDF, unchanged.

After editing content, run `npm run build` then `npm test` (or `python3 scripts/build.py` and `python3 scripts/verify.py`). The resulting HTML is pre-rendered and can be hosted as static files. Essential content and links work without JavaScript. Language changes use local storage when available, with a safe fallback when storage is blocked.

## Images and factual boundaries

MyShop, Brees and HealthTrack use actual app captures copied from the existing showroom. They are independent engineering demonstrations, not claimed production services. Brees and HealthTrack retain attribution to their Figma Community design references. MyShop checkout is explicitly Sandbox. See `docs/CONTENT-SOURCES.md`.

The old project URLs remain functional with the updated shared design; they do not crowd the homepage. The original Mushaf image is preserved byte-for-byte. Fonts are local Manrope files under the included SIL Open Font License; Arabic uses system fonts.

## Delivery and hosting

This version is a separate local Git repository with incremental commits. It has no GitHub remote and is not published. The ready-to-open ZIP includes the source and built pages. To publish later, upload the website files to a static host or connect this repository to GitHub Pages. Do not include `.git` or internal review notes in a public upload. Set a canonical URL after choosing the real hosting URL; no fictitious domain is embedded.

The separate app-showroom repository and deployment were not modified by this work.
