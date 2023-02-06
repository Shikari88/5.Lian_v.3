"use strict";

window.onload = function () {
    let bigPictures = document.querySelector(".gallery__item--lg");
    let smallPictures = document.querySelectorAll(".gallery__item");

    //смена большой картинки галереи при клике на маленькие

    for (let i = 0; i < smallPictures.length; i++) {
        smallPictures[i].addEventListener("click", function () {
            let src = this.getAttribute('data-src');
            bigPictures.style.background = 'url(' + src + ')';
        })
    }
};