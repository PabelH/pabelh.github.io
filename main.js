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
let isHidden = true;

showMoreButton.addEventListener('click', () => {
  if (isHidden) {
    hiddenItems.style.display = 'block';
    showMoreButton.textContent = 'Show -';
  } else {
    hiddenItems.style.display = 'none';
    showMoreButton.textContent = 'Show +';
  }
  isHidden = !isHidden;
});
