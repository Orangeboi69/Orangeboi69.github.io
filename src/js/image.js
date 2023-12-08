const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const images = document.querySelectorAll('.images img');

let index = 0;

function showImage(idx) {
  images.forEach((img, i) => {
    if (i === idx) {
      img.style.display = 'block';
    } else {
      img.style.display = 'none';
    }
  });
}

prevBtn.addEventListener('click', () => {
  index = (index - 1 + images.length) % images.length;
  showImage(index);
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % images.length;
  showImage(index);
});