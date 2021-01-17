let usernames = ["Dennis", "Gustaf", "123"];
let passwords = ["123", "asd", ""]

let input = document.getElementById("uID");
let pwinput = document.getElementById("pswd");

function init() {

}

function verifyLength(input) {
    if (input.length < 8) {
        return false;
    }
    return true;
}

function verifyDigits(input) {
    let counter = 0;
    for (var i = 0; i < input.length; i++) {
        if (parseInt(input.charAt(i))) {
            counter++;
        }
    }
    console.log(counter);
    return counter;

}

function verifyUpperCase(input) {
    let counter = 0;
    for (var i = 0; i < input.length; i++) {
        if (!(parseInt(input.charAt(i)))) {
            if (input.charAt(i) == input.charAt(i).toUpperCase()) {
                counter++;
            }
        }
    }
    console.log(counter);
    return counter;
}

function verifyLogin() {

    var pw = document.getElementById("pswd").value;
    var username = document.getElementById("uID").value;

    if (verifyLength(pw)) {
        if (verifyDigits(pw) >= 2) {
            if (verifyUpperCase(pw) >= 2) {
                if ((pw == "LNUväxjö123") && (username == "100")) {
                    alert("Welcome")
                    return true;
                } else {
                    alert("Wrong password and/or username!");
                    return false;
                }
            } else {
                alert("Not enough Uppercase characters!");
                return false;
            }
        } else {
            alert("Not enough digits!");
            return false;
        }
    } else {
        alert("Too short!");
        return false;
    }
}

function loginInfo() {
    alert("Username: " + "\n" + "10 * 10 in letters" +
        "\n" + "Password: " + "\n" + "= LNUväxjö123");
}



function swapPage(inputURL) {
    document.href(inputURL);
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