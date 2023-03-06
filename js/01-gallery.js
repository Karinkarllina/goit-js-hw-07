import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');


function createGalleryMarkup(item) {

    return item.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
}).join('')
};

const galleryMarkup = createGalleryMarkup(galleryItems);

galleryEl.insertAdjacentHTML('beforeend', galleryMarkup);

galleryEl.addEventListener('click', galleryImgClik);

function galleryImgClik(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG") {
        return
    }
    const currentImg = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${currentImg}" width = "800"; height = "600">`)
    instance.show();


galleryEl.addEventListener('keydown', galleryClose);

function galleryClose(event) {
    if (event.code === "Escape") {
      instance.close();
      galleryEl.removeEventListener('keydown', galleryClose);
    }
} 
}



