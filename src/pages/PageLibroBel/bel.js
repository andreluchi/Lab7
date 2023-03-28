const bookCover = document.querySelector('.book-info img');

bookCover.addEventListener('mouseover', () => {
  bookCover.style.animation = 'spin 1s forwards';
});

bookCover.addEventListener('animationend', () => {
  bookCover.style.animation = 'none';
});
