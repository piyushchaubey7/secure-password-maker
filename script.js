const passwordBox = document.getElementById("password");
const lengthInput = document.getElementById("lengthInput");
const lengthRange = document.getElementById("lengthRange");
const generateBtn = document.getElementById("generateBtn");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "@#$%^&*()_+~|}{[]:;?><,./-=";

// Theme switch toggle
document.getElementById("modeToggle").addEventListener("change", () => {
  document.body.classList.toggle("light-mode");
});

// Sync number input and range
lengthInput.addEventListener("input", () => {
  lengthRange.value = lengthInput.value;
});

lengthRange.addEventListener("input", () => {
  lengthInput.value = lengthRange.value;
});

// Generate password
generateBtn.addEventListener("click", () => {
  const length = +lengthInput.value;
  let characters = "";

  if (document.getElementById("uppercase").checked) characters += uppercase;
  if (document.getElementById("lowercase").checked) characters += lowercase;
  if (document.getElementById("numbers").checked) characters += numbers;
  if (document.getElementById("symbols").checked) characters += symbols;

  if (characters.length === 0) {
    alert("Please select at least one character type.");
    return;
  }

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters.charAt(randomIndex);
  }

  passwordBox.value = password;
});

// Copy to clipboard
function copyPassword() {
  const password = passwordBox.value;
  if (!password) {
    alert("Nothing to copy!");
    return;
  }

  navigator.clipboard.writeText(password)
    .then(() => {
      alert("Password copied!");
    })
    .catch(() => {
      alert("Failed to copy!");
    });
}
