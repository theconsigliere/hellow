// array of text to fade in an move up

function scrollAppear() {
  var introTexts = document.querySelectorAll(".intro-text");

  introTexts.forEach(text => {
    var introPosition = text.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.5;
    // console.log(introPosition);

    if (introPosition < screenPosition) {
      text.classList.add("intro-appear");
    }
  });
}

window.addEventListener("scroll", scrollAppear);

// smooth scroll

function smoothScroll(target, duration) {
  var target = document.querySelector(target);
  var targetPosition = target.getBoundingClientRect().top;
  var startPosition = window.pageYOffset;
  var distance = targetPosition - startPosition;
  var startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;

    var timeElapsed = currentTime - startTime;
    var run = ease(timeElapsed, startPosition, distance, duration);

    window.scrollTo(0, run);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

  function ease(t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  }

  requestAnimationFrame(animation);
}

//pass in values to the function

var hero = document.querySelector(".hero");

hero.addEventListener("click", function() {
  console.log("hero clicked");
  smoothScroll("footer", 2000);
});
