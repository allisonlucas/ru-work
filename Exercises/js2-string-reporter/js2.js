// Prompt!

var color = prompt('What is your favorite color?');

// Change the header

if (color != null) {
    var lowColor = color.toLowerCase();
    document.querySelector('h1').innerHTML =
    "Your favorite color is " + lowColor + "? Mine too!";
}

// Create paragraph 'You entered'

var p7 = document.createElement('p')

p7.id = "p7";
var alert1 = p7.innerHTML = "You entered: " + color + '.';

var body = document.querySelectorAll("body")[0];

body.appendChild(p7);

// Create paragraph 'Length'

var colorLen = color.length;

function senCase() {
    return color.charAt(0).toUpperCase() + color.substr(1).toLowerCase();
    }

var senColor = senCase(color);

var p8 = document.createElement('p')

p8.id = "p8";
var alert2 = p8.innerHTML = senColor + " is " + colorLen + " letters long.";

var body = document.querySelectorAll("body")[0];

body.appendChild(p8);

// Create paragraph 'third character'

var thirdChar = color.charAt(2);

var p2 = document.createElement('p')

p2.id = "p2";
var alert3 = p2.innerHTML = thirdChar + " is the third letter of " + color + '.';

var body = document.querySelectorAll("body")[0];

body.appendChild(p2);

// Create paragraph 'lowercase'

var p3 = document.createElement('p')

p3.id = "p3";
var alert4 = p3.innerHTML = "Lowercase: " + lowColor;
p3.style.color = color;

var body = document.querySelectorAll("body")[0];

body.appendChild(p3);

// Create paragraph 'uppercase'

var upColor = color.toUpperCase();
var p4 = document.createElement('p')

p4.id = "p4";
var alert5 = p4.innerHTML = "Uppercase: " + upColor;
p4.style.color = color;

var body = document.querySelectorAll("body")[0];

body.appendChild(p4);

// Create paragraph 'example sentence'

var p5 = document.createElement('p')

p5.id = "p5";
var alert6 = p5.innerHTML = "Example sentence: " + color + " is the best color in the world!";
p5.style.color = '#ffffff';
p5.style.backgroundColor = color;

var body = document.querySelectorAll("body")[0];

body.appendChild(p5);

// Create paragraph 'subword'

var subColor = color.substr(1,3);

var p6 = document.createElement('p')

p6.id = "p5";
var alert7 = p6.innerHTML = "Subword: " + subColor;

var body = document.querySelectorAll("body")[0];

body.appendChild(p6);

// Alert box!

alert(alert1 + " \n" + alert2 + " \n" + alert3 + " \n" + alert4 + " \n" + alert5 + " \n" + alert6 + " \n" + alert7);