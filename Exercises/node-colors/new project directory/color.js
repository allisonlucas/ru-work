var http = require('http');
var requester = require("request")

requester.get(
  "https://cdn.rawgit.com/metaraine/swatch/74580660c9229541622bbf1fd4198618d9f677e5/webcolors.json",
  function(err, res, body){
    var obj = JSON.parse(body)
      var rgbFunc = function(argv2) {
        for (i=0; i<obj.length; i++) {
          if (obj[i].name.toLowerCase() == argv2.toLowerCase()) {
            console.log(obj[i].rgb.r + ' ' + obj[i].rgb.g + ' ' + obj[i].rgb.b)
          }
        }
      }
      rgbFunc(process.argv[2])
    }
)
