var table = prompt("Enter a number between 0 - 10");             // Unit of table
var operator = 'multiplication'; // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '<h2>Multiplication Table</h2>';              // Message

/*if (operator === 'addition') {
  // Do addition
  while (i < 11) {
    msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
    i++;
  }
}*/
// Validation
if(table >= 0 && table <=10) {
  // Do multiplication
  
    while (i < 11) {
      msg += i + ' x ' + table + ' = ' + (i * table) + '<br >';
      i++;
    }
  
  }
  else{
    alert("You did not enter a valid number. Refresh the page and try again");
  }

// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;