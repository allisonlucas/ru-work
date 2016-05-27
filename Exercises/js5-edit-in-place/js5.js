var usernameHeaderDiv = document.querySelectorAll('.small-header')[0];
var username = document.querySelector('.small-header p');

username.addEventListener("click", function(){
    username.style = "display: none";
    var newUserDiv = document.createElement('div');
    newUserDiv.innerHTML = '<input type="text" onblur="if(value=="") value = "Username" onfocus="if(value=="Username") value = """/>';
    usernameHeaderDiv.appendChild(newUserDiv);
});

var firstNameDiv = document.querySelectorAll('.first-name')[0];
var firstName = document.querySelector('.first-name p');

firstName.addEventListener("click", function(){
    // firstName.style = "visibility: hidden";
    firstName.style = "display: none";
    var newFirstDiv = document.createElement('div');
    newFirstDiv.innerHTML = '<input type="text" onblur="if(value=="") value = "First name" onfocus="if(value=="First name") value = """/>';
    firstNameDiv.appendChild(newFirstDiv);
});

var lastNameDiv = document.querySelectorAll('.last-name')[0];
var lastName = document.querySelector('.last-name p');

lastName.addEventListener("click", function(){
    // firstName.style = "visibility: hidden";
    lastName.style = "display: none";
    var newLastDiv = document.createElement('div');
    newLastDiv.innerHTML = '<input type="text" onblur="if(value=="") value = "Last name" onfocus="if(value=="Last name") value = """/>';
    lastNameDiv.appendChild(newLastDiv);
});




