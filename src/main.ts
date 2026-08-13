document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const step0 = document.querySelector('.hero-card-step.step-0');
  const step1 = document.querySelector('.hero-card-step.step-1');
  const step2 = document.querySelector('.hero-card-step.step-2');

  // 1. Lock scrolling on page load
  body.classList.add('intro-locked');

  // 2. Show STEP 0 ("Hold tight...") immediately
  step0?.classList.add('is-active');

  // 3. Transition to STEP 1 ("INTRODUCING") at 2 seconds
  setTimeout(() => {
    step0?.classList.remove('is-active');
    step1?.classList.add('is-active');
  }, 2000);

  // 4. Transition to STEP 2 (Logo reveal) at 3.8 seconds
  setTimeout(() => {
    step1?.classList.remove('is-active');
    step2?.classList.add('is-active');
  }, 3800);

  // 5. Unlock scroll so the rest of the page (description, particles, countdown) can be scrolled
  setTimeout(() => {
    body.classList.remove('intro-locked');
  }, 4800);
});