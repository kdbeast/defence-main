document.getElementById("grandparent").addEventListener("click", () => {
  console.log("Grandparent clicked");
}); // true for capture false for bubble
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
}); // true for capture false for bubble
document.getElementById("child").addEventListener("click", (event) => {
  console.log("Child clicked");
  event.stopPropagation(); // stops the event from bubbling up
}); // true for capture false for bubble

// capture phase
// event goes from parent to child
// target phase
// event reaches the target element
// bubble phase
// event goes from child to parent
