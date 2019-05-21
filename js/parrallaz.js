function parallaz(element, distance, speed) {
  const item = document.querySelector(element);
  item.style.transform = `translateY(${distance * speed}px)`;
}

window.addEventListener("scroll", function() {
  parallaz(".intro-content", window.scrollY, -0.13);
  parallaz(".js-intro-text-2", window.scrollY, -0.05);

  parallaz(".js-intro-content", window.scrollY, 0.005);
});
