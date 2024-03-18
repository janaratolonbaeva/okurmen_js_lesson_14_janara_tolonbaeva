document.addEventListener('DOMContentLoaded', () => {
  // const timeout = setInterval(() => {
  //   alert('Hello world!');
  // }, 3000); // 1000 ms = 1 s

  // let counter = 0;

  // const interval = setInterval(function () {
  //   counter++;
  //   console.log(`Counter is now: ${counter}`);

  //   if (counter >= 5) {
  //     clearInterval(interval);
  //   }
  // }, 5000); // 5000ms = 5s

  // const timeout = setTimeout(function () {
  //   alert('I am timeout');
  // }, 3000);

  const btn = document.querySelector('.button');
  const item = document.querySelector('.item');
  const container = document.querySelector('.container');

  //event bubbling поднятие событий

  btn.addEventListener('click', (e) => {
    e.target.style.background = 'blue';
    alert('I am button');
    e.stopPropagation();
  });

  item.addEventListener('click', (e) => {
    item.style.background = 'yellow';
    alert('I am Item');
    e.stopPropagation();
  });

  container.addEventListener('click', (e) => {
    container.style.background = 'gray';
    alert('I am container');
  });
});
