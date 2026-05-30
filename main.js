const themeSwitch = document.getElementById('theme-switch');

themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        document.documentElement.setAttribute('data-bs-theme', 'light');
    } else {
        document.documentElement.setAttribute('data-bs-theme', 'dark');
    }
});

const showMoreButton = document.getElementById('show-more-button');
const hiddenItems = document.getElementById('hidden-items');

showMoreButton.addEventListener('click', () => {
  if (showMoreButton.textContent === 'Ver +') {
    hiddenItems.style.display = 'block';
    showMoreButton.textContent = 'Ver -';
  } else if (showMoreButton.textContent === 'Ver -') {
    hiddenItems.style.display = 'none';
    showMoreButton.textContent = 'Ver +';
  } else if (showMoreButton.textContent === 'Show +') {
    hiddenItems.style.display = 'block';
    showMoreButton.textContent = 'Show -';
  } else if (showMoreButton.textContent === 'Show -') {
    hiddenItems.style.display = 'none';
    showMoreButton.textContent = 'Show +';
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const images = [
    //"image/profilepic.jpg",
    //"image/profilepic2.jpg",
    //"image/profilepic3.png"
    "image/profilepic0.png"
  ];

  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

  const imgElement = document.getElementById("random-image");
  imgElement.src = randomImage;
});

// === Quote Carousel (Vanilla JS) ===
const slides = document.querySelectorAll('.quote-slide');
const dotsContainer = document.getElementById('quote-dots');
let current = 0;
let autoplayTimer;

// Crear dots dinámicamente
slides.forEach((_, i) => {
  const dot = document.createElement('span');
  dot.classList.add('quote-dot');
  if (i === 0) dot.classList.add('active');
  dot.addEventListener('click', () => goTo(i));
  dotsContainer.appendChild(dot);
});

function goTo(index) {
  slides[current].classList.remove('active');
  dotsContainer.children[current].classList.remove('active');
  current = (index + slides.length) % slides.length;
  slides[current].classList.add('active');
  dotsContainer.children[current].classList.add('active');
  resetAutoplay();
}

function resetAutoplay() {
  clearInterval(autoplayTimer);
  autoplayTimer = setInterval(() => goTo(current + 1), 4000);
}

document.getElementById('quote-prev').addEventListener('click', () => goTo(current - 1));
document.getElementById('quote-next').addEventListener('click', () => goTo(current + 1));

resetAutoplay();