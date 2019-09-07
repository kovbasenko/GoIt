import images from "./gallery-items.js";

const refs = {
  gallery: document.querySelector(".gallery"),
  modal: document.querySelector(".lightbox"),
  modalContent: document.querySelector(".lightbox__content"),
  modalImage: document.querySelector(".lightbox__image"),
  closeButton: document.querySelector('button[data-action="close-lightbox"]'),
};

let galleryItem = "";

images.forEach((img, index) => {
  galleryItem += `<li class="gallery__item">
  <a class="gallery__link">
  <img class="gallery__image" src="${img.preview}" alt="${
    img.description
  }" data-src="${img.original}" data-id="${index + 1}">
  </a>
  </li>`;
});

refs.gallery.insertAdjacentHTML("afterbegin", galleryItem);

const galleryImages = document.querySelectorAll(".gallery__image");

function openModal(event) {
  if (event.target !== event.currentTarget) {
    refs.modal.classList.toggle("is-open");

    refs.modalImage.setAttribute("src", event.target.dataset.src);
    refs.modalImage.setAttribute("data-id", event.target.dataset.id);
    refs.modalImage.setAttribute("alt", event.target.getAttribute("alt"));

    refs.modal.addEventListener("click", closeModal);
    document.addEventListener("keydown", closeModal);
    document.addEventListener("keydown", nextPrev);
  }
}

function closeModal(event) {
  if (
    event.target === refs.modalContent ||
    event.target === refs.closeButton ||
    event.code === "Escape"
  ) {
    refs.modal.classList.toggle("is-open");
    refs.modalImage.setAttribute("src", "");
    refs.modalImage.setAttribute("alt", "");

    refs.modal.removeEventListener("click", closeModal);
    document.removeEventListener("keydown", closeModal);
    document.removeEventListener("keydown", nextPrev);
  }
}

function nextPrev(event) {
  if (event.code === "ArrowRight") {
    if (parseInt(refs.modalImage.dataset.id) < parseInt(galleryImages.length)) {
      refs.modalImage.setAttribute(
        "alt",
        galleryImages[parseInt(refs.modalImage.dataset.id)].getAttribute("alt")
      );
      refs.modalImage.setAttribute(
        "src",
        galleryImages[parseInt(refs.modalImage.dataset.id)].dataset.src
      );
      refs.modalImage.setAttribute(
        "data-id",
        // galleryImages[parseInt(refs.modalImage.dataset.id) + 1].dataset.id
        parseInt(refs.modalImage.dataset.id) + 1
      );
    } else if (
      parseInt(refs.modalImage.dataset.id) === parseInt(galleryImages.length)
    ) {
      refs.modalImage.setAttribute("alt", galleryImages[0].getAttribute("alt"));
      refs.modalImage.setAttribute("src", galleryImages[0].dataset.src);
      refs.modalImage.setAttribute("data-id", galleryImages[0].dataset.id);
    }
  } else if (event.code === "ArrowLeft") {
    if (parseInt(refs.modalImage.dataset.id) > 1) {
      refs.modalImage.setAttribute(
        "alt",
        galleryImages[parseInt(refs.modalImage.dataset.id) - 2].getAttribute(
          "alt"
        )
      );
      refs.modalImage.setAttribute(
        "src",
        galleryImages[parseInt(refs.modalImage.dataset.id) - 2].dataset.src
      );
      refs.modalImage.setAttribute(
        "data-id",
        parseInt(refs.modalImage.dataset.id) - 1
      );
    } else if (parseInt(refs.modalImage.dataset.id) === 1) {
      refs.modalImage.setAttribute(
        "alt",
        galleryImages[parseInt(galleryImages.length) - 1].getAttribute("alt")
      );
      refs.modalImage.setAttribute(
        "src",
        galleryImages[parseInt(galleryImages.length) - 1].dataset.src
      );
      refs.modalImage.setAttribute(
        "data-id",
        galleryImages[parseInt(galleryImages.length) - 1].dataset.id
      );
    }
  }
}

refs.gallery.addEventListener("click", openModal);
