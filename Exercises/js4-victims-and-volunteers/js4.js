// Prompt for victims & save name, number, and street address

var victimsNum = prompt('How many disaster relief vicitms are you submitting?')

var victims = victimsNum

var victimsArr = {
    names: [],
    phoneNums: [],
    streets: []
}

while(victims > 0) {
    var victimsName = prompt('Enter the victim\'s name:');
    victimsArr.names.push(victimsName)
    var victimsPhone = prompt('Enter the victim\'s phone number:')
    victimsArr.phoneNums.push(victimsPhone)
    var victimsStreet = prompt('Enter the victim\'s street address:')
    victimsArr.streets.push(victimsStreet)
    victims--;
}

// Prompt for volunteers and save name, number, street address

var volunteersNum = prompt('How many disaster relief volunteers are you submitting?')

var volunteers = volunteersNum

var volunteersArr = {
    names: [],
    phoneNums: [],
    streets: []
}

while(volunteers > 0) {
    var volunteersName = prompt('Enter the victim\'s name:');
    volunteersArr.names.push(volunteersName)
    var volunteersPhone = prompt('Enter the victim\'s phone number:')
    volunteersArr.phoneNums.push(volunteersPhone)
    var volunteersStreet = prompt('Enter the victim\'s street address:')
    volunteersArr.streets.push(volunteersStreet)
    volunteers--;
}

// Alert back the victims, volunteers, and the names of each

alert('Victims: ' + victimsNum + '\nVolunteers: ' + volunteersNum + '\nVictims: ' + victimsArr.names + '\nVolunteers: ' + volunteersArr.names)
