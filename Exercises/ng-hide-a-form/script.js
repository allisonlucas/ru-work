angular.module('myCtrl', [])
    .controller('formCtrl', formCtrl)

function formCtrl() {
    var fCtrl = this;
    
    fCtrl.button = 'Show form'
    fCtrl.show = false
    fCtrl.showFunc = function() {
        fCtrl.show = !fCtrl.show
        if (fCtrl.show === false) {
            fCtrl.button = 'Show form'
        } else {
            fCtrl.button = 'Hide form'
        }
    }
    
    fCtrl.formArr = []
    fCtrl.name = ''
    fCtrl.bio = ''
    fCtrl.books = ''
    fCtrl.libraries = ''
    
    fCtrl.submit = function() {
        fCtrl.formArr.push(fCtrl.name, fCtrl.bio, fCtrl.books, fCtrl.libraries)
        fCtrl.name = ''
        fCtrl.bio = ''
        fCtrl.books = ''
        fCtrl.libraries = ''
    };
}