function closureOuter() {
  var i = 0;
  function f() {
    i++;
    return i;
  };
  return f;
}
var closure = closureOuter();
document.write('1���:' + closure() + '<br>');
document.write('2���:' + closure() + '<br>');
