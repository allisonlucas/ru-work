module.exports = {
  luminosity: function(r, g, b) {
                return 0.2126*r + 0.7152*g + 0.0722*b
              },
  darken: function (r, g, b) {
            return (r - r*.2) + ' ' + (g - g*.2) + ' ' + (b - b*.2)
  }
}
