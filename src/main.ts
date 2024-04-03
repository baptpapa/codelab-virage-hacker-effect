import "./style.scss";

document.querySelector<HTMLDivElement>("#app").onmouseover = (
  event: MouseEvent
) => {
  const letters = event?.target?.innerText?.split("");
  let iteration = 0;
  const fun = 0;
  // event.target.innerText = Math.random();
  const interval = setInterval(() => {
    if (fun + letters.length < iteration) {
      clearInterval(interval);
    }
    event.target.innerText = letters
      .map((letter, index) => {
        if (letter === " " || index < iteration) {
          return letter;
        } else {
          return randomLetter();
        }
      })
      .join("");
    iteration++;
  }, 100);
};

function randomLetter() {
  const n = Math.floor(Math.random() * 26);
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
  return alphabet[n];
}
