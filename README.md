# Site sentio

Site statique : HTML + CSS + un peu de JavaScript. Pas d'installation, pas de build.
Ouvrez `index.html` dans un navigateur pour voir le site.

```
index.html               page d'accueil (FR)
en/index.html            page d'accueil (EN)
mentions-legales.html    pages légales FR (provisoires)
confidentialite.html
en/legal-notice.html     pages légales EN (provisoires)
en/privacy.html
css/style.css            tout le style (couleurs et polices en haut du fichier)
js/main.js               menu mobile + envoi du formulaire
assets/                  images, favicon
```

## Modifier le site

- **Textes** : directement dans `index.html` (FR) et `en/index.html` (EN). Chaque section est repérable par son `id` (`services`, `cas`, `methode`, `equipe`, `contact`).
- **Couleurs, police, espacements** : variables au début de `css/style.css` (`:root`). Changer `--accent` change le vert partout.
- **Nom de la marque** : « sentio » est un texte simple. Rechercher / remplacer « sentio » dans tous les fichiers (nom, logo, titre, pied de page, favicon).
- **Ajouter un cas** : copier un bloc `<article class="card case-card">…</article>` dans la grille.
- **Ajouter un service** : copier un `<li class="service">…</li>`.
- **Ajouter une page** (ex. une étude de cas détaillée) : copier `mentions-legales.html`, garder le même `<head>`, ajuster le titre.

## Les photos

Chaque `<div class="photo">` contient un texte provisoire. Remplacez-le par une image (déposée dans `assets/`) :

```html
<div class="photo"><img src="assets/zeynep.jpg" alt="Zeynep Yenigun au laboratoire" width="800" height="450"></div>
```

Format conseillé : JPG ou WebP, 1600 px de large au maximum pour le hero, 800 px pour l'équipe, moins de 300 Ko chacune.
Le graphique du cas principal se remplace de la même façon (`.case-main__chart`).

## Le formulaire

Un site statique ne peut pas envoyer d'e-mail seul. Le formulaire est prêt pour un service gratuit comme [Formspree](https://formspree.io) : créez un formulaire, copiez son URL et remplacez `https://formspree.io/f/VOTRE_ID` dans l'attribut `action` (FR et EN). Si vous hébergez sur Netlify, leur gestion de formulaires intégrée marche aussi.

## Mettre en ligne

N'importe quel hébergement de fichiers statiques convient : Netlify, Cloudflare Pages, GitHub Pages ou un hébergeur classique. Il suffit de déposer le dossier tel quel. Le HTTPS et le nom de domaine se règlent chez l'hébergeur.

## Avant la mise en ligne

- [ ] Nom final et domaine réservés
- [ ] Remplacer tous les `[CROCHETS]` : prénom de la co-fondatrice, e-mail, délai de réponse
- [ ] Photos réelles (hero, équipe) et graphique du cas principal
- [ ] Texte du cas « Fatigue au volant » et liens « Source » / « Scientific Data »
- [ ] URL du formulaire
- [ ] Compléter et faire relire les mentions légales et la politique de confidentialité (le formulaire collecte des données personnelles)
- [ ] Ajouter l'image de partage (`og:image`) pour LinkedIn
