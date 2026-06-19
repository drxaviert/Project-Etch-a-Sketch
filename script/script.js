const gridContainer = document.querySelector("#grid-container");

let num = 4;
let blockSize = `${100 / num}%`;

for (let i = 0; i < num ** 2; i++) {
  const block = document.createElement("div");
  block.classList.add("block");

  block.style.blockSize = blockSize;
  block.style.inlineSize = blockSize;

  gridContainer.appendChild(block);
}
