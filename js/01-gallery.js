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
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const link = event.target.closest(".gallery__link");
  console.log(link.href);
  const queryLink = document.querySelector(`a[href="${link.href}"]`);

  queryLink.addEventListener("click", onDefault);
  function onDefault(e) {
    console.log(e);
     e.target.stopPropagation();
     e.currentTarget.stopImmediatePropagation();
    e.stopPropagation();
    e.stopImmediatePropagation();
  }
  if (event.target.nodeName !== "IMG") {
    return;
  }
  // event.stopPropagation();

  event.stopImmediatePropagation();
}

console.log(galleryItems);



