/* ===== SHARED PORTFOLIO JAVASCRIPT ===== */

// ── Nav scroll effect ──────────────────────────────────────────────
const nav = document.querySelector('.site-nav');
if(nav){
  const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll, {passive:true});
  onScroll();
}

// ── Hamburger menu ─────────────────────────────────────────────────
const hamburger = document.querySelector('.hamburger');
const drawer    = document.querySelector('.nav-drawer');
if(hamburger && drawer){
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    drawer.classList.toggle('open');
    document.body.style.overflow = drawer.classList.contains('open') ? 'hidden' : '';
  });
  drawer.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      hamburger.classList.remove('open');
      drawer.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

// ── Scroll-reveal ──────────────────────────────────────────────────
const reveals = document.querySelectorAll('.reveal');
if(reveals.length){
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if(e.isIntersecting){
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, {threshold: 0.12, rootMargin:'0px 0px -40px 0px'});
  reveals.forEach((el, i) => {
    el.style.transitionDelay = (i * 0.08) + 's';
    io.observe(el);
  });
}

// ── Toast helper ───────────────────────────────────────────────────
function showToast(msg, isError = false){
  let toast = document.querySelector('.toast');
  if(!toast){
    toast = document.createElement('div');
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.className = 'toast' + (isError ? ' error' : '');
  // force reflow
  void toast.offsetWidth;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

// ── Contact form backend (Formspree) ───────────────────────────────
const contactForm = document.querySelector('#contact-form');
if(contactForm){
  const btn    = contactForm.querySelector('.form-submit');
  const inputs = contactForm.querySelectorAll('input, textarea');

  // Live validation feedback
  inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if(input.classList.contains('invalid')) validateField(input);
    });
  });

  function validateField(field){
    const err = field.nextElementSibling;
    if(!err || !err.classList.contains('field-error')) return true;
    let msg = '';
    if(field.validity.valueMissing)  msg = 'This field is required.';
    else if(field.type === 'email' && field.validity.typeMismatch) msg = 'Please enter a valid email address.';
    else if(field.value.trim().length < 2) msg = 'Too short.';
    field.classList.toggle('invalid', !!msg);
    err.textContent = msg;
    return !msg;
  }

  function validateAll(){
    let ok = true;
    inputs.forEach(f => { if(!validateField(f)) ok = false; });
    return ok;
  }

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if(!validateAll()) return;

    btn.disabled = true;
    btn.textContent = 'Sending…';

    // Formspree endpoint — replace YOUR_FORM_ID with your actual Formspree ID
    // Sign up free at formspree.io, create a form, and paste your endpoint below.
    const FORMSPREE_ENDPOINT = contactForm.dataset.endpoint || 'https://formspree.io/f/YOUR_FORM_ID';

    try{
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method:'POST',
        headers:{'Accept':'application/json'},
        body: new FormData(contactForm)
      });
      if(res.ok){
        showToast('✓ Message sent! I\'ll get back to you soon.');
        contactForm.reset();
        inputs.forEach(f => f.classList.remove('invalid'));
      } else {
        const data = await res.json();
        const msg = data?.errors?.map(x=>x.message).join(', ') || 'Something went wrong.';
        showToast(msg, true);
      }
    } catch(err){
      showToast('Network error. Please try again.', true);
    } finally {
      btn.disabled = false;
      btn.textContent = 'Send Message';
    }
  });
}
