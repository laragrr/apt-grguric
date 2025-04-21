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
   const oldSlide = currentSlide;
   currentSlide = (currentSlide + n + images.length) % images.length;

   if (oldSlide === currentSlide) return;

   const directionClass = n > 0 ? 'slide-left' : 'slide-right';

   // Current out
   images[oldSlide].classList.remove('active');
   images[oldSlide].classList.add(directionClass);

   // Prepare new image
   const newImage = images[currentSlide];
   newImage.classList.add('active');
   newImage.classList.remove('slide-left', 'slide-right');

   // Remove slide class from the old image after animation
   setTimeout(() => {
      images[oldSlide].classList.remove(directionClass);
   }, 500); // Match this duration with your CSS transition time
}

document.getElementById("galleryModal").addEventListener("click", function (event) {
   const content = document.querySelector(".gallery-content");
   if (!content.contains(event.target)) {
       closeModal();
   }
});
