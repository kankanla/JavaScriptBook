// parseInt()関数でさまざまな値を変換する
var res1 = parseInt('5') + parseInt('3'); // 5 + 3='8' // ①
document.write('type：' + typeof res1 + '<br>'); // 'number'
document.write('result：' + res1 + '<br>'); // '8'
document.write('parseInt(16進)：' + parseInt('0x10', '0x') + '<br>'); // ②
document.write('parseInt(A)：' + parseInt('A') + '<br>'); // ③
document.write('parseInt(123abc)：' + parseInt('123abc') + '<br>'); // ④
