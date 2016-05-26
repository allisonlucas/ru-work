var profileHeaderDiv = document.querySelectorAll('.small-header')[0];
var h2 = document.querySelector('h2');

h2.addEventListener("click", function(){
    h2.style = "display: none";
    var h3Div = document.createElement('div');
    h3Div.id = "h3-div";
    h3Div.style = "font-size: 14; color: black; font-family: helvetica";
    h3Div.innerHTML = '<input type="text"/>';
    profileHeaderDiv.appendChild(h3Div);
});