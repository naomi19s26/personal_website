document.getElementById('year').textContent = new Date().getFullYear();

const profilePhoto = document.querySelector('.photo-slot img');
const photoFallback = document.querySelector('.photo-fallback');

if (profilePhoto && photoFallback) {
  profilePhoto.addEventListener('load', () => {
    photoFallback.classList.add('is-hidden');
  });

  profilePhoto.addEventListener('error', () => {
    photoFallback.classList.remove('is-hidden');
  });
}
