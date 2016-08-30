// Write a function alphabetSoup that takes a single string parameter and returns the string with the letters in alphabetical order (ie. hello becomes ehllo). Assume numbers and punctuation symbols will not be included in the string.

function alphabetSoup(str){
    var stringArr = str.split('').sort()
    console.log(stringArr)
}

alphabetSoup('great') // aegrt
alphabetSoup('wonderful') // deflnoruw
alphabetSoup('caretaker') // aaceekrrt

// Write a function vowelCount that takes a single string parameter and returns the number of vowels the string contains (ie. "All cows eat grass" would return 5).

// function vowelCount(str){
//     var strLow = str.toLowerCase()
//     var count = 0
//     for (var i = 0; i < strLow.length; i++) {
//         if (strLow[i] === 'a' || strLow[i] === 'e' || strLow[i] === 'i' || strLow[i] === 'o' || strLow[i] === 'u') {
//             count++
//         }
//     }
//     console.log(count)
// }

// OR THIS IS A MORE CONCISE WAY: //

function vowelCount2(str){
    var strLow = str.toLowerCase()
    var count = 0
    for (var i = 0; i < strLow.length; i++) {
        if (['a', 'e', 'i', 'o', 'u'].indexOf(strLow[i]) >= 0) {
            count++
        }
    }
    console.log(count)
}

vowelCount2('All cows eat grass')
vowelCount2('How Many Vowels ArE thERE?')

// Bonus:

// Write a function coinDeterminer that takes a single number parameter, which will be an integer ranging from 1 to 250, and returns an integer output that will specify the least number of coins, that when added, equal the input integer. Coins are based on a system as follows: there are coins representing the integers 1, 5, 7, 9, and 11. So for example: if num is 16, then the output should be 2 because you can achieve the number 16 with the coins 9 and 7. If num is 25, then the output should be 3 because you can achieve 25 with either 11, 9, and 5 coins or with 9, 9, and 7 coins.

function coinDeterminer(num) {
    var coinsArr = [1,5,7,9,11]
    var AnswerArr = []
    for (var i = 4; i >= 0; i--) {
        if (num % coinsArr[i] === 0) {
            AnswerArr.push(num/coinsArr[i])
        } else if (num % coinsArr[i] === 1 || num % coinsArr[i] === 5 || num % coinsArr[i] === 7 || num% coinsArr[i] === 9) {
            AnswerArr.push(Math.floor(num/coinsArr[i]) + 1)
        } else {
            var remainder = num % coinsArr[i]
            if (remainder % 9 === 0) {
                AnswerArr.push(Math.floor(num/coinsArr[i]) + remainder/9)
            } else if (remainder % 7 === 0) {
                AnswerArr.push(Math.floor(num/coinsArr[i]) + remainder/7)
            } else if (remainder % 5 === 0) {
                AnswerArr.push(Math.floor(num/coinsArr[i]) + remainder/5)
            } else if (remainder % 1 === 0) {
                AnswerArr.push(Math.floor(num/coinsArr[i]) + remainder/1)
            }
        }
    }
    var AnswerArrSorted = AnswerArr.sort(function(a, b){return a-b})
    var Answer = AnswerArrSorted[0]
    console.log(Answer)
}

coinDeterminer(16)
coinDeterminer(25)