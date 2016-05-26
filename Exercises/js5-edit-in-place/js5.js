var profileHeaderDiv = document.querySelectorAll('.small-header')[0];
var username = document.querySelector('.small-header p');

username.addEventListener("click", function(){
    username.style = "display: none";
    var newUserDiv = document.createElement('div');
    newUserDiv.innerHTML = '<input type="text" onblur="if(value=="") value = "Username" onfocus="if(value=="Username") value = """/>';
    profileHeaderDiv.appendChild(newUserDiv);
    // if(h3Div.length > 0) {   
    //     h3Div.document.appendChild('username')
    //     alert(h3Div)
    // }
});

// var username = document.getElementById('username');

// if (username.length > 0) {
//     var newh2 = document.querySelector('h2')[0];
    
// }


