"use strict";
window.onload = function () {

    let iconDown = document.querySelectorAll('.form__icon-ScrollDown');
    let nestedList = document.querySelectorAll('.nested-list');
    let button = document.getElementById("btn");

    for (let i = 0; i < iconDown.length; i++) {
        iconDown[i].addEventListener("click", function () {
            for (let j = 0; j < nestedList.length; j++) {
                if (i === j) {
                    nestedList[j].style.display = 'block';
                }
            }
        });
    }



    let checkbox = document.querySelector('input[type=checkbox]');

    if (checkbox.checked) {
        alert("yte");
    }


};




    //console.log(checkbox.length);

    // for(let i = 0; i < checkbox.length; i++){
    //     console.log(checkbox[i]);
    // }
    // if(checkbox.checked) {
    //     console.log(1);
    // }

    // let listMainItem = document.getElementsByClassName("form__icon-ScrollDown");
    //let nestedList = document.getElementsByClassName('nested-list');
    //
    // for (let i = 0; i < listMainItem.length; i++) {
    //     listMainItem[i].onclick = function () {
    //         for (let j = 0; j < nestedList.length; j++) {
    //             if (i === j) {
    //                 nestedList[j].style.display = 'block';
    //             }
    //         }
    //     }
    // }


    //console.log(iconDown);
    //console.log(nestedList);

    // function nestedVisible() {
    //     for (let j = 0; j < nestedList.length; j++) {
    //         if (i === j) {
    //             nestedList[j].style.display = 'block';
    //         }
    //     }
    // }

    // button.onclick = function(){
    //     button.style.display = 'none';
    // }


    //button.addEventListener("click", () => alert("hey")



