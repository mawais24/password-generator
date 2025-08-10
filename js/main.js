const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let passwordOptionOne = document.getElementById("passwordOne");
let passwordOptionTwo = document.getElementById("passwordTwo");
let includeNumbers = true;
let includeSymbols = true;

function toggleOption(option) {
  if (option === "numbers") {
    includeNumbers = !includeNumbers;
    document.getElementById("include-numbers").classList.toggle("active");
  } else if (option === "symbols") {
    includeSymbols = !includeSymbols;
    document.getElementById("include-symbols").classList.toggle("active");
  }
}

// Random Number Generator
function numGenerator(passLength) {
  let pool = characters.slice(); // start with all characters

  if (!includeNumbers) {
    pool = pool.filter((ch) => isNaN(ch)); // remove digits
  }

  if (!includeSymbols) {
    pool = pool.filter((ch) => /[A-Za-z0-9]/.test(ch)); // keep only letters & numbers
  }

  // If both numbers & symbols are OFF → letters only
  if (!includeNumbers && !includeSymbols) {
    pool = pool.filter((ch) => /[A-Za-z]/.test(ch));
  }

  let randomValue = "";
  for (let i = 0; i < passLength; i++) {
    let randomIndex = Math.floor(Math.random() * pool.length);
    randomValue += pool[randomIndex];
  }
  return randomValue;
}

// Password Generator

function generatePasswords() {
  let passwordLength = document.getElementById("password-length").value;
  passwordOptionOne.textContent = numGenerator(passwordLength);
  passwordOptionTwo.textContent = numGenerator(passwordLength);
}

// For copy password on clipboard
const copyableFields = document.querySelectorAll(".copyable-field");

console.log(copyableFields);
copyableFields.forEach((field) => {
  field.addEventListener("click", function () {
    const textToCopy = this.textContent;
    navigator.clipboard
      .writeText(textToCopy)
      .then(() => {
        console.log("Text copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  });
});
