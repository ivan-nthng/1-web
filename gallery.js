const gallery = document.querySelector('.gallery');
const galleryButtons = document.querySelectorAll('.gallery-button');

galleryButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const id = button.dataset.id;
    const galleryWidth = gallery.offsetWidth;
    const galleryItem = document.querySelector(`.gallery-item:nth-child(${id})`);
    const galleryItemOffsetLeft = galleryItem.offsetLeft;
    gallery.scroll({
      left: galleryItemOffsetLeft - galleryWidth / 2,
      behavior: 'smooth'
    });
    galleryButtons.forEach((button) => {
      button.classList.remove('active');
    });
    button.classList.add('active');
  });
});
