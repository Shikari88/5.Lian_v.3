// $(function(){
//
//     $('.menuBurger').on('click', function(){
//
//         $('.nav__list').slideToggle(300, function(){
//
//             if($(this).css('display') === 'none'){
//                 $(this).removeAttr('style');
//             }
//
//         });
//
//     });
//
// });

"use strict";

/* Проверяем на каком устройстве открыта страница. С touch screen или пк с мышью. Код из видео  */


/*проверка мобильное ли устройство*/
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/isMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.BlackBerry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};
if(isMobile.any()){
    document.body.classList.add('_touch');
} else {
    document.body.classList.add("_pc");
}