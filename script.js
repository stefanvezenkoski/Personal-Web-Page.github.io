document.addEventListener("DOMContentLoaded", function() {
  const aboutMeElement = document.querySelector('.aboutme');
  const contentTextElement = document.querySelector('.content-text');
  const typewriterTextElement = document.getElementById("typewriter-text");

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  };

  const observer = new IntersectionObserver(observerCallback, observerOptions);
  observer.observe(aboutMeElement);
  observer.observe(contentTextElement);

  text = "<code> We Live in a Technology Renaissance: Ignite Your Passion for Innovation \n</code>";



  let index = 0;

  function typeWriter() {
    if (index < text.length) {
      typewriterTextElement.innerHTML += text.charAt(index);
      index++;
      setTimeout(typeWriter, 60);
    }
  }

  setTimeout(() => {
    typeWriter();
  }, 500);

  setTimeout(() => {
    document.querySelector(".content-text").classList.add("show");
  }, 500);
});


document.getElementById('about-link').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent the default link behavior
  document.querySelector('#about-me').scrollIntoView({ behavior: 'smooth' });
});
