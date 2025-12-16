const puzzle = [
  [5,3,"", "",7,"", "", "", ""],
  [6,"","", 1,9,5, "", "", ""],
  ["",9,8, "", "", "", "",6,""],
  [8,"","", "",6,"", "", "",3],
  [4,"","", 8,"",3, "", "",1],
  [7,"","", "",2,"", "", "",6],
  ["",6,"", "", "", "", 2,8,""],
  ["","", "", 4,1,9, "", "",5],
  ["","", "", "",8,"", "",7,9]
];

const solution = [
  [5,3,4,6,7,8,9,1,2],
  [6,7,2,1,9,5,3,4,8],
  [1,9,8,3,4,2,5,6,7],
  [8,5,9,7,6,1,4,2,3],
  [4,2,6,8,5,3,7,9,1],
  [7,1,3,9,2,4,8,5,6],
  [9,6,1,5,3,7,2,8,4],
  [2,8,7,4,1,9,6,3,5],
  [3,4,5,2,8,6,1,7,9]
];

const board = document.getElementById("board");

puzzle.forEach((row, r) => {
  row.forEach((cell, c) => {
    const input = document.createElement("input");
    if (cell !== "") {
      input.value = cell;
      input.disabled = true;
    }
    input.dataset.row = r;
    input.dataset.col = c;
    board.appendChild(input);
  });
});

function checkSudoku() {
  const inputs = document.querySelectorAll("input");
  for (let input of inputs) {
    const r = input.dataset.row;
    const c = input.dataset.col;
    if (input.value != solution[r][c]) {
      document.getElementById("message").innerText = "❌ Incorrect Solution";
      return;
    }
  }
  document.getElementById("message").innerText = "🎉 Correct! Well Done";
}
