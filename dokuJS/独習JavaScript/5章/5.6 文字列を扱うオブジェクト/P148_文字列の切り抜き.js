var target = 'a09a10a11a12';

// substr()メソッドを使って切り抜き
var result1 = target.substr(3, 6);
document.write('substrは開始文字、文字列長: ' + result1 + '<br>');

// substring()メソッドを使って切り抜き
var result2 = target.substring(3, 6);
document.write('substringは開始文字、終了文字: ' + result2 + '<br>');

// slice()メソッドを使って切り抜き
var result3 = target.slice(3, 6);
document.write('sliceも開始文字、終了文字: ' + result3 + '<br>');
