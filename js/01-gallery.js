import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
  gallery: document.querySelector("div.gallery"),
  
//   btnCreateBoxes: document.querySelector("button[data-create]"),
//   btnDestroyBoxes: document.querySelector("button[data-destroy]"),
};


createPaletteItems();
function createPaletteItems() {
    const items = galleryItems.map(
      (item) => `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${item.original}"
      data-source="${item.preview}"
      alt="${item.description}"
    />
  </a>
</div>`).join('');
    refs.gallery.insertAdjacentHTML("beforeend",  items);
}


console.log(galleryItems);



