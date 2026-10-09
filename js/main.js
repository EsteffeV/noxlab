// Petit script sans dépendance : menu mobile + envoi du formulaire.

// Menu mobile
const toggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('#nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('is-open');
    toggle.setAttribute('aria-expanded', String(open));
  });
  // Referme le menu après un clic sur un lien
  nav.addEventListener('click', (e) => {
    if (e.target.closest('a')) {
      nav.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// Formulaire : envoi en arrière-plan (fonctionne avec Formspree, Getform, Basin…)
const form = document.querySelector('#contact-form');

if (form) {
  const status = form.querySelector('.form__status');

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = status.dataset.sending;

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });
      if (!res.ok) throw new Error(res.status);
      form.reset();
      status.textContent = status.dataset.ok;
    } catch (err) {
      status.textContent = status.dataset.error;
    }
  });
}
