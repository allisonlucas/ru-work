// Write a function called letterCapitalize which takes a single string parameter and capitalizes the first letter of each word in the string. You can assume that words in the input string will be separated by only one space.

function letterCapitalize (str) {
    
    var splitWords = str.split(" ");
    var capWordsArr = [];
    
    for (var i = 0; i < splitWords.length; i++) {
        var capWords = splitWords[i].charAt(0).toUpperCase() + splitWords[i].substr(1).toLowerCase()
        capWordsArr.push(capWords);
    }
    
    var capSen = capWordsArr.join(" ");
    console.log(capSen);
}

letterCapitalize("I'm a string.")
letterCapitalize("this is a sentence where every word should be capitalized.")

// Write a function called wordCount which takes a single string parameter and returns the number of words the string contains (ie. "Never eat shredded wheat" would return 4). You can assume that words in the input string will be separated by only one space.

function wordCount (str) {
    var splitWords = str.split(" ");
    console.log(splitWords.length);
}

wordCount("Never eat shredded wheat");
wordCount("Peter picked a pick of pickled peppers")
wordCount("Hello World")


// Bonus:

// Write a function called primeTime that takes a single number parameter and returns true if the parameter is a prime number, otherwise false. The range will be between 1 and 216.

function primeTime(num) {
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if(num % i === 0) {
            console.log(false)
            return false;
        }
    }
    console.log(true)
    return true;
}

primeTime(5);
primeTime(31);
primeTime(9);
primeTime(17);