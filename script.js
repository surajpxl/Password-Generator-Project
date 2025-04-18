// Function to generate the password
function generatePassword() {
  const uppercase = document.getElementById('uppercase').checked;
  const lowercase = document.getElementById('lowercase').checked;
  const numbers = document.getElementById('numbers').checked;
  const symbols = document.getElementById('symbols').checked;
  const length = parseInt(document.getElementById('length').value);
  
  let charSet = '';
  let password = '';

  // Add character sets based on user selection
  if (uppercase) charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (lowercase) charSet += 'abcdefghijklmnopqrstuvwxyz';
  if (numbers) charSet += '0123456789';
  if (symbols) charSet += '!@#$%^&*()_-+=<>?';

  // If no character set is selected, alert the user
  if (charSet === '') {
      alert('Please select at least one character type.');
      return;
  }

  // Generate random password
  for (let i = 0; i < length; i++) {
      password += charSet.charAt(Math.floor(Math.random() * charSet.length));
  }

  // Display the generated password
  document.getElementById('password').value = password;
}

// Function to copy the password to clipboard
function copyPassword() {
  const passwordField = document.getElementById('password');
  passwordField.select();
  document.execCommand('copy');
  alert('Password copied to clipboard!');
}

// Update the length value on slider change
document.getElementById('length').addEventListener('input', (event) => {
  document.getElementById('lengthValue').textContent = event.target.value;
});

// Event listener for the generate button
document.getElementById('generate').addEventListener('click', generatePassword);

// Event listener for the copy button
document.getElementById('copy').addEventListener('click', copyPassword);
