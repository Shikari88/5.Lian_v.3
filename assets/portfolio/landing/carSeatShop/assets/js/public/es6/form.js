"use strict";

$(function () {
    let control = $(".form__control");
    let controlPopupOrder = $('#popup__phone');
    //let btn = $(".btn");
    let iconClose = $(".popup__icon-closed");

    //форма с вводом значения
    let popupOrder = $("#popup-order-call");
    //меняем цвет сразу у всех форм без указания перебора через цикл элементов массива

    //форма без ввода значений
    let popupCompleted = $("#popup-completed");

    //кнопка без поля ввода номера
    let orderCall = $(".order-call");
    //кнопка с полем ввода номера
    let orderCompleted = $(".order-completed");



    let showPopupOrder = ()=> {
        orderCall.click(()=>{
            //document.body.classList.toggle("main");//добавляем класс на JS
            $("body").addClass("main");// На JQuery
            popupOrder.show();
        });
    };

    showPopupOrder();


    let showPopupCompleted = ()=> {
        orderCompleted.click(()=>{
            //document.body.classList.toggle("main");
            $("body").addClass("main");
            popupCompleted.show();
        });
    };
    showPopupCompleted();

    //закрываем всплывающую форму кликом на крестик
    iconClose.click (()=>{
        $("body").removeClass("main", false);//удаляет класс
        popupOrder.hide();
        popupCompleted.hide();
    });

    $(".btn").click(function(){
        //вызываем событие change на элементе
        // popupOrder.change();

             popupOrder.hide();

    });

    // orderCompleted.click(function () {
    //     showPopupOrder();

        // let target = $(this).data('target');
        // $(target).show();
        // if ($(target).is(':visible')) {
        //     //то скрываем его
        //     // $(target).slideUp();
        //     // $(this).text('Развернуть');
        // } else {
        //     // а если не видим. то показываем
        //     // $(target).slideDown();
        //     // $(this).text('Свернуть');
        // }
    // })
    /*for (let i=0; i<$(".btn").length; i++) {
        $(".btn").click(()=> {
            showPopupCompleted();
            //если не ввел, то выводим надпись
            // if (control[1].value === "") {
            //     control[1].style.borderColor = "#d04545";
            //     control[1].focus();
            // } else {
            //иначе скрываем форму
            //toggle - добавляет, либо удаляет класс(если вторым
            // параметром передается значение false
            // document.body.classList.toggle("main");
            // popupOrder[1].style.display = "none";
            // popupCompleted[1].style.display = "block";
            //     alert(2);
            // }
        });
    }*/


    //проверяем, ввел ли пользователь информацию в поле ввода
    /*for (let i=0; i<btn.length; i++) {
        btn[i].addEventListener("click", function () {



            if (control[i].value === "") {
                tooltip[i].style.display = "block";
                control[i].style.borderColor = "#d04545";
                control[i].focus();
            } else {

               // popupOrder[i].closeform();
            }


        });
        btn[1].click(()=> {
        //если не ввел, то выводим надпись
        if (control[1].value === "") {
            control[1].style.borderColor = "#d04545";
            control[1].focus();
        } else {
            //иначе скрываем форму
            //toggle - добавляет, либо удаляет класс(если вторым
            // параметром передается значение false
            document.body.classList.toggle("main");
            popupOrder[1].style.display = "none";
            popupCompleted[1    ].style.display = "block";
        }
    });
    }*/
    /*btn[0].click(function () {
        //если не ввел, то выводим надпись
        if (control[0].value === "") {
            tooltip[0].style.display = "block";
            control[0].style.borderColor = "#d04545";
            control[0].focus();
        } else {
            //иначе скрываем форму
            //toggle - добавляет, либо удаляет класс(если вторым
            // параметром передается значение false
            document.body.classList.toggle("main");
            popupOrder[0].style.display = "none";
            popupCompleted[0].style.display = "block";
        }
    });*/

    /*iconClose[0].addEventListener("keydown", function(event) {
        if (event.code === 13) {
            popupOrder[0].style.display = "none";
        }
    });*/
});

