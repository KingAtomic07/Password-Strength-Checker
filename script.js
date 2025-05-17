document.getElementById('password').addEventListener('input', function () {
  const password = this.value;
  const strengthText = document.getElementById('strength');

  let strength = 0;
  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[\W]/.test(password)) strength++;

  if (strength <= 2) {
    strengthText.innerText = 'Weak';
    strengthText.style.color = 'red';
  } else if (strength <= 4) {
    strengthText.innerText = 'Medium';
    strengthText.style.color = 'orange';
  } else {
    strengthText.innerText = 'Strong';
    strengthText.style.color = 'green';
  }
});
