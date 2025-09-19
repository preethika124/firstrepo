// Slowly rotate background gradient
let angle = 0;
setInterval(() => {
  angle += 1;
  document.body.style.background = `linear-gradient(${angle}deg, #6a11cb, #2575fc)`;
}, 100);
