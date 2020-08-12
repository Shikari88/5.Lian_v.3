"use strict";

$(function () {
    const headerSearchBtn = $('.header__search');
    const searchForm = $('.header__search-form');
    headerSearchBtn.click(function () {
        searchForm.show(function () {
            searchForm.animate();
        });
    });




    $('.product-cards__nav-item').click(function () {
        let href = $(this).attr('href');// сохраняем значение атрибута href, по которому был произведен клик

        $('.product-cards__nav-item, .product-cards__inner').removeClass('active');
        $(href).addClass('active');
        $(this).addClass('active');
        $('html, body').animate({scrollTop:645},1000);
    });



});
