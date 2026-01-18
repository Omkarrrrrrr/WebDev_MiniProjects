const passwordBox = document.getElementById("password");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbols = `!@#$%^&*()_+-={}[]|:;"'<>?/~`;
const allChars = upperCase + lowerCase + number + symbols;

let length = 12;

function createPassword() {
  let password = "";


  password += upperCase[randomIndex(upperCase)];
  password += lowerCase[randomIndex(lowerCase)];
  password += number[randomIndex(number)];
  password += symbols[randomIndex(symbols)];

  while (password.length < length) {
    password += allChars[randomIndex(allChars)];
  }

  password = shufflePassword(password);
  passwordBox.value = password;

  updateStrength(password);
}

const slider = document.getElementById("lengthslider");
const lenval = document.getElementById("lenval");

slider.oninput = () => {
  length = Number(slider.value);
  lenval.textContent = length;
};


function copyPassword() {
  if (passwordBox.value === "") {
    alert("Generate a password first!");
    return;
  }

  if (navigator.clipboard) {
    navigator.clipboard.writeText(passwordBox.value)
      .then(() => alert("Password copied!"))
      .catch(() => fallbackCopy());
  } else {
    fallbackCopy();
  }
}

function fallbackCopy() {
  passwordBox.select();
  document.execCommand("copy");
  alert("Password copied!");
}

const strengthText = document.getElementById("strengthText");
const strengthFill = document.getElementById("strengthFill");

function updateStrength(password) {
  let score = 0;

  if (password.length >= 8) score++;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  strengthFill.className = "strength-fill";

  if (score <= 2) {
    strengthText.textContent = "Weak";
    strengthFill.style.width = "33%";
    strengthFill.classList.add("weak");
  } 
  else if (score <= 4) {
    strengthText.textContent = "Medium";
    strengthFill.style.width = "66%";
    strengthFill.classList.add("medium");
  } 
  else {
    strengthText.textContent = "Strong";
    strengthFill.style.width = "100%";
    strengthFill.classList.add("strong");
  }
}


function randomIndex(str) {
  return Math.floor(Math.random() * str.length);
}

function shufflePassword(str) {
  return str.split("").sort(() => 0.5 - Math.random()).join("");
}
