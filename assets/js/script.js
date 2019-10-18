ymaps.ready(init);
function init() {
  var myMap = new ymaps.Map('map', {
    center: [47.24471976300841, 39.72322170928197],
    zoom: 16,
    controls: ['zoomControl']
  });

  myPlacemark = new ymaps.Placemark(
    [47.24471976300841, 39.72322170928197],
    {
      hintContent: 'Shopping Center Decorum',
      balloonContent: 'Rostov-on-Don, Nansen St., 239'
    },
    {
      iconLayout: 'default#image',
      iconImageHref: 'assets/img/pin.svg',
      iconImageSize: [30, 45],
      iconImageOffset: [-18, -50]
    }
  );

  myMap.behaviors.disable(['scrollZoom', 'drag']);
  myMap.geoObjects.add(myPlacemark);
}

const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1200,
  speedAsDuration: true
});

const players = document.querySelectorAll('.video');

const loadPlayer = function(event) {
  let target = event.currentTarget;
  let iframe = document.createElement('iframe');

  iframe.height = target.clientHeight;
  iframe.width = target.clientWidth;
  iframe.src =
    'https://www.youtube.com/embed/' + target.dataset.videoId + '?autoplay=1';
  iframe.setAttribute('frameborder', 0);

  target.classList.remove('overlay');
  if (target.children.length) {
    target.innerHTML = '';
    target.appendChild(iframe);
  } else {
    target.appendChild(iframe);
  }
};

const config = { once: true };

Array.from(players).forEach(function(player) {
  player.addEventListener('click', loadPlayer, config);
});

$(document).ready(function() {
  $('.slider__gallery').slick({
    slidesToShow: 2,
    arrows: false,
    dots: true,
    dotsClass: 'projectList',
    appendDots: '.projects__list',
    infinite: true,
    speed: 300,
    adaptiveHeight: true,
    swipe: true,
    initialSlide: 0,
    variableWidth: true,
    asNavFor: '.slider__info'
  });
});

$(document).ready(function() {
  $('.slider__info').slick({
    slidesToShow: 1,
    centerMode: false,
    arrows: false,
    dots: true,
    appendDots: '.controls__dots',
    dotsClass: 'controls__dots',
    variableWidth: false,
    asNavFor: '.slider__gallery',
    infinite: true,
    speed: 300,
    fade: true,
    cssEase: 'linear'
  });
});

$('.controls__right').click(function() {
  $('.slider__info').slick('slickNext');
});

$('.controls__left').click(function() {
  $('.slider__info').slick('slickPrev');
});
