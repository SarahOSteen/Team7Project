
function myFunction() {
    var firstName = document.getElementById("name").value;
    var bookingDate = document.getElementById("date").value;
    var bookingTime = document.getElementById("time").value;
    if (firstName=="" || bookingDate=="" || bookingTime=="") {
        alert ("Please enter all your details.") 
    } else {
        alert("Hi " + firstName + "!\nThank you for booking a table on " + bookingDate + " at " + bookingTime + ".\nYou will receive an e-mail confirmation shortly.");
    }
}

document.querySelector ("#close"). addEventListener
("click", function(){
    document.querySelector (".popup").style.display = "none"
})

document.querySelector ("#signUp"). addEventListener
("click", function(){
    var x = document.forms ["box"]
    ["email"].value;
    if (x == "") {
        alert ("Please enter a valid email address")
    }
    else {
    alert ("Thank you for signing up - please check your inbox for discount code")
    document.querySelector (".popup").style.display = "none"
}})