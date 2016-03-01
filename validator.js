var userPhone = prompt("Please enter your phone number","e.g. 555-555-5555 P.S. We promise we won't spam you - that would suck for both of us!")

// var isNumber = function(userPhone) {
//   return !isNaN(parseFloat(userPhone)) && isFinite(userPhone)
// }

console.log(userPhone,isNumber)

if(userPhone.length === 12 && userPhone.charAt(7) === "-" && userPhone.charAt(7) === "-") {
    if (isNumber != "true"){
      alert("Thank You!")
  }
    else {
      alert("Please enter a valid number in the correct format. Thank you!")
  }
}


//
// Resources
// Mozilla Javascript Reference - Good general Javascript reference containing information about specific javascript language constructs, keywords, types, etc.)
// Requirements
// Create an html file and js file and add a script tag to include the js file as before. (Getting familiar? Good!)
// Prompt the user to enter their phone number with dashes. (You might want to assure them that it won’t be used for SPAM. Your site probably looks pretty sketchy right now, being a blank page with a prompt for their phone number. I know I wouldn’t enter my phone number...)
//
// ? Tip: You can report simple boolean evaluations of user input by combining boolean operators.
// ? e.g. alert(userInput.charAt(0) === 'B' && userInput.length === 7) will display true if the user enters 'Boulder' or 'Baghdad'.
//
// Alert the user if their phone number is valid (just true or false) according to the simple rule that the fourth and eighth characters must be dashes.
//
// Following the same procedure as #2 and #3 above to prompt and validate the following fields:
//
// birth date
// must follow the format xx/xx/xx
// postal code
// must follow the format xxxxx OR xxxxx-xxxx
// state abbreviation
// must be two characters
// must be all caps
// married
// must be yes or no
// may be any capitalization: YES, Yes, yes
// ? Tip: While the built-in isNaN method works in most cases to test if a value is a number, it fails on some simple inputs like whitespace. The following function is a more robust implementation for checking if a string contains a valid number: var isNumber = function(n) { return !isNaN(parseFloat(n)) && isFinite(n); };
