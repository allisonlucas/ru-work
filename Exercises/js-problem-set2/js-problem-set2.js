
// Write a function firstReverse that takes a single string parameter and returns the string in reverse order.

function firstReverse (string) {
    var letters = string.split('')
    var reverse = []
    
    for (var i = 0; i < string.length; i++) {
        var lastIndex = letters.length - 1
        var splicedLetter = letters.splice(0, 1)
        reverse.splice(0, 0, splicedLetter)
    }
    
    var reverseString = reverse.join('')
    console.log(reverseString)
}

firstReverse('hello there')
firstReverse('can you read this?')
firstReverse('123reverse321')

// Write a function swapCase that takes a single string parameter and swaps the case of each character. For example: if a string is "Hello World" the output should be "hELLO wORLD". Let numbers and symbols stay the way they are.

function swapCase(string) {
    var swapArr = []
    
    for (var i = 0; i < string.length; i++) {
        var char = string.charAt([i]);
    	if (char >= 'A' && char <= 'Z') {
    	    var lowStr = char.toLowerCase()
    	   // console.log(lowStr)
    	    swapArr.push(lowStr)
    	} else {
    	    var highStr = char.toUpperCase()
    	   // console.log(highStr)
    	    swapArr.push(highStr)
    	}
    }
    var swapCase = swapArr.join('')
    console.log(swapCase)
}

swapCase('Hello World')
swapCase('all caps')
swapCase('AlTeRnAtE')
swapCase('1_0_hI')

// Bonus: Write a function letterCount that takes a single string parameter and returns the first word with the greatest number of repeated letters. For example: "Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by single spaces.

function letterCount (string) {
    var wordsArr = string.split(' ')
    
    var maxWord = ''
    var maxCount = 0

    for (var i = 0; i < wordsArr.length; i++) {
        var elCount = []
        var word = wordsArr[i].toLowerCase()
        for (var j = 0; j < word.length; j++) {
            var letter = word[j]
            if(elCount[letter] == null) {
                elCount[letter] = 1
            } else {
                elCount[letter]++
            }
            
            if(elCount[letter] > maxCount){
                maxWord = wordsArr[i]; // word
                maxCount = elCount[letter]
            }
        }
    }
    console.log(maxWord)
}
    
letterCount('Today is the greatest day ever')
letterCount('test ttest tttest ttest')
