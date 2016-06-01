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
        // Show bang
        trnPnk.bang1 = false
        trnPnk.bang1 = function(){
            trnPnk.bang = true
        }
    }
    
    trnPnk.myfunc2 = function(event){
        event.target.style.color = 'pink'
        // Show bang
        trnPnk.bang2 = false
        trnPnk.bang2 = function(){
            trnPnk.bang = true
        }
    }
    
    trnPnk.myfunc3 = function(event){
        event.target.style.color = 'pink'
        // Show bang
        trnPnk.bang3 = false
        trnPnk.bang3 = function(){
            trnPnk.bang = true
        }
    }
    
    trnPnk.onLeave1 = function(event){
        event.target.style.color = 'black'
        // Hide bang
        trnPnk.bang1 = false
    }
    
    trnPnk.onLeave2 = function(event){
        event.target.style.color = 'black'
        // Hide bang
        trnPnk.bang2 = false
    }
    
    trnPnk.onLeave3 = function(event){
        event.target.style.color = 'black'
        // Hide bang
        trnPnk.bang3 = false
    }
    
    // Click confirm
    trnPnk.clickConfirm = function(event){
        var val = confirm('Would you like to visit the Google site?')
        if (val == false) {
            event.preventDefault()
            // Remove link from the dom when user chooses cancel
            event.target.remove()
        }
    }
}


