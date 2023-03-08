function validForm(){
// Create variable
var validName = false;
var validEmail = false;
var errorMessages = "";

// Read value from html
var userEmail = document.getElementById("email").value;
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
var name = document.getElementById("name");


if (firstname==="null" || firstname==="" || firstname.length > 20 || !firstname.match(letters)){
    errorMessages += "<p>The first name is required and cannot be greater than 20 characters. Only letters are accepted.</p>";
}
else{
    validName = true;
}

if (atpos< 1 || dotpos < atpos+2 || dotpos+2 >= userEmail.length) {
    errorMessages += "<p>Invalid email</p>";
}
else{
    validEmail = true; 
}

document.getElementById("errorMessage").innerHTML = errorMessages;
// testing
console.log(validEmail)
console.log(validName)

return(validEmail && validName);
}