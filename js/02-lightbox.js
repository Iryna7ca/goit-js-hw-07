import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryMarkup = createGalleryItemsMarkup(galleryItems);

gallery.insertAdjacentHTML("afterbegin", galleryMarkup);

 gallery.addEventListener('click', onGalleryItemClick);

function createGalleryItemsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `
      <li class="gallery__item">
      <a class="gallery__link" 
        href="${original}">
      <img class="gallery__image" 
        src="${preview}" 
        alt="${description}" />
      </a>
      </li>
     `;
    })
        .join("");
}
 
function onGalleryItemClick(event) {
    event.preventDefault();
    if (!event.target.classList.contains("gallery__image")) {
        return;
    }
     var lightbox = new SimpleLightbox('.gallery a', { /* options */ });
 
}