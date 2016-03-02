//Phone number validation

var userPhone = prompt("Please enter your phone number","e.g. 555-555-5555 P.S. We promise we won't spam you - that would suck for both of us!")

  // var phoneArray = userPhone.split("-")
  // var phoneString = phoneArray.join('')
  // var phoneArray2 = phoneString.split('')
var phoneSimple = userPhone.split('-').join('')
  // for(var i = 0; i < phoneArray2.length; i++){
  //     var checked = (simple[i])
  // }
// function checker(simple){}
  // var number = parseFloat(phoneString)
  // var isNumber = !isNaN(number)
  // var isFinite = isFinite(number)
// if(!isNaN(parseFloat(simple[i])) && isFinite(simple[i]))

// function isNumber(phoneString) {
//   for(var i = 0; i < phoneArray.length; i++){
//     return(parseFloat(phoneArray[i]))
//   return !isNaN(parseFloat(phoneArray)) && isFinite(phoneArray)
//   }


if(userPhone.length === 12 && userPhone.charAt(7) === "-" && userPhone.charAt(7) === "-" && !isNaN(parseFloat(phoneSimple)) && isFinite(phoneSimple)) {
  // var simple = userPhone.split('-').join('').split('')
  // for(var i = 0; i < phoneArray2.length; i++){
  //     var checked = (simple[i])
    alert("Thanks you!")
  }
    else {
      alert("Please enter a valid number in the correct format. Thank you!")
  }


// birth date validator
// must follow the format xx/xx/xx

var birthday = prompt("What's your birthday?","xx/xx/xx")
var birthdaySimple = birthday.split('/').join('')
// var is = !isNaN(birthdaySimple)
// var finite = !isFinite(birthdaySimple)
// var bdaylength = birthday.length === 8
// var bday2 = birthday.charAt(2)=== "/"
// var bday5 = birthday.charAt(5) === "/"

if(birthday.length === 8 && birthday.charAt(2)=== "/" && birthday.charAt(5) === "/" && !isNaN(parseFloat(birthdaySimple)) && isFinite(birthdaySimple)){
    alert("Thank you")
}
  else {
    alert("Are you sure you entered that correctly?")
  }
// && isNumber(birthday.charAt(0) && isNumber(birthday.charAt(1) && isNumber(birthday.charAt(3) && isNumber(birthday.charAt(4) && isNumber(birthday.charAt(6) && isNumber(birthday.charAt(7)

// postal code validator
// must follow the format xxxxx OR xxxxx-xxxx
var zipcode = prompt("Please enter your zip code or postal code","e.g. 12345")

// var zipcode2 = zipcode.toString()
// var zipcodelength = zipcode.length === 10
// var zipcode5 = zipcode.charAt(5) === "-"

if(zipcode.length === 5){
  alert("Thank you")
}
  else if (zipcode.length === 10 && zipcode.charAt(5) === "-"){
    alert("Thank you")
  }
  else {
      alert("Are you sure you entered that correctly?")
  }
// state abbreviation validator
// must be two characters
// must be all caps
var state = prompt("What state are you from?","Please use the two letter abbreviation e.g. CO")

var statelength = state.length === 2
var char1 = isNaN(state.charAt(0))
var char2 = isNaN(state.charAt(1))

if(statelength && char1 && char2) {
    alert("Thank you")
  }
  else {
      alert("Are you sure you entered that correctly?")
  }

// married validator
// must be yes or no
// may be any capitalization: YES, Yes, yes
var married = prompt("Are you married?", "Yes or No")

var marriedUpper = married.toUpperCase()

if(marriedUpper === "YES" || marriedUpper === "NO"){
  alert("Thank you")
}
  else {
    alert("Yes or no only, please!")
  }
