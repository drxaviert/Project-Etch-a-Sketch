let numBlock = 4;

const input = document.querySelector("#input");
const gridContainer = document.querySelector("#grid-container");

input.addEventListener("click", (e) => {
  askNumBlock();
  createGrid();
});

function interaction() {
  const blocks = document.querySelectorAll(".block-base");
  blocks.forEach((block) => {
    let opacity = 1;
    block.addEventListener("mouseover", () => {
      let r, g, b;
      r = Math.random() * 255;
      g = Math.random() * 255;
      b = Math.random() * 255;

      opacity = opacity - 0.1;

      let randomColor = `rgb(${r}, ${g}, ${b})`;
      block.style.backgroundColor = randomColor;
      block.style.opacity = opacity;
    });
  });
}

function createGrid() {
  const blocks = document.querySelectorAll(".block-base");
  blocks.forEach((block) => block.remove());

  let blockSize = `${100 / numBlock}%`;

  for (let i = 0; i < numBlock ** 2; i++) {
    const block = document.createElement("div");
    block.classList.add("block-base");

    block.style.blockSize = blockSize;
    block.style.inlineSize = blockSize;

    gridContainer.appendChild(block);
  }

  interaction();
}

function askNumBlock() {
  return (numBlock = Math.min(
    +prompt("How big do you want your grid to be?", 4),
    10,
  ));
}

createGrid();
