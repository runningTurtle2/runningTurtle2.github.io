function validForm(){
// Create variable
var validName = false;
var validEmail = false;
var errorName = "";
var errorEmail = "";
var letters =/^[A-Za-z]+$/;

// Read value from html
var userEmail = document.getElementById("email").value;
var atpos = userEmail.indexOf("@");
var dotpos = userEmail.lastIndexOf(".");
var name = document.getElementById("name").value;


if (name==="null" || name==="" || name.length > 20 || !name.match(letters)){
    errorName = "<p>The first name is required and cannot be greater than 20 characters. Only letters are accepted.</p>";
}
else{
    validName = true;
}

if (atpos< 1 || dotpos < atpos+2 || dotpos+2 >= userEmail.length) {
    errorEmail = "<p>Invalid email</p>";
}
else{
    validEmail = true; 
}

document.getElementById("errorName").innerHTML = errorName;
document.getElementById("errorEmail").innerHTML = errorEmail;
// testing
console.log(validEmail)
console.log(validName)

return(validEmail && validName);
}