const human = document.querySelector(".human");
const frame = document.querySelector(".frame");
const hole = document.querySelector(".hole");
const score = document.querySelector(".score");
const restart = document.querySelector(".button");

let points = 0;

const jump = () => {
  human.classList.add("jump");

  setTimeout(() => {
    human.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const holePosition = hole.offsetLeft;
  console.log(holePosition);
  const humanPosition = +window
    .getComputedStyle(human)
    .bottom.replace("px", "");

  if (holePosition >= -50 && holePosition < 80 && humanPosition < 40) {
    hole.style.animation = "none";
    hole.style.left = `${holePosition}px`;

    human.style.animation = "none";
    human.style.bottom = `${humanPosition}px`;

    human.src = "./assets/images/coffin.gif";
    human.style.width = "75px";
    human.style.marginLeft = "50px";
    restart.style.display = "flex";

    clearInterval(loop);
    lastRecord = points;
  } else {
    points++;
    score.textContent = `Score: ${points}`;
  }
}, 10);

document.addEventListener("keydown", jump);
frame.addEventListener("click", jump);

restart.addEventListener("click", () => {
  location.reload();
});
