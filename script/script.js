let numBlock = 4;

const input = document.querySelector("#input");
const gridContainer = document.querySelector("#grid-container");

function createGrid() {
  let blockSize = `${100 / numBlock}%`;

  for (let i = 0; i < numBlock ** 2; i++) {
    const block = document.createElement("div");
    block.classList.add("block");

    block.style.blockSize = blockSize;
    block.style.inlineSize = blockSize;

    gridContainer.appendChild(block);
  }
}

function askNumBlock() {
  return (numBlock = Math.min(
    +prompt("How big do you want your grid to be?", 4),
    100,
  ));
}

createGrid();

input.addEventListener("click", (e) => {
  askNumBlock();
  createGrid();
});
