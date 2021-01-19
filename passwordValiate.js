let usernames = ["Dennis", "Gustaf", "123"];
let passwords = ["123", "asd", ""]

let input = document.getElementById("uID");
let pwinput = document.getElementById("pswd");

const dot1 = document.getElementById("dot1");
const dot2 = document.getElementById("dot2");
const dot3 = document.getElementById("dot3");



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
                document.getElementById("alert").innerHTML = "Välkommen!";
                window.location.assign("index.html");
                return true;
            } else {
                document.getElementById("alert").innerHTML = "Not enough Uppercase characters!";

                return false;
            }
        } else {
            document.getElementById("alert").innerHTML = "Not enough digits!";
            return false;
        }
    } else {
        document.getElementById("alert").innerHTML = "Password not long enough!";
        return false;
    }
}

function loginInfo() {
    document.getElementById("alert").innerHTML = "Username not required." + "\n" +
        "Password must be atleast 8 characters long, have 2 uppercase letters and include 2 digits ";

}





function swapPage(inputURL) {
    document.location.href(inputURL);
}

function validateLoginCred(pw) {
    return (verifyLength(pw) && verifyDigits(pw) && verifyUpperCase(pw));
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