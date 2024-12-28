const input = document.getElementById("user-input");
const check = document.getElementById("check-btn");
const clear = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

const regex1 = /(1\s?)?/; //Optional (?) one with spaces (s)
const regex2 = /(\(\d{3}\)|\d{3})/; //Three digit (\d{3}) optional parenthesis (\) no ? because matching one parenthesis. Or x|y
const regex3 = /([\s-]?)/; //Optional (?) hyphen or spaces between numbers
const regex4 = /\d{3}/; //Three digits
const regex5 = /([\s-]?)/; //Optional (?) hyphen or spaces between numbers
const regex6 = /\d{4}/; //Four digits

//Test Regex > regex.test("string")

check.addEventListener("click", () => {
  const totalRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s-]?)\d{3}([\s-]?)\d{4}$/;
  if (input.value === "") {
    alert("Please provide a phone number");
  } 
  if (totalRegex.test(input.value)) {
    results.textContent = "Valid US number: " + input.value;
  } else {
    results.textContent = "Invalid US number: " + input.value;
  }
})

clear.addEventListener("click", () => results.textContent = "")
