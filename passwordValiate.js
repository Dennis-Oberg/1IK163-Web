"use strict";

let usernames = ["Dennis", "Gustaf", "123"];
let passwords = ["123", "asd", ""]

let input = document.getElementById("uID");
let pwinput = document.getElementById("pswd");

function init() {


}

function verifyLogin() {

    var pw = document.getElementById("pswd").value;
    var username = document.getElementById("uID").value;

    if ((pw == "1") && (username == "1")) {
        alert("Welcome!");
        return true;
    } else {
        alert("See info!");
        return false;
    }
}

function loginInfo() {
    alert("Username: " + "\n" + "10 * 10 in letters" +
        "\n" + "Password: " + "\n" + "20 * 20 in letters");
}


function validateUsername() {
    let userInput = input.value;

    for (var i = 0; i < passwords.length; i++) {
        if (userInput == passwords[i]) {
            alert("Correct password")
            return true
        }
        if (userInput != usernames) {
            alert("Check info")
            return false;
        }
    }
}