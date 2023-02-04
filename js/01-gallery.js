import { galleryItems } from "./gallery-items.js";
// Change code below this line
console.log(galleryItems);


const refs = {
  gallery: document.querySelector("div.gallery"),
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
  refs.gallery.insertAdjacentHTML("beforeend", items);
}


refs.gallery.addEventListener("click", selectColorItem);
OnShow(instance);
// onclose()
function selectColorItem(event) {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }
  onOpenModal(event);
  onCloseKey(event);
  

  document.addEventListener("keydown", ({code}) => {
    if (code === "Escape") {
      instance.close();
    }
  });
}

function onOpenModal(event) {
const imgBig = event.target.dataset.source;
const instance = basicLightbox.create(
  `<img src="${imgBig}" width="800" height="600">`
);
instance.show();
}

