function closureOuter() {
  var i = 0;
  return function() {
    i++;
    return i;
  };
}
var closure = closureOuter();
document.write('1-1���:' + closure() + '<br>'); // "1"���\�������
document.write('1-2���:' + closure() + '<br>'); // "2"���\�������
var closure2 = closureOuter();
document.write('2-1���:' + closure2() + '<br>'); // "3"�ł͂Ȃ�"1"���\�������
