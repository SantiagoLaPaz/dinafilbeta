const track = document.querySelector('.carrusel-track');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let index = 0;

nextBtn.addEventListener('click', () => {
  const cards = document.querySelectorAll('.tarjeta');
  if (index < cards.length - 3) { // muestra de a 3
    index++;
    track.style.transform = `translateX(-${index * 220}px)`;
  }
});

prevBtn.addEventListener('click', () => {
  if (index > 0) {
    index--;
    track.style.transform = `translateX(-${index * 220}px)`;
  }
});
