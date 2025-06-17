  const links = document.querySelectorAll("a");
  const fade = document.querySelector(".fade-out");

  links.forEach(link => {
    // Make sure it's an internal link:
    if (link.hostname === window.location.hostname) {
      link.addEventListener("click", e => {
        e.preventDefault();
        fade.classList.add("active");
        setTimeout(() => {
          window.location = link.href;
        }, 500); // must match CSS transition time
      });
    }
  });

  