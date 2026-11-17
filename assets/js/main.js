/* ==========================================================================
   Sistemas Paraguay · Interacciones del sitio
   Sin dependencias. Todo el contenido funciona aunque este archivo no cargue.
   ========================================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Encabezado: sombra suave al hacer scroll -------------------------------- */
  var header = document.querySelector('.site-header');
  function onScroll() {
    if (header) header.classList.toggle('is-scrolled', window.scrollY > 8);
  }
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  /* Menú móvil ---------------------------------------------------------------- */
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('menu-movil');

  function setMenu(open) {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    menu.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  }

  if (toggle && menu) {
    toggle.addEventListener('click', function () {
      setMenu(toggle.getAttribute('aria-expanded') !== 'true');
    });
    menu.addEventListener('click', function (event) {
      if (event.target.closest('a')) setMenu(false);
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && menu.classList.contains('is-open')) {
        setMenu(false);
        toggle.focus();
      }
    });
    var desktop = window.matchMedia('(min-width: 1080px)');
    var closeOnDesktop = function (event) { if (event.matches) setMenu(false); };
    if (desktop.addEventListener) desktop.addEventListener('change', closeOnDesktop);
  }

  /* Aparición suave de bloques al entrar en pantalla ------------------------- */
  var revealItems = document.querySelectorAll('[data-reveal]');
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    revealItems.forEach(function (item) { revealObserver.observe(item); });
  } else {
    revealItems.forEach(function (item) { item.classList.add('is-visible'); });
  }

  /* Contadores animados (el HTML ya trae el número final) -------------------- */
  var counters = document.querySelectorAll('[data-count]');
  function formatNumber(value) {
    return value.toLocaleString('es-PY');
  }
  function runCounter(el) {
    var target = parseInt(el.getAttribute('data-count'), 10);
    if (isNaN(target)) return;
    var start = null;
    var duration = 1500;
    function step(timestamp) {
      if (!start) start = timestamp;
      var progress = Math.min((timestamp - start) / duration, 1);
      var eased = 1 - Math.pow(1 - progress, 3);
      el.textContent = formatNumber(Math.round(target * eased));
      if (progress < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }
  if (!reduceMotion && 'IntersectionObserver' in window) {
    var counterObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          runCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.6 });
    counters.forEach(function (counter) { counterObserver.observe(counter); });
  }

  /* Año actual en el pie de página ------------------------------------------- */
  document.querySelectorAll('[data-year]').forEach(function (el) {
    el.textContent = String(new Date().getFullYear());
  });

  /* Formulario de contacto ---------------------------------------------------- */
  /* No hay servidor: el formulario arma el mensaje y abre WhatsApp o el correo. */
  var form = document.getElementById('form-contacto');
  if (!form) return;

  var status = form.querySelector('.form__status');
  var lastSubmitter = null;
  form.querySelectorAll('button[type="submit"]').forEach(function (button) {
    button.addEventListener('click', function () { lastSubmitter = button; });
  });

  var messages = {
    nombre: 'Contanos cómo te llamás.',
    email: 'Revisá el correo: parece que le falta algo.',
    mensaje: 'Escribinos un mensaje cortito para saber en qué te ayudamos.'
  };

  function setError(field, text) {
    var error = document.getElementById(field.id + '-error');
    if (text) {
      field.setAttribute('aria-invalid', 'true');
    } else {
      field.removeAttribute('aria-invalid');
    }
    if (error) error.textContent = text || '';
  }

  function validate() {
    var firstInvalid = null;
    ['nombre', 'email', 'mensaje'].forEach(function (name) {
      var field = form.elements[name];
      if (!field) return;
      var valid = field.checkValidity();
      setError(field, valid ? '' : messages[name]);
      if (!valid && !firstInvalid) firstInvalid = field;
    });
    return firstInvalid;
  }

  form.addEventListener('input', function (event) {
    var field = event.target;
    if (field.getAttribute('aria-invalid') === 'true' && field.checkValidity()) {
      setError(field, '');
    }
  });

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    var submitter = event.submitter || lastSubmitter;
    var channel = submitter && submitter.value === 'correo' ? 'correo' : 'whatsapp';

    var invalid = validate();
    if (invalid) {
      status.className = 'form__status form__status--error';
      status.textContent = 'Revisá los campos marcados y volvé a intentar.';
      invalid.focus();
      return;
    }

    var data = {
      nombre: form.elements.nombre.value.trim(),
      empresa: form.elements.empresa.value.trim(),
      telefono: form.elements.telefono.value.trim(),
      email: form.elements.email.value.trim(),
      servicio: form.elements.servicio.value,
      mensaje: form.elements.mensaje.value.trim()
    };

    var lines = ['¡Hola, Sistemas Paraguay! Soy ' + data.nombre + (data.empresa ? ', de ' + data.empresa : '') + '.'];
    if (data.servicio) lines.push('Me interesa: ' + data.servicio + '.');
    lines.push('', data.mensaje, '');
    var contact = [data.telefono, data.email].filter(Boolean).join(' · ');
    if (contact) lines.push('Mis datos de contacto: ' + contact);
    var text = lines.join('\n');

    if (channel === 'correo') {
      var subject = 'Consulta desde la web' + (data.servicio ? ': ' + data.servicio : '');
      window.location.href = 'mailto:' + form.getAttribute('data-email') +
        '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(text);
      status.className = 'form__status';
      status.textContent = '¡Aguyje! Abrimos tu programa de correo con el mensaje listo. Solo tenés que enviarlo.';
    } else {
      var url = 'https://wa.me/' + form.getAttribute('data-whatsapp') + '?text=' + encodeURIComponent(text);
      // Sin 'noopener' en window.open: con esa opcion el navegador devuelve null
      // aunque la ventana se abra, y no podriamos detectar un bloqueo de popups.
      var opened = window.open(url, '_blank');
      if (opened) {
        opened.opener = null;
      } else {
        window.location.href = url;
      }
      status.className = 'form__status';
      status.textContent = '¡Aguyje! Abrimos WhatsApp con tu mensaje listo. Solo tenés que tocar Enviar.';
    }
  });
})();
