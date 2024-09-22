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
    "image/profilepic3.png"
  ];

  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImage = images[randomIndex];

  const imgElement = document.getElementById("random-image");
  imgElement.src = randomImage;
});