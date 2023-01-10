"use strict";

$(function () {
    const headerSearchBtn = $('.header__search');
    const searchForm = $('.header__search-form');
    //Показываем/скрываем поле ввода поиска
    headerSearchBtn.click(function () {
        searchForm.toggle(function () {
            searchForm.animate();
        });
    });

    //Переключем страницы по навтгации проектов
    $('.product-cards__nav-item').click(function () {
        let href = $(this).attr('href');
        $('.product-cards__nav-item, .product-cards__inner').removeClass('active');
        $(href).addClass('active');
        $(this).addClass('active');
        $('html, body').animate({scrollTop:645},1000);
        $('.product-cards__list--hide').hide();
    });

    $('.btn--more').click(function (){
        $('.list--hide').slideToggle();
    });
});
