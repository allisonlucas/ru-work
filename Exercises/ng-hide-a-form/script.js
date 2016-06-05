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
    
    fCtrl.changeName = function() {
        if (fCtrl.formArr.name !== null) {
            fCtrl.formArr.splice(0, 1, fCtrl.name)
        } else {
            fCtrl.formArr.push(fCtrl.name)
        }
    };
    
    console.log(fCtrl.formArr)
    
    fCtrl.changeBio = function() {
        if (fCtrl.formArr.bio !== null) {
            fCtrl.formArr.splice(1, 1, fCtrl.bio)
        } else {
            fCtrl.formArr.push(fCtrl.bio)
        }
    };
    
    fCtrl.changeBooks = function() {
        if (fCtrl.formArr.books !== null) {
            fCtrl.formArr.splice(2, 1, fCtrl.books)
        } else {
            fCtrl.formArr.push(fCtrl.books)
        }
    };

    fCtrl.changeLibraries = function() {
        if (fCtrl.formArr.libraries !== null) {
            fCtrl.formArr.splice(3, 1, fCtrl.libraries)
        } else {
            fCtrl.formArr.push(fCtrl.libraries)
        }
    };

}