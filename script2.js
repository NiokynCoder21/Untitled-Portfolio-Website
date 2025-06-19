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

  

  