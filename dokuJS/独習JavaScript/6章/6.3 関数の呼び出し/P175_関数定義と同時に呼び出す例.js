// ‰~‚Ì‘ÌÏ‚ğ‹‚ß‚éŠÖ”‚ğ’è‹`‚Æ“¯‚ÉŒÄ‚Ño‚·
var dimension = function(radius, height) {
  var dimension = radius * radius * Math.PI;
  return dimension * height / 3;
}(10, 20);
alert(dimension);
