function closureOuter() {
  var i = 0;
  function f() {
    i++;
    return i;
  };
  return f;
}
var closure = closureOuter();
document.write('1‰ñ–Ú:' + closure() + '<br>');
document.write('2‰ñ–Ú:' + closure() + '<br>');
