var name = prompt("What is your name?")

if (name.length > 0 && name === name.toString) {
    alert("Hello " + name + '!')
} else {
    alert("Please enter your name!")
    prompt("What is your name?")
}