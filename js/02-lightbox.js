import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const refs = {
  gallery: document.querySelector("ul.gallery"),
};

function createPaletteItems() {
  const items = galleryItems
    .map(
      ({
        preview,
        original,
        description,
      }) => `  <li>  <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`
    )
    .join("");
  refs.gallery.insertAdjacentHTML("beforeend", items);
}
createPaletteItems();

var lightbox = new SimpleLightbox(".gallery a", {
  /* options */
  //   captions: true,
  //   captionSelector: "img",
  captionsData: "alt",
  captionDelay:250,
});

