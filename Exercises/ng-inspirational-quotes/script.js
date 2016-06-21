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
    
    qCtrl.formArr = [
        {
            quote: "Quote 1",
            author: "Author 1"
        },
        
        {
            quote: "Quote 2",
            author: "Author 2"    
        },
        
        {
            quote: "Quote 3",
            author: "Author 3"
        },
        
        {
            quote: "Quote 4",
            author: "Author 4"
        },
        
        {
            quote: "Quote 5",
            author: "Author 5"
        }
        ]
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
    
    qCtrl.delete = function(index) {
        qCtrl.formArr.splice(index, 1)
    }
    
    // CREATE STAR RATING OBJ ARRAY
    
    qCtrl.starArray = [
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Stj%C3%A4rna.svg/2000px-Stj%C3%A4rna.svg.png",
            rating:
        },
        {
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Stj%C3%A4rna.svg/2000px-Stj%C3%A4rna.svg.png",
            rating:
        },
        {
            image:
        }
        ]
    
    qCtrl.rate = function() {
        
    }
}