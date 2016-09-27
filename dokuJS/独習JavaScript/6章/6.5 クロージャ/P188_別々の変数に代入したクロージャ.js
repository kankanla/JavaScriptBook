function closureOuter() {
  var i = 0;
  return function() {
    i++;
    return i;
  };
}
var closure = closureOuter();
document.write('1-1‰ñ–Ú:' + closure() + '<br>'); // "1"‚ª•\Ž¦‚³‚ê‚é
document.write('1-2‰ñ–Ú:' + closure() + '<br>'); // "2"‚ª•\Ž¦‚³‚ê‚é
var closure2 = closureOuter();
document.write('2-1‰ñ–Ú:' + closure2() + '<br>'); // "3"‚Å‚Í‚È‚­"1"‚ª•\Ž¦‚³‚ê‚é
