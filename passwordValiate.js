"use strict";

let userName = ["Dennis", "Gustaf"];
let password = ["Admin123", "123", "asd"];
let form = document.createElement("form");
let input = document.createElement("input");

function init() {
    validateLogin();
    validatePassword();
    console.log("Hello");
}


function validatePassword() {
    let passinput = input.value;

    for (var i = 0; i < password.length; i++) {
        if (passinput == password[i]) {
            return true;
        }
        if (passinput != password[i]) {
            return false;
        }
    }
}


function validateLogin() {
    let formInput = input.value;


    for (var i = 0; i < userName.length; i++) {
        if (formInput == userName[i]) {
            return true;
        }
        if (formInput != userName) {
            return false;
        }
    }

}