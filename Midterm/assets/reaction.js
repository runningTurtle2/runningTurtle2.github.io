var name = document.getElementsByName('name');
var email = document.getElementsByName('email');
var comment = document.getElementsById('comment');

function validateName(){
    if (name == "")
    {
        alert("Name is not filled");
        return false;
    }
}
function validateEmail(){
    if (email == "")
    {
        alert("Email is not filled");
        return false;
    }
}
function validateComm(){
    if (comment === "" || comment === "Enter comments...")
    {
        alert("Comments is not filled");
        return false;
    }
}