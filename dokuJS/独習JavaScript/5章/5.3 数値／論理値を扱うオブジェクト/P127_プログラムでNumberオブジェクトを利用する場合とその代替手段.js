// ラッパーオブジェクトを利用して数値を文字列に変換する
var num = new Number(5);
var s = num.toString();
alert(typeof s + ' : ' + s);
// 長さ0の文字列を加算することで数値を文字列に変換する
var s2 = 5 + "";
alert(typeof s2 + ' : ' + s2);
