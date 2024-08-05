document.getElementById('registrationForm').addEventListener('submit', function(event) {
  validateForm(event);
});

function validateForm(event) {
  let form = document.getElementById('registrationForm');
  let isValid = true;

  // Clear previous errors
  document.querySelectorAll('.error').forEach(e => e.remove());

  // Check username
  let usernameField = document.getElementById('username');
  if (!usernameField.validity.valid) {
    isValid = false;
    showError(usernameField, 'Username is required');
  }

  // Check email
  let emailField = document.getElementById('email');
  if (!emailField.validity.valid) {
    isValid = false;
    showError(emailField, 'Invalid email address');
  }

  // Check password
  let passwordField = document.getElementById('password');
  if (passwordField.value.length < 8) {
    isValid = false;
    showError(passwordField, 'Password must be at least 8 characters');
  }

  // Prevent form submission if invalid
  if (!isValid) {
    event.preventDefault();
  } else {
    alert('Form submitted successfully!');
    form.reset();
  }
}

function showError(field, message) {
  let errorDiv = document.createElement('div');
  errorDiv.className = 'error';
  errorDiv.innerText = message;
  field.parentNode.insertBefore(errorDiv, field.nextSibling);
}
