import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);


{/* <a class="gallery__item" href="large-image.jpg">
  <img class="gallery__image" src="small-image.jpg" alt="Image description" />
</a>;
 */}


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
      }) => `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`
    )
    .join("");
  refs.gallery.insertAdjacentHTML("beforeend", items);
}
createPaletteItems();
var lightbox = new SimpleLightbox(".gallery a", {
  /* options */
});
