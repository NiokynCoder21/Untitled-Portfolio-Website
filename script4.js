  function openFullscreen(img) 
  {
    if (img.requestFullscreen) {
      img.requestFullscreen();
    } else if (img.webkitRequestFullscreen) { /* Safari */
      img.webkitRequestFullscreen();
    } else if (img.msRequestFullscreen) { /* IE11 */
      img.msRequestFullscreen();
    }
  }

  function openFullscreen(img) {
  const overlay = document.getElementById('fullscreen-overlay');
  const overlayImg = overlay.querySelector('img');
  overlayImg.src = img.src;
  overlay.classList.add('active');
}

function closeFullscreen() {
  const overlay = document.getElementById('fullscreen-overlay');
  overlay.classList.remove('active');
}

