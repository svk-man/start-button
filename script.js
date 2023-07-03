const button = document.querySelector('.button');
const text = document.querySelector('.text');

button.addEventListener('click', () => {
  button.style.display = 'none';
  text.style.display = 'block';

  const timerId = setInterval(drawTime, 1000);
  let seconds = 3;

  function drawTime() {
    text.textContent = seconds;

    seconds -= 1;
    console.log(text.textContent);
    if (seconds === -1) {
      clearTimeout(timerId);
      text.textContent = 'НАЧИНАЕМ ВЫПОЛНЯТЬ ЗАДАЧУ!';
    }
  }
});
