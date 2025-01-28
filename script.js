const input = document.getElementById("text-input");
const button = document.getElementById("check-btn");
const result = document.getElementById("result");

const checkPalindrome = (input) => {
  const originalInput = input;

  if (input === "") {
    alert("Please input a value");
    return;
  }

  result.replaceChildren();

  const lowerCaseStr = input.replace(/[^A-Za-z0-9]/gi, "").toLowerCase(); // remove non alphanumeric characters
  let resultMessage = `<strong>${originalInput}</strong> ${
    lowerCaseStr === [...lowerCaseStr].reverse().join("") ? "is" : "is not"
  } a palindrome`;

  const pTag = document.createElement("p");
  pTag.className = "user-input";
  pTag.innerHTML = resultMessage;
  result.appendChild(pTag);

  result.classList.remove("hidden");
};

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    checkPalindrome(input.value);
    input.value = "";
  }
});

button.addEventListener("click", () => {
  checkPalindrome(input.value);
  input.value = "";
});
