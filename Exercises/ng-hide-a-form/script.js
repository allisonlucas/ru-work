angular.module('myCtrl', [])
    .controller('formCtrl', formCtrl)

function formCtrl() {
    var fCtrl = this;
    
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