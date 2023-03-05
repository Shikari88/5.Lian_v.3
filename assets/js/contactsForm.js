"use strict";
window.addEventListener("load", function(){
    const contactsForm = document.querySelector("#contactsForm");

    contactsForm.addEventListener("submit", function(e) {
        e.preventDefault();
    })
});