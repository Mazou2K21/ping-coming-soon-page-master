// Elements
const notifyBtn = document.querySelector('.notify-btn');
const emailInput = document.querySelector('.input');
const emailError = document.querySelector('.error-msg');

notifyBtn.addEventListener('click', (event) => {
  // prevent default
  event.preventDefault();

  const emailRegex = /^\S+@\S+$/;

  // 1. if the input field is empty show error message
  if (!emailInput.value.length) {
    emailError.textContent = 'Email cannot be Empty';
    emailInput.classList.add('input-error');
    emailError.classList.remove('hidden');
  }
  // 2. if invalid email show the appropriate email
  else if (!emailRegex.test(emailInput.value)) {
    emailError.textContent = 'Please provide a valid email address';
    emailInput.classList.add('input-error');
    emailError.classList.remove('hidden');
  }
  // 3. if valid, accept the input and clear the form
  else {
    emailInput.value = null;
    emailInput.classList.remove('input-error');
    emailError.classList.add('hidden');
  }
});