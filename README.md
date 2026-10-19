# ARTESRAN

Personal site for Artesran: profile, work experience and projects. Built with React and Vite, styled
with Bootstrap 3 and the site's own stylesheets.

## Run it

```sh
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run lint
```

## Where things live

| What | File |
|---|---|
| Site name | `src/brand.js` |
| Profile, social links, experience | `src/data/profile.js` |
| Projects (titles, images, categories, status, facts) | `src/data/projects.js` |
| Long project write-ups (Description tab) | `src/data/descriptions/` |
| Header dropdowns (project progress, reviews) | `src/data/header.js` |
| Sidebar menu | `src/data/menu.js` |
| Images | `public/img/` |
| Colours, fonts, Bootstrap adjustments | `src/styles/base.css` |
| Header, sidebar, footer styles | `src/layout/layout.css` |
| Page styles | `src/pages/*/*.css`, next to each page |

`reference/` holds source files that aren't published (the original site CSS, the avatar sheet).

## Deploying

Hosted on Cloudflare Pages, built from this repository: build command `npm run build`, output
directory `dist`. Paths like `/projects/2` are served by the app (no `404.html`, so Pages treats it
as a single-page app).

File names are case-sensitive once deployed, even though Windows ignores case.
