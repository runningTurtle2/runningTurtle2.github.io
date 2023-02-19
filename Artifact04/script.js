function validateForm(){
//1) Create variable
var validFirstname = false;
var validLastname = false;
var validEmail = false;
//2) read value from HTML
var userEmail = document.getElementById("email").value;
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");

var lastname = document.getElementById("lastname").value;
var firstname = document.getElementById("firstname").value;

//3) Do validation
if (firstname==="null" || firstname==="" || firstname.length > 20)
    errorMessages += "<p>The first name is required and cannot be greater than 20 characters</p>";
else
   validFirstname = true;

if (lastname==="null" || lastname==="" || lastname.length > 50)
    errorMessages += "<p>The last name is required and cannot be greater than 20 characters</p>";
else
   validFirstname = true;

if (atpos< 1 || dotpos < atpos+2 || dotpos+2 >= userEmail.length) {
    errorMessages += "<p>Invalid email</p>";
    // send error message. For example:  errorMessages = "<p>Invalid email</p>";
}
else{
    validEmail = true; //Or assign the value to a variable. For example validEmail = true
}
//4) Send error message to HMTL

document.getElementById("errorMessages").innerHTML = errorMessages;

//5) return status of each field
return (validFirstname && validLastname && validEmail);
}