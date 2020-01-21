const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "indigo",
  "violet"
];

const printColor = function() {
  console.log(this.style.backgroundColor);
};
const container = document.querySelector("#boxes");

for (let color of colors) {
  const box = document.createElement("div");
  box.style.backgroundColor = color;
  box.classList.add("box");
  container.append(box);
  box.addEventListener("click", printColor);
}
