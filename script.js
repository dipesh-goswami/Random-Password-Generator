const length = 12;
const inputText = document.getElementById("input-text");
const copyText = document.getElementById("copy");

let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerCase = "abcdefghijklmnopqrstuvwxyz";
let numbers = "1234567890";
let symbols = "!@#$%^&*()~_-?{}[]<>/";
let mix = upperCase + lowerCase + numbers + symbols;

function generatePassword() {
  let password = "";
  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += numbers[Math.floor(Math.random() * numbers.length)];
  password += symbols[Math.floor(Math.random() * symbols.length)];
  while (password.length < length) {
    password += mix[Math.floor(Math.random() * mix.length)];
  }
  inputText.value = password;
}

function copyPassword() {
  inputText.select();
  document.execCommand("copy");
}