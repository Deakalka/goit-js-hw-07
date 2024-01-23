function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
function createBoxes(amount){
  const container = document.getElementById('boxes');
  container.innerHTML = "";

  let size = 30; 
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.backgroundColor = getRandomHexColor();
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    container.appendChild(box);
    size += 10; 
  }
};

function destroyBoxes() {
  const container = document.getElementById('boxes');
  container.innerHTML = ''; 
};

const buttonCreate = document.querySelector("[data-create]");
const buttonDestroy = document.querySelector("[data-destroy]");

buttonCreate.addEventListener('click', function() {
  const input = document.querySelector('input');
  const amount = input.value;

  if (amount < 1 || amount > 100) {
    alert('Введіть числов від 1 до 100')
    return;
  }

  createBoxes(amount);
  input.value = '';
});

buttonDestroy .addEventListener('click', destroyBoxes);
