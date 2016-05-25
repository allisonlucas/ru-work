// Prompt for victims & save name, number, and street address

var victimsArr = {
    names: [],
    phoneNums: [],
    streets: []
}

do {
    var victimsName = prompt('Enter the victim\'s name:');
    victimsArr.names.push(victimsName)
    var victimsPhone = prompt('Enter the victim\'s phone number:')
    victimsArr.phoneNums.push(victimsPhone)
    var victimsStreet = prompt('Enter the victim\'s street address:')
    victimsArr.streets.push(victimsStreet)
    var moreVictims = prompt('Do you have another victim to enter?')
} while (moreVictims.toLowerCase() === 'yes') 

// Prompt for volunteers and save name, number, street address

var volunteersArr = {
    names: [],
    phoneNums: [],
    streets: []
}

do {
    var volunteersName = prompt('Enter the victim\'s name:');
    volunteersArr.names.push(volunteersName)
    var volunteersPhone = prompt('Enter the victim\'s phone number:')
    volunteersArr.phoneNums.push(volunteersPhone)
    var volunteersStreet = prompt('Enter the victim\'s street address:')
    volunteersArr.streets.push(volunteersStreet)
    var moreVolunteers = prompt('Do you have another volunteer to enter?')
} while (moreVolunteers.toLowerCase() === 'yes') 

// Alert back the victims, volunteers, and the names of each

alert('Victims: ' + victimsArr.names.length + '\nVolunteers: ' + volunteersArr.names.length + '\nVictims: ' + victimsArr.names + '\nVolunteers: ' + volunteersArr.names)
