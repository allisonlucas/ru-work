// Requirements
// For each problem below, write a loop that prints the given output. Assume a global array called animals is defined as follows:

// var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot'];
// For example:
// Problem:

// rat
// cat
// butterfly
// marmot
// ocelot
// Solution:

// for(var i=0; i<animals.length; i++) {
//  console.log(animals[i]);
// }

var animals = ['rat', 'cat', 'butterfly', 'marmot', 'ocelot']

// rat cat butterfly marmot

animals.splice(-1)
console.log(animals)

// rat butterfly ocelot

animals.splice(1, 1)
animals.splice(2, 1)
console.log(animals)

// ocelot marmot butterfly cat rat

animals.reverse()
console.log(animals)

// rat cat cat butterfly butterfly marmot marmot ocelot

var newAnimals = animals.slice(1,4)
animals.splice(1,0,newAnimals[0])
animals.splice(3,0,newAnimals[1])
animals.splice(5,0,newAnimals[2])
console.log(animals)