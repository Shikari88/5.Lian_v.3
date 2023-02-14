"use strict";
let yamap = null;
let address = {
    coords: [55.164130, 61.292842]
};

function showMap () {
    let mapElement = document.querySelector("#map");
    let mapOptions = {
        center: [55.164131, 61.292843],
        zoom: 15,
        controls: ["zoomControl"]
    };
    yamap = new ymaps.Map(mapElement, mapOptions);
    let marker = new ymaps.Placemark(address.coords);
    yamap.geoObjects.add(marker);
}
ymaps.ready(showMap);

