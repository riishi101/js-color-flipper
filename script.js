document.getElementById("green").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "Green";
});

document.getElementById("red").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "Red";
});

document.getElementById("blue").addEventListener("click", function () {
  document.querySelector("body").style.backgroundColor = "Blue";
});

const body = document.getElementsByTagName("body")[0];

function randomColor() {
  const red = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);

  const color = `rgba(${red}, ${green}, ${blue})`;
  body.style.backgroundColor = color;
}
randomColor();
