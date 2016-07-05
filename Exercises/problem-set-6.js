// Write a function secondGreatLow that takes a single array of numbers and returns the second lowest and second greatest numbers, respectively, separated by a space. For example: if the array contains [7, 7, 12, 98, 106] the output should be "12 98". The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers!

function secondGreatLow (numArr) {
  var orderedArr = numArr.sort(function(a, b){return a-b})
  console.log(orderedArr)
  if (orderedArr.length > 3) {
    console.log(orderedArr[1], orderedArr[orderedArr.length - 2])
  } else if (orderedArr.length === 3) {
    console.log(orderedArr[1], orderedArr[1])
  } else if (orderedArr.length === 2) {
    console.log(orderedArr[1], orderedArr[0])
  }
}

secondGreatLow([7, 106, 12, 7, 98])
secondGreatLow([9, 20, 60, 11])
secondGreatLow([99, 3])
secondGreatLow([22, 63, 49])

// Write a function timeConvert that takes a number parameter and returns the number of hours and minutes the parameter converts to (ie. if num = 63 then the output should be 1:3). Separate the number of hours and minutes with a colon.

function timeConvert (num) {
  var hours = Math.floor(num / 60)
  var minutes = num % 60
  console.log(hours + ':' + minutes)
}

timeConvert(63)
timeConvert(75)
timeConvert(126)
timeConvert(119)
timeConvert(59)
timeConvert(1)

// Write a function bracketMatcher that takes a single string parameter and returns true if the brackets are correctly matched and each one is accounted for. Otherwise return false. For example: if str is "(hello (world))", then the output should be true, but if str is "((hello (world))" the the output should be false because the brackets do not correctly match up. "(()())" should return true. Only "(" and ")" will be used as brackets. If str contains no brackets return true.

function bracketMatcher (str) {
  var leftBracketArr = str.match(/\(/g)
  var rightBracketArr = str.match(/\)/g)
  if (leftBracketArr === null && rightBracketArr === null) {
    console.log(true)
  } else if (leftBracketArr.length === rightBracketArr.length) {
    console.log(true)
  } else {
    console.log(false)
  }
}

bracketMatcher("(hello (world))")
bracketMatcher("((hello (world))")
bracketMatcher("Hello")
bracketMatcher("(()())")
