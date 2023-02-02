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
        ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
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
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const imgBig = event.target.dataset.source;
  const instance =
    basicLightbox.create(`<img src="${imgBig}" width="800" height="600">`);
  instance.show();

  document.addEventListener("keydown", clouse => {
    if (event.code === "Escape") {
      instance.clouse()
    }
  })

}

console.log(galleryItems);

