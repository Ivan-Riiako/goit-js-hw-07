import { galleryItems } from './gallery-items.js';
// Change code below this line
const refs = {
  gallery: document.querySelector("div.gallery"),
  
//   btnCreateBoxes: document.querySelector("button[data-create]"),
//   btnDestroyBoxes: document.querySelector("button[data-destroy]"),
};


createPaletteItems();
function createPaletteItems() {
    const items = galleryItems
      .map(
        ({ original, preview, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="#">
    <img
      class="gallery__image"
      src="${original}"
      data-source="${preview}"
      alt="${description}"
    />
  </a>
</div>`
      )
      .join("");
    refs.gallery.insertAdjacentHTML("beforeend",  items);
}



refs.gallery.addEventListener("click", selectColorItem);
function selectColorItem(event) {
   console.log(event.target.nodeName);
    
    if (event.target.nodeName !== "IMG") {
      return;
    } 



}

console.log(galleryItems);



