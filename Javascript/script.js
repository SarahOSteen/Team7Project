
function myFunction() {
    var firstName = document.getElementById("name").value;
    var bookingDate = document.getElementById("date").value;
    var bookingTime = document.getElementById("time").value;
    if (firstName=="" || bookingDate=="" || bookingTime=="") {
        alert ("Please enter all your details.") 
    } else {
        alert("Hi " + firstName + "!\nThank you for booking a table on " + bookingDate + " at " + bookingTime + ".\nYou will receive an e-mail confirmation shortly." );
    }
}
