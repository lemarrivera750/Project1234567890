function getRandomNumber(max) {
  return Math.floor(Math.random() * max);
}

function getRandomColor() {
  var colors = ["red", "green", "blue"];
  var colorIndex = getRandomNumber(colors.length);
  return colors[colorIndex];
}

console.log(getRandomColor());
