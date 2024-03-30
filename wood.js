const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const submitBtn = document.getElementById('submitBtn');

emailInput.addEventListener('input', validateEmail);
passwordInput.addEventListener('input', validatePassword);
submitBtn.addEventListener('click', handleSubmit);

function validateEmail() {
  const email = emailInput.value.trim();
  if (email.length < 3 || !email.includes('@') || !email.includes('.')) {
    emailError.textContent = 'Email is invalid';
    emailError.classList.remove('success');
  } else {
    emailError.textContent = 'All good to go';
    emailError.classList.add('success');
  }
}

function validatePassword() {
  const password = passwordInput.value.trim();
  if (password.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters long';
    passwordError.classList.remove('success');
  } else {
    passwordError.textContent = 'All good to go';
    passwordError.classList.add('success');
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const emailValid = validateEmail();
  const passwordValid = validatePassword();

  if (emailValid && passwordValid) {
    const confirmation = confirm('Do you want to submit?');
    if (confirmation) {
      alert('Successful signup!');
    } else {
      window.location.href = window.location.href;
      emailInput.value = '';
      passwordInput.value = '';
      emailError.textContent = '';
      passwordError.textContent = '';
    }
  }
}
