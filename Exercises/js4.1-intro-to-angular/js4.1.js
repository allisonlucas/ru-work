angular.module('button', [])
    .controller('buttonClick', buttonClick)
    .controller('listReveal', listReveal)
    .controller('turnPink', turnPink)
        
// function buttonClick() {
//     var btn = this;
//     btn.buttonClick2 = function() {
//         alert('buttonclick2');
//     }
// }

// buttonClick.prototype.buttonClick = function(){
//     alert("Hello from the controller");
// }

function buttonClick() {
    var btnClick = this
    btnClick.show = false
    btnClick.myfunc = function(){
        btnClick.show = !btnClick.show
    }
}

function listReveal() {
    var lstRvl = this
    lstRvl.show = false
    lstRvl.myfunc = function(){
        lstRvl.show = !lstRvl.show
    }
}

function turnPink() {
    
    var trnPnk = this
    
    trnPnk.myfunc1 = function(event){
        event.target.style.color = 'pink'
    }
    
    trnPnk.myfunc2 = function(event){
        event.target.style.color = 'pink'
    }
    
    trnPnk.myfunc3 = function(event){
        event.target.style.color = 'pink'
    }
    
    trnPnk.onLeave1 = function(event){
        event.target.style.color = 'black'
    }
    
    trnPnk.onLeave2 = function(event){
        event.target.style.color = 'black'
    }
    
    trnPnk.onLeave3 = function(event){
        event.target.style.color = 'black'
    }
}

