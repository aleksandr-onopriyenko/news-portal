$(document).ready(function () {
  let subscribe = document.querySelector('#subscribe')

  let scrolling = () => subscribe.scrollIntoView({ block: "center", behavior: "smooth" })
  document.querySelector('.subscribe-btn').addEventListener('click', scrolling)

  $('.slider-container').slick({
    arrows: false,
    dots: true,
    dotsClass: 'slider-pagination',
    fade: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 5000
  });


});