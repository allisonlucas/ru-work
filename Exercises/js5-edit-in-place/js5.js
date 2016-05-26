var usernameHeaderDiv = document.querySelectorAll('.small-header')[0];
var username = document.querySelector('.small-header p');

username.addEventListener("click", function(){
    username.style = "display: none";
    var newUserDiv = document.createElement('div');
    newUserDiv.innerHTML = '<input type="text" onblur="if(value=="") value = "Username" onfocus="if(value=="Username") value = """/>';
    usernameHeaderDiv.appendChild(newUserDiv);
});

var inlineDiv = document.querySelectorAll('.inline')[0];
var firstName = document.querySelector('.inline p');

firstName.addEventListener("click", function(){
    // firstName.style = "visibility: hidden";
    firstName.style = "display: none";
    var newFirstDiv = document.createElement('div');
    newFirstDiv.innerHTML = '<input type="text" onblur="if(value=="") value = "First name" onfocus="if(value=="First name") value = """/>';
    inlineDiv.appendChild(newFirstDiv);
});




