"use strict";
$(function(){
    let slider = $('#slider');
    let container = slider.find('ul'); //find - ищем все теги ul в слайдер и сохраняем в переменную container
    let slidesCount = container.find('li').length; // ищем все теги li в ul и считаем их колличество.
    let containerWidth = slidesCount * slider.width();
    let originWidth = slider.width();
    let n = 1; //номер текущего слайда


    //функция для изменения ширины слайдера
    let resizeSlider =()=> {
        let width = originWidth;
        if ($(window).width() < originWidth) {
            width = ($(window).width());
        }
        slider.css('width', width + 'px');
        slider.find('li').css('width', width + 'px');
        containerWidth = slidesCount * slider.width();

        container.css('width', containerWidth + 'px');
        container.css('left', -n * slider.width());
    };

    resizeSlider();
    $(window).resize(resizeSlider);

    let next = $('#next');
    let prev = $('#prev');


    //скрытие и показ навигационных точек

    //создаем код для нафигационных точек. Создаем разметку .slider__nav>span*2
    let navHtml = '<div class="slider__nav">';
    let i = 0;
    while (i < slidesCount) {
        navHtml += '<span data-n="'+ i + '"></span>';
        i++;
    }
    navHtml += '</div>';
    slider.append(navHtml);//Вставляет содержимое, заданное параметром, в конец каждого элемента в наборе соответствующих элементов

    //номер текущего слайда

    //находим все кнопки навигации снизу слайда
    let dots = $('.slider__nav span');

    let activateNav = function () {
        if (n === 0) {
            prev.hide();
        } else {
            prev.show();
        }

        if (n === slidesCount - 1) {
            next.hide();
        } else {
            next.show();
        }

        // среди всех точек находим точку с номер n и добавляем её класс
        dots
            .removeClass('active') // у всех точек удаляем классы
            .eq(n) // затем из них берём точку с номером n
            .addClass('active'); // и добавляем класс только ей
    };

    // чтобы первая кнопка точно исчезла
    // сразу после загрузки страницы
    activateNav();


    let changeSlide = function () {
        // меняем свойство left для ul c анимацией
        container.animate({left: -n * slider.width() + 'px'}, 1000);
        // вызываем функцию, которая скрывает или показывает кнопки вперёд-назад
        activateNav();
    };

    dots.click(function () {
        n = $(this).data('n');
        changeSlide();
    });

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

    let delta = 1;
    let timer = null;
    let startTimer = function () {
        timer = setInterval(function () {

            // если дошли до конца, то дельта становится отрицательной
            if (n === slidesCount - 1) {
                delta = -1;
            } else if (n === 0) { // а если оказались в начале, то снова положительной
                delta = 1;
            }

            // изменяем n на дельту
            // при положительных значениях n будет увеличиваться
            // при отрицательных уменьшаться
            n += delta;

            changeSlide();
        }, 10000);
    };

    // запускаем таймер
    startTimer();

    slider.mouseenter(function () {
        clearInterval(timer);
    });

    // когда мышка покидает слайдер...
    slider.mouseleave(function () {
        startTimer();
    });

});