const human = document.querySelector(".human");
const hole = document.querySelector(".hole");
const score = document.querySelector(".score");
const myrecord = document.querySelector(".record");
const result = document.querySelector(".result");
const options = document.querySelector(".game-options");
const restart = document.querySelector(".restart");
const exit = document.querySelector(".exit");
let points = 0;
const jump = () => {
  human.classList.add("jump");

  setTimeout(() => {
    human.classList.remove("jump");
  }, 500);
};

const loop = setInterval(() => {
  const holePosition = hole.offsetLeft;
  const humanPosition = +window
    .getComputedStyle(human)
    .bottom.replace("px", "");

  if (holePosition >= -10 && holePosition < 100 && humanPosition < 25) {
    hole.style.animation = "none";
    hole.style.left = `${holePosition}px`;

    human.style.animation = "none";
    human.style.bottom = `${humanPosition}px`;

    human.src = "./assets/images/coffin.gif";
    human.style.width = "75px";
    human.style.marginLeft = "50px";

    clearInterval(loop);

    if (points > localStorage.getItem("record")) {
      localStorage.setItem("record", points);
    }

    options.style.display = "flex";
    result.textContent = `Your Score: ${points} pts`;
  } else {
    options.style.display = "none";
    points++;
    score.textContent = `Score: ${points}`;
    myrecord.textContent =
      localStorage.getItem("record") > 0
        ? `High Score: ${localStorage.getItem("record")}`
        : `High Score: 0`;
  }
}, 10);

document.addEventListener("keydown", jump);
document.addEventListener("click", jump);

restart.addEventListener("click", () => {
  location.reload();
});

exit.addEventListener("click", () => {
  localStorage.clear();
  options.style.display = "none";
});
