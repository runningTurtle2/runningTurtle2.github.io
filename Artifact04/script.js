function validateForm(){
    //1) Create variable
    var validFirstname = false;
    var validLastname = false;
    var validEmail = false;
    var validPhone = false;
    var validUsername = false;
    var validPassword = false;
    var validAddress = false;
    var validCity = false;
    var validZipCode = false;
    var errorMessages = "";
    var letters =/^[A-Za-z]+$/;
    var numbers=/^[0-9]+$/;
      
    //2) read value from HTML
    var userEmail = document.getElementById("email").value;
    var atpos = userEmail.indexOf("@");
    var dotpos = userEmail.lastIndexOf(".");
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var lastname = document.getElementById("lastname").value;
    var firstname = document.getElementById("firstname").value;
    var phone = document.getElementById("phone").value;
    var address = document.getElementById("address").value;
    var city = document.getElementById("city").value;
    var country = document.getElementById("country").value;
    var zipCode = document.getElementById("zipcode").value;
    //3) Do validation
    //First name
    if (firstname==="null" || firstname==="" || firstname.length > 20 || !firstname.match(letters)){
        errorMessages += "<p>The first name is required and cannot be greater than 20 characters. Only letters are accepted.</p>";
    }
    else{
       validFirstname = true;
    }
    //Last name
    if (lastname==="null" || lastname==="" || lastname.length > 50 || !lastname.match(letters)){
        errorMessages += "<p>The last name is required and cannot be greater than 50 characters. Only letters are accepted.</p>";
    }
    else{
       validLastname = true;
    }
    //Email
    if (atpos< 1 || dotpos < atpos+2 || dotpos+2 >= userEmail.length) {
        errorMessages += "<p>Invalid email</p>";
    }
    else{
        validEmail = true; 
    }
    
    //Phone
    if (isNaN(phone) || phone.lenght > 15 || phone===null || phone===""){
        errorMessages += "<p>Invalid Phone Number</p>";
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
    //password
    if(password===null || password===""){
        errorMessages +="<p>Password cannot be empty</p>";
    }
    else{
        validPassword = true;
    }

    //address
    if(address===null || address===""){
        errorMessages +="<p>Invalid Address</p>";
    }
    else{
        validAddress = true;
    }
    //city
    if(city===null || city===""){
        errorMessages +="<p>Invalid City</p>";
    }
    else{
        validCity = true;
    }

    //zipcode

    if(country !== "United States"){
        //No zip code is needed
        validZipCode = true;
    }
    else if(country=== "United States"){
        if(zipCode==="" || !zipCode.match(numbers) || zipCode.length > 5){
            errorMessages +="<p>Invalid Zip Code</p>";
        }
        else{
        validZipCode = true;
        }
    }
    else{
        validZipCode = false;
    }

    document.getElementById("errorMessages").innerHTML = errorMessages;
    //testing
    console.log(validFirstname)
    console.log(validLastname)
    console.log(validEmail)
    console.log(validPhone)
    console.log(validUsername)
    console.log(validPassword)
    console.log(validAddress)
    console.log(validCity)
    //5) return status of each field
    return (validFirstname && validLastname && validEmail && validPhone && validUsername && validPassword && validAddress && validCity && validZipCode);
    }
