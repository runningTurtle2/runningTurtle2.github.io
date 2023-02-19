function validateForm(){
    //1) Create variable
    var validFirstname = false;
    var validLastname = false;
    var validEmail = false;
    var validPhone = false;
    var validUsername = false;
    var validAddress = false;
    var validCity = false;
    var validState = false;
    var validZipCode = false;

    var letters =/^[A-Za-z]+$/;
    var numbers=/^[0-9]+$/;
      
    //2) read value from HTML
    var userEmail = document.getElementById("email").value;
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    var username = document.getElementById("username").value;
    var lastname = document.getElementById("lastname").value;
    var firstname = document.getElementById("firstname").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var state = document.getElementById("state").value;
    var country = document.getElementById("country").value;
    var zipCode = document.getElementById("zipcode").value;
    //3) Do validation
    //First name
    if (firstname==="null" || firstname==="" || firstname.length > 20 || !firstname.match(letters))
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters. Only letters are accepted.</p>";
    else
       validFirstname = true;
    //Last name
    if (lastname==="null" || lastname==="" || lastname.length > 50)
        errorMessages += "<p>The last name is required and cannot be greater than 20 characters</p>";
    else
       validFirstname = true;
    //Email
    if (atpos< 1 || dotpos < atpos+2 || dotpos+2 >= userEmail.length) {
        errorMessages += "<p>Invalid email</p>";
    }
    else{
        validEmail = true; 
    }
    
    //Phone
    if (isNaN(phone) || phone.lenght > 15 || phone===null || phone===""){
        errorMessages += "<p>Phone needs to be less than 15 numbers</p>";
    }
    else{
      validPhone = true;
    }
    if (phone===null||phone ==="" ||phone.length>15|| !phone.match(numbers)){
        errorMessages += "<p>Phone number accepts only numbers</p>";
    }
    else{
      validPhone = true;
    }
    //username
    if(username===null || username==="" || username > 12){
        errorMessages +="<p>Invalid username</p>";
    }
    else{
        validUsername = true;
    }

    //address
    if(address===null || address===""){
        errorMessages ="<p>Invalid Address</p>";
    }
    else{
        validAddress = true;
    }
    //city
    if(city===null || city===""){
        errorMessages ="<p>Invalid Address</p>";
    }
    else{
        validCity = true;
    }
    //state
    if(state===null || state===""){
        errorMessages ="<p>Invalid Address</p>";
    }
    else{
        validState = true;
    }
    //zipcode
    if(zipCode===null || zipCode==="" || !zipCode.match(numbers) || zipCode > 5 || country != "United States"){
        errorMessages ="<p>Invalid Zip Code</p>";
    }
    else{
        validZipCode = true;
    }

    document.getElementById("errorMessages").innerHTML = errorMessages;
    
    //5) return status of each field
    return (validFirstname && validLastname && validEmail && validPhone && validUsername && validAddress);
    }