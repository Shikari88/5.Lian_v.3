"use strict";
$(function(){
    let slider = $('#slider');
    let container = slider.find('ul'); //find - ищем все теги ul в слайдер и сохраняем в переменную container
    let slidesCount = container.find('li').length; // ищем все теги li в ul и считаем их колличество.
    let containerWidth = slidesCount * slider.width();
    let originWidth = slider.width();
    let next = $('.slider__next');
    let prev = $('.slider__prev');
    let n = 1;
    let changeSlide = function () {
        // меняем свойство left для ul c анимацией
        container.animate({left: -n * slider.width() + 'px'}, 800);
        // вызываем функцию, которая скрывает или показывает кнопки вперёд-назад
    };
    next.click(function () {
        if (n < slidesCount - 1) {
            // увеличиваем номер текущего слайда
            n++;
            changeSlide();
        }
    });

    prev.click(function () {
        if (n > 0) {
            // уменьшаем номер текущего слайда
            n--;
            changeSlide();
        }
    });
    //создаем код для нафигационных точек. Создаем разметку .slider__nav>span*2
    /*let navHtml = '<div class="slider__nav">';
    let i = 0;
    while (i < slidesCount) {
        navHtml += '<span data-n="'+ i+ '"></span>';
        i++;
    }
    navHtml += '</div>';
    slider.append(navHtml);//Вставляет содержимое, заданное параметром, в конец каждого элемента в наборе соответствующих элементов

    //номер текущего слайда




    //находим все кнопки навигации снизу слайда
    let dots = $('.slider__nav span');
    //пишем функцию для смены слайдов
    dots.click(function () {
        n = $(this).data('n');
        changeSlide();
    })*/
});