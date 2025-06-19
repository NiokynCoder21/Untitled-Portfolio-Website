  function openFullscreen(img) //starts the full screen effect
  {
  const overlay = document.getElementById('fullscreen-overlay');
  const overlayImg = overlay.querySelector('img');
  overlayImg.src = img.src;
  overlay.classList.add('active');
}

function closeFullscreen() //ends the full screen effect
{
  const overlay = document.getElementById('fullscreen-overlay');
  overlay.classList.remove('active');
}

  const links = document.querySelectorAll("a");
  const fade = document.querySelector(".fade-out");

  links.forEach(link => //makes my links use the fade out animation
    {
    if (link.hostname === window.location.hostname) {
      link.addEventListener("click", e => {
        e.preventDefault();
        fade.classList.add("active");
        setTimeout(() => {
          window.location = link.href;
        }, 500);
      });
    }
  });