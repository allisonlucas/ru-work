var usernameHeaderDiv = document.querySelectorAll('.small-header')[0];
var username = document.querySelector('.small-header p');

username.addEventListener("click", function(){
    usernameHeaderDiv.innerHTML = '<input id="newUser" type="text" placeholder = "Username" style="border:none"/>';
    document.getElementById("newUser").focus();
});

usernameHeaderDiv.addEventListener("blur", function(){
    var newUsername = document.getElementById("newUser").value
    usernameHeaderDiv.innerHTML = newUsername
    alert(usernameHeaderDiv.innerHTML)
}, true)

var firstNameDiv = document.querySelectorAll('.first-name')[0];
var firstName = document.querySelector('.first-name p');

firstName.addEventListener("click", function(){
    firstNameDiv.innerHTML = '<input id="newFirst" type="text" placeholder = "First name" style="border:none"/>';
    document.getElementById("newFirst").focus();
});

firstNameDiv.addEventListener("blur", function(){
    var newFirstName = document.getElementById("newFirst").value
    firstNameDiv.innerHTML = newFirstName
    alert(firstNameDiv.innerHTML)
}, true)

var lastNameDiv = document.querySelectorAll('.last-name')[0];
var lastName = document.querySelector('.last-name p');

lastName.addEventListener("click", function(){
    lastNameDiv.innerHTML = '<input id="newLast" type="text" placeholder = "Last name" style="border:none"/>';
    document.getElementById("newLast").focus();
});

lastNameDiv.addEventListener("blur", function(){
    var newLastName = document.getElementById("newLast").value
    lastNameDiv.innerHTML = newLastName
    alert(lastNameDiv.innerHTML)
}, true)

var cityDiv = document.querySelectorAll('.city')[0];
var city = document.querySelector('.city p');

city.addEventListener("click", function(){
    cityDiv.innerHTML = '<input id="newCity" type="text" placeholder = "Current city" style="border:none"/>';
    document.getElementById("newCity").focus();
});

cityDiv.addEventListener("blur", function(){
    var newCity = document.getElementById("newCity").value
    cityDiv.innerHTML = newCity
    alert(cityDiv.innerHTML)
}, true)

var jobTitleDiv = document.querySelectorAll('.job-title')[0];
var jobTitle = document.querySelector('.job-title p');

jobTitle.addEventListener("click", function(){
    jobTitleDiv.innerHTML = '<input id="newJob" type="text" placeholder = "Job title" style="border:none"/>';
    document.getElementById("newJob").focus();
});

jobTitleDiv.addEventListener("blur", function(){
    var newJobTitle = document.getElementById("newJob").value
    jobTitleDiv.innerHTML = newJobTitle
    alert(jobTitleDiv.innerHTML)
}, true)

var companyDiv = document.querySelectorAll('.company')[0];
var company = document.querySelector('.company p');

company.addEventListener("click", function(){
    companyDiv.innerHTML = '<input id="newCompany" type="text" placeholder = "Company" style="border:none"/>';
    document.getElementById("newCompany").focus();
});

companyDiv.addEventListener("blur", function(){
    var newCompany = document.getElementById("newCompany").value
    companyDiv.innerHTML = newCompany
    alert(companyDiv.innerHTML)
}, true)