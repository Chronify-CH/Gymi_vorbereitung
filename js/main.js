document.addEventListener('DOMContentLoaded', function () {
  // ---- Sticky header on scroll ----
  var header = document.getElementById('siteHeader');
  function updateHeader() {
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add('is-scrolled');
    } else {
      header.classList.remove('is-scrolled');
    }
  }
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  // ---- Mobile nav toggle ----
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');
  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('is-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('is-open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- "Erstgespräch buchen": jump straight to the form once the contact
  // card and form are stacked (single-column layout), instead of landing on
  // the contact card above it. Side-by-side (wide) layout is left as-is. ----
  var navCtaBtn = document.getElementById('navCtaBtn');
  var contactForm = document.getElementById('kontakt-formular');
  if (navCtaBtn && contactForm) {
    navCtaBtn.addEventListener('click', function (e) {
      if (window.matchMedia('(max-width: 1000px)').matches) {
        e.preventDefault();
        contactForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (history.replaceState) history.replaceState(null, '', '#kontakt-formular');
      }
    });
  }

  // ---- FAQ accordion ----
  document.querySelectorAll('.faq-item').forEach(function (item) {
    var question = item.querySelector('.faq-question');
    if (!question) return;
    question.addEventListener('click', function () {
      var wasOpen = item.classList.contains('is-open');
      document.querySelectorAll('.faq-item').forEach(function (el) {
        el.classList.remove('is-open');
      });
      if (!wasOpen) item.classList.add('is-open');
    });
  });

  // ---- Scroll reveal ----
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealEls.length) {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { observer.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('is-visible'); });
  }

  // ---- Contact form (mailto fallback, no backend required) ----
  var form = document.getElementById('contactForm');
  var successBox = document.getElementById('formSuccess');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var phone = form.phone.value.trim();
      var grade = form.grade.value.trim();
      var message = form.message.value.trim();

      var bodyLines = [
        'Name: ' + name,
        'E-Mail: ' + email,
        'Telefon: ' + (phone || '-'),
        'Klasse: ' + (grade || '-'),
        '',
        'Nachricht:',
        message
      ];

      var subject = encodeURIComponent('Anfrage Gymi-Vorbereitung: ' + name);
      var body = encodeURIComponent(bodyLines.join('\n'));
      var mailtoLink = 'mailto:arthpetr14@gmail.com?subject=' + subject + '&body=' + body;

      window.location.href = mailtoLink;

      if (successBox) {
        successBox.classList.add('is-visible');
        successBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      form.reset();
    });
  }

  // ---- Footer year ----
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
