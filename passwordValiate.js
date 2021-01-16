"use strict";


function init()
{
    verifyLogin();
}


function verifyLogin()
{
    var pw = document.getElementById("pswd").value;
    var username = document.getElementById("uID").value;

    if ((pw == "123") && (username == "123"))
    {
        alert("Welcome");
        return true;
    }
    else
    {
        alert("Try again");
        return false;
    }
}


function loginInfo()
{
    alert("Username: " + "\n" + "10 * 10 in letters" + "\n" + "Password: " + "\n" + "20 * 20 in letters");
}
