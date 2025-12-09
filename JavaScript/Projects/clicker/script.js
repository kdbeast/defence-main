const body = document.querySelector("body");

body.addEventListener("click", (e) => {
  const circle = document.createElement("div");
  circle.classList.add("circle");
  circle.textContent = "Hi";

  const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

  circle.style.top = `${e.clientY - 25}px`;
  circle.style.left = `${e.clientX - 25}px`;
  circle.style.backgroundColor = randomColor;
  body.appendChild(circle);

  setTimeout(() => {
    circle.remove();
  }, 5000);
});
