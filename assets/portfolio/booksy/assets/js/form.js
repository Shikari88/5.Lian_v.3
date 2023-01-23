"use strict";
window.onload = function () {

    //----показавыем окно подскажки при клике на иконку подсказки
    let helpIcon = document.querySelectorAll('.form__icon');
    let formHelp = document.querySelectorAll('.form__help');
    let popup = document.querySelector('#popup');
    let reg = document.getElementById("registration");




    for (let i = 0; i < helpIcon.length; i++) {
        for (let j = 0; j < formHelp.length; j++) {
            helpIcon[i].addEventListener("click", function () {
                if (i === j) {
                    formHelp[j].classList.toggle("show");
                    popup.style.display = "block";


                    let yu = reg.offsetHeight;
                    popup.style.height = yu + "px";



                    // setTimeout(function () {
                    //     formHelp[j].style.display = "none";
                    // }, 3000);
                }


            });


            // document.body.addEventListener("click", () => {
            //     formHelp[j].classList.toggle("hide");
            // })
        }
    }

    //let qwe = reg.getAttribute(height);
    //console.log(reg);
    if (popup.style.display === "block") {
        let yu = reg.offsetHeight;
        popup.setAttribute(height, yu);
        console.log(popup.offsetHeight);

    }



    for (let k = 0; k < formHelp.length; k++) {
        popup.addEventListener('click', () => {
            popup.style.display = "none";
            formHelp[k].classList.remove("show");
        });
    }


    // let headerLogo = document.querySelector(".header__logo");
    //
    // for (let k = 0; k < formHelp.length; k++) {
    //     headerLogo.addEventListener("click", (e) => {
    //
    //         formHelp[k].classList.remove("show");
    //
    //
    //     });
    //
    // }


    // for (let k = 0; k < formHelp.length; k++) {
    //     document.addEventListener("click", (e) => {
    //         const withinBoundaries = e.composedPath().includes(formHelp[k]);
    //         if ( ! withinBoundaries ) {
    //             formHelp[k].style.display = 'none'; // скрываем элемент т к клик был за его пределами
    //         }
    //     })
    // }
    //-----------------------------------------------------------------

    //----показывам выпадающее меню при клике на иконку стрелки--------
    let formText = document.querySelectorAll('.form__text');
    let nestedList = document.querySelectorAll('.nested-list');

    for (let i = 0; i < formText.length; i++) {
        formText[i].addEventListener("click", function () {
            for (let j = 0; j < nestedList.length; j++) {
                if (i === j) {
                    nestedList[j].classList.toggle("show");
                }
            }
        });
    }
    //-----------------------------------------------------------------

    //----показывам выпадающее меню при клике на иконку стрелки  подменю----------

    let iconDownRot = document.querySelectorAll('.form__icon-ScrollDown--rotate');
    let nestedSublist = document.querySelectorAll('.nested-sublist');

    for (let i = 0; i < iconDownRot.length; i++) {
        iconDownRot[i].addEventListener("click", function () {
            for (let j = 0; j < nestedSublist.length; j++) {
                if (i === j) {
                    // nestedList[j].style.display = 'block';
                    nestedSublist[j].classList.toggle("show");
                }
            }
        });
    }
    //-------------------------------------------------------------------------------

    //----Если в предыдущем пункте вы выбрали ТОЛЬКО БЕСПЛАТНО, то выбирайте здесь ТОЛЬКО БЕСПЛАТНО.

    // рабочий код. закомментирован из-за изменений в ТЗ

    // let forMany = document.getElementById('check_6');
    // let isFree = document.getElementById('check_7');
    // let isFreePrise = document.getElementById('check_7-1');
    // let labelIsFreePrise = document.getElementById('label_check_7-1');
    // let price1 = document.getElementById('check_8');
    // let price2 = document.getElementById('check_9');
    // let price3 = document.getElementById('check_10');
    //
    // let prices = [price1, price2, price3];
    //
    // forMany.addEventListener('click', () => {
    //     if(forMany.checked) {
    //         isFreePrise.disabled = true;
    //         isFreePrise.checked = false;
    //         isFree.checked = false;
    //         for(let i = 0; i < prices.length; i++) {
    //             prices[i].disabled = false;
    //         }
    //     } else {
    //         isFreePrise.disabled = false;
    //     }
    // });


    // isFree.addEventListener('click', () => {
    //     if (isFree.checked) {
    //         // console.log(prices[0]);
    //         for(let i = 0; i < prices.length; i++) {
    //             prices[i].disabled = true;
    //             isFreePrise.checked = true;
    //             forMany.checked = false;
    //             prices[i].checked = false;
    //         }
    //     } else if (isFreePrise.checked = false){
    //
    //         for(let i = 0; i < prices.length; i++) {
    //             prices[i].disabled = false;
    //             forMany.checked = true;
    //         }
    //     }
    // });




    //-----Окно успешной регистрации при клике на кнопку-----
    // let btn = document.getElementById("btn");
    // btn.addEventListener("click", ()=> {
    //     window.location.href = "succeful-reg.html";
    // })


    // let btn = document.getElementById("btn");
    // let popupSuccess = document.getElementById('popupSuccess');
    //
    // function showPopup(btn) {
    //     btn.preventDefault();
    //     popupSuccess.style.display = "block";
    //     setTimeout(function () {
    //         popupSuccess.style.display = "none";
    //     },3000);
    //
    // }
    // btn.addEventListener("click", showPopup);


    // document.body.onkeydown = function (ev) {
    //     if (ev.keyCode === 27) {
    //         popupSuccess.style.display = "none";
    //     }
    // };

    //
    //     popupSuccess.style.display = "none";
    // },5000);

    //----Попытука сделать всплывающее окно успешной регитсрации при клике на кнопку зарегаться

    // let button = document.getElementById('btn');
    // let popupSuccess = document.getElementById('popupSuccess');
    // button.addEventListener("click", function () {
    //     popupSuccess.style.display = "block";
    // })


    // if(isFreePrise.checked) {
    //     labelIsFreePrise.innerHTML = "sasa";
    // }


    //----Попытука выделить все чекбоксы при клике на главный
    // let checkboxMain = document.querySelectorAll('.checkbox__item--main');
    // let checkboxSubsidiary = document.querySelectorAll('.checkbox__item--subsidiary');
    //
    // for(let i = 0; i < checkboxMain.length; i++){
    //     //при клике на элемент списка главного меню срабатывает обрабочтик событий
    //     checkboxMain[i].addEventListener("click", function () {
    //
    //         if (checkboxMain[i].checked) {
    //             for( let j = 0; j < checkboxSubsidiary.length; j++) {
    //                 checkboxSubsidiary[j].checked = true;
    //             }
    //         } else {
    //             for( let j = 0; j < checkboxSubsidiary.length; j++) {
    //                 checkboxSubsidiary[j].checked = false;
    //             }
    //         }
    //
    //     })
    // }




    // let i = 0;
    // while(i < helpIcon.length) {
    //     helpIcon[i].onclick = function () {
    //         formHelp.style.display = "block";
    //     };
    //     i++;
    // }

    // function showHelp () {
    //     //Виснет с таким говнокодом
    //     // let i = 0;
    //     // while (i < formHelp.length) {
    //     //     formHelp[i].style.display = "block";
    //     // }
    //     // i++;
    //     formHelp.style.display = "block";
    // }
    //
    // helpIcon.addEventListener("click", showHelp);


    // -----------------рабочий вариант-----------------------

    // for(let i = 0; i < helpIcon.length; i++) {
    //     helpIcon[i].onclick = function () {
    //         for(let j = 0; j < formHelp.length; j++) {
    //             if(i === j) {
    //                 formHelp[j].style.display = "block";
    //                 setTimeout(function () {
    //                     formHelp[j].style.display = "none";
    //                 }, 3000);
    //             }
    //         }
    //     }
    // }

    //----------------------------------------------------------

    // for(let i = 0; i < helpIcon.length; i++) {
    //     helpIcon[i].addEventListener("click", function(){
    //         for(let j = 0; j < formHelp.length; j++) {
    //             if(i === j) {
    //                 formHelp[j].style.display = "block";
    //                 setTimeout(function () {
    //                     formHelp[j].style.display = "none";
    //                 }, 3000);
    //             }
    //         }
    //     });
    // }



    // let box = document.getElementsByClassName('box');
    // for(let i = 0; i < box.length; i++) {
    //     console.log(box.length);
    // }


};