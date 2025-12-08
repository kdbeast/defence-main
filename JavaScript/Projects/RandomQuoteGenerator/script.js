const quotes = [
  "Honesty is the best policy",
  "Time is the best medicine",
  "Knowledge is power",
  "Victory is sweetest when won by hard work",
  "Failure is the condition of success",
  "Success is not final, failure is not fatal: It is the courage to continue that counts",
  "The only limit to our realization of tomorrow is our doubts of today",
  "The best way to predict the future is to create it",
  "The only way to do great work is to love what you do",
  "Our greatest glory is not in never falling, but in rising every time we fall",
  "You are never too old to set another goal or to dream a new dream",
  "You are never too old to be what you might have been",
  "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart",
  "It does not matter how slowly you go as long as you do not stop",
];

const button = document.querySelector("button");
const quote = document.querySelector("h1");

button.addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quote.textContent = quotes[randomIndex];
});
