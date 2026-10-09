# Nox Lab website

Static site: HTML + CSS + a little JavaScript. No install, no build step.
Open `index.html` in a browser to see the site. The site is in English only.

```
index.html          home page
legal-notice.html   legal notice (placeholder)
privacy.html        privacy policy (placeholder)
css/style.css       all styles (colours and fonts at the top of the file)
js/main.js          mobile menu + form submission
assets/             images, favicon
```

## Editing the site

- **Text**: directly in `index.html`. Each section has an `id`: `services`, `cases`, `approach`, `team`, `contact`.
- **Colours, fonts, spacing**: variables at the top of `css/style.css` (`:root`). Changing `--accent` changes the green everywhere.
- **Brand name**: "Nox Lab" is plain text. Search and replace "Nox Lab" in all files (name, logo, page titles, footer).
- **Add a case**: copy an `<article class="card case-card">…</article>` block into the grid.
- **Add a service**: copy an `<li class="service">…</li>`.
- **Add a page** (e.g. a detailed case study): copy `legal-notice.html`, keep the same `<head>`, adjust the title.

## Photos

Each `<div class="photo">` holds placeholder text. Replace it with an image (saved in `assets/`):

```html
<div class="photo"><img src="assets/zeynep.jpg" alt="Zeynep Yenigun in the lab" width="800" height="450"></div>
```

Recommended format: JPG or WebP, at most 1600 px wide for the hero and 800 px for the team, under 300 KB each.
The main case chart is replaced the same way (`.case-main__chart`).

## The form

A static site cannot send e-mail on its own. The form is ready for a free service such as [Formspree](https://formspree.io): create a form, copy its URL and replace `https://formspree.io/f/YOUR_ID` in the `action` attribute. If you host on Netlify, its built-in form handling works too.

## Going live

Any static host works: Netlify, Cloudflare Pages, GitHub Pages or a classic web host. Upload the folder as is. HTTPS and the domain name are set up at the host.

## Before going live

- [ ] Final name chosen (trademark and domain checked) and domain reserved
- [ ] Replace every `[BRACKET]`: e-mail, reply time, number of drivers in case study 1, demo link, full name of HDG
- [ ] Case study 2: dataset chosen and its licence confirmed (commercial use must be allowed)
- [ ] Real photos (hero, team) and the case study 1 chart
- [ ] Case study 1 text
- [ ] Field experience list checked by both partners
- [ ] Form URL
- [ ] Complete and have the legal notice and privacy policy reviewed (the form collects personal data)
- [ ] Add the share image (`og:image`) for LinkedIn
