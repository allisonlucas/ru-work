var usernameHeaderDiv = document.querySelectorAll('.small-header')[0];
var username = document.querySelector('.small-header p');

username.addEventListener("click", function(){
    username.style = "display: none";
    var newUserDiv = document.createElement('div');
    newUserDiv.id = "newUserDiv";
    newUserDiv.innerHTML = '<input id="newUser" type="text" placeholder = "Username" style="border:none"/>';
    usernameHeaderDiv.appendChild(newUserDiv);
    document.getElementById("newUser").focus();
    var newUserValue = document.getElementById("newUser").value;
    var getUserDiv = document.getElementById("newUserDiv");
    if(newUserValue.length > 0) {
        username.addEventListener("onblur", function() {
        username.replaceChild(newUserValue, username);
        username.style = "display: block";
        getUserDiv.style = "display: none";
        });
    }
});

var firstNameDiv = document.querySelectorAll('.first-name')[0];
var firstName = document.querySelector('.first-name p');

firstName.addEventListener("click", function(){
    firstName.style = "display: none";
    var newFirstDiv = document.createElement('div');
    newFirstDiv.id = "newFirstDiv";
    newFirstDiv.innerHTML = '<input id="newFirst" type="text" placeholder = "First name" style="border:none"/>';
    firstNameDiv.appendChild(newFirstDiv);
    document.getElementById("newFirst").focus();
});

var lastNameDiv = document.querySelectorAll('.last-name')[0];
var lastName = document.querySelector('.last-name p');

lastName.addEventListener("click", function(){
    lastName.style = "display: none";
    var newLastDiv = document.createElement('div');
    newLastDiv.id = "newLastDiv";
    newLastDiv.innerHTML = '<input id="newLast" type="text" placeholder = "Last name" style="border:none"/>';
    lastNameDiv.appendChild(newLastDiv);
    document.getElementById("newLast").focus();
    var newLastValue = document.getElementById("newLast").value;
    var getLastDiv = document.getElementById("newLastDiv");
    
    if(newLastValue.length > 0) {
        lastName.addEventListener("onblur", function() {
            lastName.replaceChild(newLastValue, lastName);
            lastName.style = "display: block";
            getLastDiv.style = "display: none";
        });
    }
});

var cityDiv = document.querySelectorAll('.city')[0];
var city = document.querySelector('.city p');

city.addEventListener("click", function(){
    city.style = "display: none";
    var newCityDiv = document.createElement('div');
    newCityDiv.id = "newCityDiv";
    newCityDiv.innerHTML = '<input id="newCity" type="text" placeholder = "Current city" style="border:none"/>';
    cityDiv.appendChild(newCityDiv);
    document.getElementById("newCity").focus();
    var cityValue = document.getElementById("newCity").value;
    var getCityDiv = document.getElementById("newCityDiv");
        if(cityValue.length > 0) {
        city.addEventListener("onblur", function() {
            city.replaceChild(cityValue, city);
            city.style = "display: block";
            getCityDiv.style = "display: none";
            });
        }
});

var jobTitleDiv = document.querySelectorAll('.job-title')[0];
var jobTitle = document.querySelector('.job-title p');

jobTitle.addEventListener("click", function(){
    jobTitle.style = "display: none";
    var newJobDiv = document.createElement('div');
    newJobDiv.id = "newJobDiv";
    newJobDiv.innerHTML = '<input id="newJob" type="text" placeholder = "Job title" style="border:none"/>';
    jobTitleDiv.appendChild(newJobDiv);
    document.getElementById("newJob").focus();
    var jobTitleValue = document.getElementById("newJob").value;
    var getJobTitleDiv = document.getElementById("newJobDiv");
        if(jobTitleValue.length > 0) {
        jobTitle.addEventListener("onblur", function() {
            jobTitle.replaceChild(jobTitleValue, jobTitle);
            jobTitle.style = "display: block";
            getJobTitleDiv.style = "display: none";
            });
        }
});

var companyDiv = document.querySelectorAll('.company')[0];
var company = document.querySelector('.company p');

company.addEventListener("click", function(){
    company.style = "display: none";
    var newCompanyDiv = document.createElement('div');
    newCompanyDiv.id = "newCompanyDiv";
    newCompanyDiv.innerHTML = '<input id="newCompany" type="text" placeholder = "Company" style="border:none"/>';
    companyDiv.appendChild(newCompanyDiv);
    document.getElementById("newCompany").focus();
    var companyValue = document.getElementById("newCompany").value;
    var getCompanyDiv = document.getElementById("newCompanyDiv");
    if(companyValue.length > 0) {
        company.addEventListener("onblur", function() {
        company.replaceChild(companyValue, company);
        company.style = "display: block";
        getCompanyDiv.style = "display: none";
        });
    }
});