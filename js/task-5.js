function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonChange = document.querySelector('.change-color');
const span = document.querySelector(".color");
const body = document.body;

buttonChange.addEventListener('click', function() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  span.style.color = newColor;
});
