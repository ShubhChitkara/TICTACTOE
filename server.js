const buttons = document.querySelectorAll(".button");
const resetbtn = document.querySelector(".reset");
const container = document.querySelector(".container");
const result = document.createElement("div");
result.classList.add("winnerDeclaration");
const winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 4, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
];
let turn = true;
//true for O false for X
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    if (turn) {
      turn = false;
      console.log("Button is pressed");
      button.innerHTML = "O";
    } else {
      turn = true;
      console.log("Button is pressed");
      button.innerHTML = "X";
    }
    button.disabled = true;
    winnerLogic();
    drawLogic();
  });
});

resetbtn.addEventListener("click", () => {
  buttons.forEach((button) => {
    button.innerHTML = "";
    button.disabled = false;
    result.innerHTML = "";
  });
});

const winnerLogic = () => {
  for (let pattern of winningPattern) {
    let pos1Val = buttons[pattern[0]].innerText;
    let pos2Val = buttons[pattern[1]].innerText;
    let pos3Val = buttons[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        if (turn) {
          result.innerHTML = "Winner is X";
        } else {
          result.innerHTML = "Previous winner was O";
        }
        container.appendChild(result);
        buttons.forEach((button) => {
          button.innerHTML = "";
          button.disabled = false;
        });
        return true;
      }
    }
  }
};

const drawLogic = () => {
  if (
    buttons[0].innerText != "" &&
    buttons[1].innerText != "" &&
    buttons[2].innerText != "" &&
    buttons[3].innerText != "" &&
    buttons[4].innerText != "" &&
    buttons[5].innerText != "" &&
    buttons[6].innerText != "" &&
    buttons[7].innerText != "" &&
    buttons[8].innerText != ""
  ) {
    result.innerHTML="Game Tied";
    buttons.forEach((button) => {
      button.innerHTML = "";
      button.disabled = false;
      container.appendChild(result);
    });
  }
};
