angular.module('myCtrl', [])
    .controller('quotesCtrl', quotesCtrl)
    
function quotesCtrl() {
    var qCtrl = this
    
    qCtrl.button = 'Enter quote'
    qCtrl.show = false
    qCtrl.showFunc = function() {
        qCtrl.show = !qCtrl.show
        if (qCtrl.show === false) {
            qCtrl.button = 'Enter quote'
        } else {
            qCtrl.button = 'Hide form'
        }
    }
    
    qCtrl.formArr = []
    qCtrl.quote = ''
    qCtrl.author = ''
    
    qCtrl.submit = function() {
        if (qCtrl.quote === '' || qCtrl.author === '') {
            alert('Please enter both a quote and an author.')
        } else {
            qCtrl.formArr.push({
            quote: qCtrl.quote,
            author: qCtrl.author
            })
            qCtrl.quote = ''
            qCtrl.author = ''
        }
    }
}