
const textInput = document.getElementById('name-input');
const outputSpan = document.getElementById('name-output');
textInput.addEventListener('input', function(event) {
  const inputValue = event.target.value.trim();
  outputSpan.textContent = inputValue || 'Anonymous';
});