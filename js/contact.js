/* ============================================================
   ZAHRA INTERIOR ARCHITECTURE — Contact Form Validation
   ============================================================ */

(function () {
  'use strict';

  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');

  if (!form) return;

  /* ── HELPERS ─────────────────────────────────────────── */
  const isValidEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

  function setError(inputId, errorId, show) {
    const input   = document.getElementById(inputId);
    const errorEl = document.getElementById(errorId);
    const group   = input?.closest('.contact-form-group');

    if (!input || !errorEl || !group) return;

    if (show) {
      errorEl.classList.add('show');
      group.classList.add('has-error');
      input.setAttribute('aria-invalid', 'true');
      input.setAttribute('aria-describedby', errorId);
    } else {
      errorEl.classList.remove('show');
      group.classList.remove('has-error');
      input.removeAttribute('aria-invalid');
      input.removeAttribute('aria-describedby');
    }
  }

  /* ── LIVE VALIDATION (on blur) ───────────────────────── */
  const liveValidate = (inputId, errorId, checkFn) => {
    const input = document.getElementById(inputId);
    if (!input) return;

    input.addEventListener('blur', () => {
      setError(inputId, errorId, !checkFn(input.value));
    });

    input.addEventListener('input', () => {
      // Remove error as user types (after first blur)
      if (input.getAttribute('aria-invalid') === 'true') {
        setError(inputId, errorId, !checkFn(input.value));
      }
    });
  };

  liveValidate('firstName', 'firstNameError', (v) => v.trim().length > 0);
  liveValidate('lastName',  'lastNameError',  (v) => v.trim().length > 0);
  liveValidate('email',     'emailError',     (v) => isValidEmail(v));
  liveValidate('message',   'messageError',   (v) => v.trim().length > 10);

  /* ── SELECT VALIDATION ───────────────────────────────── */
  const budgetSelect = document.getElementById('budget');
  if (budgetSelect) {
    budgetSelect.addEventListener('blur', () => {
      setError('budget', 'budgetError', !budgetSelect.value);
    });
  }

  /* ── FORM SUBMIT ─────────────────────────────────────── */
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let hasError = false;

    // First name
    const firstName = document.getElementById('firstName');
    if (!firstName?.value.trim()) {
      setError('firstName', 'firstNameError', true);
      hasError = true;
    } else {
      setError('firstName', 'firstNameError', false);
    }

    // Last name
    const lastName = document.getElementById('lastName');
    if (!lastName?.value.trim()) {
      setError('lastName', 'lastNameError', true);
      hasError = true;
    } else {
      setError('lastName', 'lastNameError', false);
    }

    // Email
    const email = document.getElementById('email');
    if (!email || !isValidEmail(email.value)) {
      setError('email', 'emailError', true);
      hasError = true;
    } else {
      setError('email', 'emailError', false);
    }

    // Budget
    const budget = document.getElementById('budget');
    if (!budget?.value) {
      setError('budget', 'budgetError', true);
      hasError = true;
    } else {
      setError('budget', 'budgetError', false);
    }

    // Message
    const message = document.getElementById('message');
    if (!message || message.value.trim().length < 10) {
      setError('message', 'messageError', true);
      hasError = true;
    } else {
      setError('message', 'messageError', false);
    }

    if (hasError) {
      // Move focus to first error field
      const firstError = form.querySelector('[aria-invalid="true"]');
      if (firstError) firstError.focus();
      return;
    }

    /* ── SUCCESS ─────────────────────────────────────── */
    // In production this would POST to an endpoint / Netlify Forms / etc.
    // For this static demo we simply show the success state.

    const submitBtn = form.querySelector('[type="submit"]');
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending…';
    }

    // Simulate async network request
    setTimeout(() => {
      form.style.display = 'none';
      if (success) {
        success.classList.add('show');
        success.focus();
      }
    }, 800);
  });

})();
