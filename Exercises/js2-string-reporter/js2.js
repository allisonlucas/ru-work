var color = prompt('What is your favorite color?');

if (color != null) {
    var lowColor = color.toLowerCase();
    document.querySelector('h1').innerHTML =
    "Your favorite color is " + lowColor + "? Mine too!";
}

var colorLen = color.length;

function senCase() {
    return color.charAt(0).toUpperCase() + color.substr(1).toLowerCase();
    }

var senColor = senCase(color);

document.querySelector('p').innerHTML = senColor + " is " + colorLen + " letters long.";