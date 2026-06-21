let numBlock = 2;

const gridContainer = document.querySelector("#grid-container");

const buttonSize = document.querySelector("#button-size");

function resetGrid() {
  const blocks = document.querySelectorAll(".block-static");
  blocks.forEach((block) => block.remove());
}

function interaction() {
  const blocks = document.querySelectorAll(".block-static");
  blocks.forEach((block) => {
    let opacity = 1;

    block.addEventListener("mouseenter", () => {
      let r = Math.random() * 255;
      let g = Math.random() * 255;
      let b = Math.random() * 255;
      let randColor = `rgb(${r},${g},${b}`;

      opacity -= 0.1;

      block.style.backgroundColor = randColor;
      block.style.opacity = opacity;
    });
  });
}

function createGrid() {
  resetGrid();

  let blockSize = `${100 / numBlock}%`;

  for (let i = 0; i < numBlock ** 2; i++) {
    const block = document.createElement("div");

    block.classList.toggle("block-static");
    block.style.blockSize = blockSize;
    block.style.inlineSize = blockSize;

    gridContainer.appendChild(block);
  }

  interaction();
}

createGrid();

buttonSize.addEventListener("click", () => {
  numBlock = prompt("How big do you want your grid to be?", 4);
  numBlock = Math.min(numBlock, 5);

  createGrid();
});
