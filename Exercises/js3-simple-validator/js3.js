
// Create function to check if entry is a number

var isNumber = function(n) { 
    return !isNaN(parseFloat(n)) && isFinite(n); };
    // console.log(isNumber('f'))
    // console.log(isNumber(' '))
    // console.log(isNumber('3'))
    // console.log(isNumber(3))
    // console.log(isNumber('-'))
    // console.log(isNumber('#'))

// Prompt for phone number

var phoneNum = prompt("To access the site, enter your phone number with dashes: \n XXX-XXX-XXXX \n We promise not to spam you!");

if ((phoneNum.charAt(3) === '-' && phoneNum.charAt(7) === '-') && phoneNum.length < 13 && isNumber(phoneNum[0 , 1 , 2 , 4 , 5, 6 , 8, 9, 10, 11]) === true) {
    alert('Thank you. Your phone number is valid.')
} else {
    alert('Your phone number is invalid.')
}

// Prompt for birth date

var birthDate = prompt("To access the site, enter your birth date with slashes: \n XX/XX/XX \n We promise not to spam you!");

if ((birthDate.charAt(2) === '/' && birthDate.charAt(5) === '/' && birthDate.length < 9) && isNumber(birthDate[0 , 1 , 3 , 4 , 6 , 7]) === true) {
    alert('Thank you. Your birth date is valid.')
} else {
    alert('Your birth date is invalid.')
}

// Prompt for zip code

var zipCode = prompt("To access the site, enter your 5-digit zip code or 9-digit zip code with a dash: \n XXXXX of XXXXX-XXXX \n We promise not to spam you!");

if (((zipCode.charAt(5) === '-' && zipCode.length === 10) || zipCode.length === 5) && isNumber(zipCode) === true) {
    alert('Thank you. Your zip code is valid.')
} else {
    alert('Your zip code is invalid.')
}

// Prompt for state abbreviation

var stateXX = prompt("To access the site, enter your two-letter capitalized state abbreviation. \n We promise not to spam you!");

if (stateXX.length === 2 && stateXX === stateXX.toUpperCase() && isNumber(stateXX[0]) === false && isNumber(stateXX[1]) === false) {
    alert('Thank you. Your state abbreviation is valid.')
} else {
    alert('Your state abbreviation is invalid.')
}

// Prompt for marital status

var MaritalStat = prompt("To access the site, state whether or not you are married by answering Yes or No. \n We promise not to spam you!");

if ((MaritalStat.toLowerCase() === 'yes' || MaritalStat.toLowerCase() === 'no') && isNumber(MaritalStat) === false) {
    alert('Thank you. Your marital status is valid.')
} else {
    alert('Your marital status is invalid.')
}