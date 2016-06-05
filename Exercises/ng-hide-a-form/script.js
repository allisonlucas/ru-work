angular.module('myCtrl', [])
    .controller('formCtrl', formCtrl)

function formCtrl() {
    var fCtrl = this;
    
    fCtrl.formArr = []
    // console.log(formArr)
    fCtrl.text = ''
    fCtrl.submit = function() {
        if (fCtrl.text) {
          fCtrl.formArr.push(fCtrl.text);
          console.log(fCtrl.formArr)
          fCtrl.text = '';
        }
      };
}