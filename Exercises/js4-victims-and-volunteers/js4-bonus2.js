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
    var volunteersName = prompt('Enter the volunteer\'s name:');
    volunteersArr.names.push(volunteersName)
    var volunteersPhone = prompt('Enter the volunteer\'s phone number:')
    volunteersArr.phoneNums.push(volunteersPhone)
    var volunteersStreet = prompt('Enter the volunteer\'s street address:')
    volunteersArr.streets.push(volunteersStreet)
    var moreVolunteers = prompt('Do you have another volunteer to enter?')
} while (moreVolunteers.toLowerCase() === 'yes') 

// Alert back the victims, volunteers, and the names of each

alert('Victims: ' + victimsArr.names.length + '\nVolunteers: ' + volunteersArr.names.length + '\nVictims: ' + victimsArr.names + '\nVolunteers: ' + volunteersArr.names)

// Prompt them to enter a person in need.

var victimMatch = prompt('Enter the name of a person in need.')

// Find and alert any volunteers on the same street as the person in need

var volunteerMatchArr = []

if(victimsArr.names.indexOf(victimMatch) != -1) {
    var victimMatchIndex = victimsArr.names.indexOf(victimMatch)
    var victimMatchStreet = victimsArr.streets[victimMatchIndex]

    for (i = 0; i < (volunteersArr.streets.length - 1); i++) {
        
        if(volunteersArr.streets.indexOf(victimMatchStreet, i) != -1) {
            var volunteersMatchIndex = volunteersArr.streets.indexOf(victimMatchStreet, i)
            var volunteerMatchName = volunteersArr.names[volunteersMatchIndex]
            volunteerMatchArr.push(volunteerMatchName)
        } 
    }
    if(volunteerMatchArr.length > 0) {
        alert('Volunteers on the same street: ' + volunteerMatchArr)
    } else {
            alert('There are no matching volunteers on the same street.')
        }
} else {
    alert('There are no matching victims on file.')
}

