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
    firstName.style = "display: none";
    var newFirstDiv = document.createElement('div');
    newFirstDiv.innerHTML = '<input type="text" onblur="if(value=="") value = "First name" onfocus="if(value=="First name") value = """/>';
    firstNameDiv.appendChild(newFirstDiv);
});

var lastNameDiv = document.querySelectorAll('.last-name')[0];
var lastName = document.querySelector('.last-name p');

lastName.addEventListener("click", function(){
    lastName.style = "display: none";
    var newLastDiv = document.createElement('div');
    newLastDiv.innerHTML = '<input type="text" onblur="if(value=="") value = "Last name" onfocus="if(value=="Last name") value = """/>';
    lastNameDiv.appendChild(newLastDiv);
});

var cityDiv = document.querySelectorAll('.city')[0];
var city = document.querySelector('.city p');

city.addEventListener("click", function(){
    city.style = "display: none";
    var newCityDiv = document.createElement('div');
    newCityDiv.innerHTML = '<input type="text" onblur="if(value=="") value = "Current city" onfocus="if(value=="Current city") value = """/>';
    cityDiv.appendChild(newCityDiv);
});

var jobTitleDiv = document.querySelectorAll('.job-title')[0];
var jobTitle = document.querySelector('.job-title p');

jobTitle.addEventListener("click", function(){
    jobTitle.style = "display: none";
    var newJobDiv = document.createElement('div');
    newJobDiv.innerHTML = '<input type="text" onblur="if(value=="") value = "Job title" onfocus="if(value=="Job title") value = """/>';
    jobTitleDiv.appendChild(newJobDiv);
});

var companyDiv = document.querySelectorAll('.company')[0];
var company = document.querySelector('.company p');

company.addEventListener("click", function(){
    company.style = "display: none";
    var newCompanyDiv = document.createElement('div');
    newCompanyDiv.innerHTML = '<input type="text" onblur="if(value=="") value = "Company" onfocus="if(value=="Company") value = """/>';
    companyDiv.appendChild(newCompanyDiv);
});


