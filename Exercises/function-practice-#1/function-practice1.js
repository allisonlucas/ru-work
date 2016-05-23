
// #1. tripleFive

    // Write a function called 'tripleFive' which loops three times using a for loop. Each iteration of the loop, output 'Five!' using console.log.
    // tripleFive() 
    // Five! Five! Five!

// function tripleFive() {
//     for (i=1; i<=3; i++)
//     console.log('Five!')
// }

// tripleFive()

// #2. lastLetter

    // Write a function called 'lastLetter' which takes a single string argument and returns the last character in the string.
    // lastLetter('hello') should return 'o'
    // lastLetter('island') should return 'd'

// function lastLetter(last) {
//     var strLength = last.length
//     console.log(last[strLength - 1])
// }

// lastLetter('grasshopper')
// lastLetter('hello')
// lastLetter('island')

// #3. Square

    // Write a function called 'square' which takes a single argument which is a number, and returns number * number.
    // square(3) should return 9
    // square(5) should return 25

// function square(num) {
//     console.log(num*num)
// }

// square(3)
// square(5)

// #4. Negate

    // Write a function called 'negate' which takes a single number argument and returns the negative of that number.
    // negate(5) should return -5
    // negate(-8) should return 8

// function negate(num) {
//     console.log(-num)
// }

// negate(5)
// negate(-8)

// #5. toArray

    // Write a function called 'toArray' which takes three arguments and returns an array with each of those arguments as items.
    // toArray(1, 4, 5) should return [1, 4, 5]
    // toArray(8, 9, 10) should return [8, 9, 10]

// function toArray() {
//     console.log(Array.from(arguments))
// }

// toArray(1, 4, 5)
// toArray(8, 9, 10)

// #6. startsWithA

    // Write a function called 'startsWithA' which takes a single string argument and returns true if the given string's first letter is 'A' and false otherwise.
    // startsWithA('aardvark') should return true
    // startsWithA('bear') should return false

// function startsWithA(argA) {
//     if (argA[0] === 'a') {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }

// startsWithA('aardvark')
// startsWithA('bear')

// #7. excite

    // Write a function called 'excite' which takes a single string argument and returns the given string plus three exclamation marks.
    // excite('yes') should return 'yes!!!'
    // excite('go') should return 'go!!!'

// function excite(exclam) {
//     console.log(exclam + '!!!')
// }

// excite('yes')
// excite('go')

// #8. sun

    // Write a function called 'sun' which takes a single string argument and returns true if the string contains the word 'sun' within it. You may use the indexOf method that is built-in to strings, or you can do it manually with a for loop.
    // sun('sundries') should return true
    // sun('asunder') should return true
    // sun('catapult') should return false

// function sun(contains) {
//     if (contains.indexOf("sun") >= 0) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }

// sun('sundries')
// sun('asunder')
// sun('catapult')

// #9. tiny

    // Write a function called 'tiny' which takes a single number argument and returns true if the number is between 0 and 1.
    // tiny(0.3) should return true
    // tiny(14) should return false
    // tiny(-5) should return false

// function tiny(num) {
//     if (num > 0 && num < 1) {
//         console.log(true)
//     } else {
//         console.log(false)
//     }
// }

// tiny(0.3)
// tiny(14)
// tiny(-5)

// #10. getSeconds

    // Write a function called 'getSeconds' which takes a single string argument in the format 'MM:SS' (minutes, and seconds) and returns the total number of seconds represented by that timespan.
    // getSeconds('01:30') should return 90
    // getSeconds('10:25') should return 625

// function getSeconds(time) {
//     var sec = time.split(':')
//     var timeSec1 = parseInt(sec[0])
//     var timeSec2 = parseInt(sec[1])
//     console.log(timeSec1 * 60 + timeSec2)
// }

// getSeconds('01:30')
// getSeconds('10:25')