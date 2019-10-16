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
