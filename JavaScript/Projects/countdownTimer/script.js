setInterval(() => {
  let result = document.getElementById("result");
  let currentTime = Date.now();
  let olympicsDate = new Date(2028, 6, 14).getTime();
  let timer = olympicsDate - currentTime;

  let days = Math.floor(timer / (1000 * 60 * 60 * 24));
  timer %= 1000 * 60 * 60 * 24;

  let hours = Math.floor(timer / (1000 * 60 * 60));
  timer %= 1000 * 60 * 60;

  let minutes = Math.floor(timer / (1000 * 60));
  timer %= 1000 * 60;

  let seconds = Math.floor(timer / 1000);
  timer %= 1000;

  result.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}, 1000);
