const carousel = document.getElementById("carousel");
const slides = carousel.getElementsByClassName("slide");
let currentSlide = 0;

// Fonction pour afficher les images.
    function showSlide(x) {
        currentSlide = (x + slides.length) % slides.length;

        for ( let i = 0 ; i < slides.length ; i++) {
            slides[i].style.display = "none";
            slides[currentSlide].style.display = "block";
        }
    }

const prevBtn = document.getElementById("prevBtn");
    prevBtn.addEventListener("click", () => showSlide(currentSlide -1));

const nextBtn = document.getElementById("nextBtn");
    nextBtn.addEventListener("click", () => showSlide(currentSlide +1));

    showSlide(currentSlide); // Permet d'afficher l'image de départ.