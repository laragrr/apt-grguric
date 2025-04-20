// js/modal.js
const imageGroups = {
   'A': ['images/apt-A.jpg', 'images/apt-A-2.jpg', 'images/apt-A-3.jpg'],
   'B': ['images/apt-B.jpg', 'images/apt-B-2.jpg'],
   'C': ['images/studio.jpg', 'images/studio-2.jpg']
};

let currentSlide = 0;
let currentImages = [];

function openGallery(unit) {
   currentImages = imageGroups[unit];
   const container = document.getElementById("modalImagesContainer");
   container.innerHTML = currentImages.map((src, i) =>
     `<img src="${src}" class="${i === 0 ? 'active' : ''}">`
   ).join('');
   currentSlide = 0;
   const modal = document.getElementById("galleryModal");
   modal.classList.add("show");
}

function closeModal() {
   const modal = document.getElementById("galleryModal");
   modal.classList.remove("show");
}

function changeSlide(n) {
   const images = document.querySelectorAll("#modalImagesContainer img");
   images[currentSlide].classList.remove("active");
   currentSlide = (currentSlide + n + images.length) % images.length;
   images[currentSlide].classList.add("active");
}

document.getElementById("galleryModal").addEventListener("click", function (event) {
   const content = document.querySelector(".gallery-content");
   if (!content.contains(event.target)) {
       closeModal();
   }
});
