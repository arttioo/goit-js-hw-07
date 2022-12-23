import { galleryItems } from "./gallery-items.js";
// Change code below this line
function createPicturesMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
</div>
`;
    })
    .join("");
}
const galleryContainer = document.querySelector(".gallery");
galleryContainer.insertAdjacentHTML(
  "beforeend",
  createPicturesMarkup(galleryItems)
);

galleryContainer.addEventListener("click", onGalleryClick);
function onGalleryClick(evt) {
  evt.preventDefault();
  const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="800" height="600">
`);

  instance.show();
}


