document.addEventListener('DOMContentLoaded', function () {
  // Your JavaScript code here
  const elements = document.querySelectorAll(".main_img");

  function handleHover(event) {
      // 'event.target' refers to the element being hovered
      event.target.classList.add("animation");
  }
  function animationend(event){
      event.target.classList.remove("animation");
  }
  // Assuming you want to add the hover effect to elements with class "main_img"

  // Add event listeners to each element
  elements.forEach(function(elements) {
      elements.addEventListener('mouseover', handleHover);
      elements.addEventListener('animationend', animationend);
  });
});