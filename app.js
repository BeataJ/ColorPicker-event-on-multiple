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

const changeColor = function(e) {
  console.log(e);
  const h1 = document.querySelector("h1");
  h1.style.color = this.style.backgroundColor;
};
const container = document.querySelector("#boxes");

for (let color of colors) {
  const box = document.createElement("div");
  box.style.backgroundColor = color;
  box.classList.add("box");
  container.append(box);
  box.addEventListener("click", changeColor);
}

document.body.addEventListener("keypress", function(e) {
  console.log(e);
});
