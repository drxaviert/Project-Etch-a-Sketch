let numBlock = 4;
let blockSize = `${100 / numBlock}%`;

const gridContainer = document.querySelector("#grid-container");

for (let i = 0; i < numBlock ** 2; i++) {
  const block = document.createElement("div");

  block.classList.toggle("block-static");
  block.style.blockSize = blockSize;
  block.style.inlineSize = blockSize;

  gridContainer.appendChild(block);
}
