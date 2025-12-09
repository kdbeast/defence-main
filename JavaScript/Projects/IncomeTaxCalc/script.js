const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const income = document.getElementById("income").value;

  const amount = parseInt(income);
  const result = document.getElementById("income-tax");

  let incomeTax = 0;
  if (amount <= 1200000) {
    incomeTax = 0;
  } else if (amount <= 1600000) {
    incomeTax = (amount - 1200000) * 0.15;
  } else if (amount <= 2000000) {
    incomeTax = (amount - 1600000) * 0.20 + 60000;
  } else if (amount <= 2400000) {
    incomeTax = (amount - 2000000) * 0.25 + 140000;
  } else {
    incomeTax = (amount - 2400000) * 0.30 + 240000;
  }

  result.textContent = incomeTax;
  form.reset();
});
