// 引数の値を変更する関数
function sample(b, n, s, o) {
  b = false;
  n = 100;
  s = '上書き';
  o.a = '変更';
  o.b = 100;
}
// 初期値を設定
var b1 = true;
var n1 = -1;
var s1 = '初期値';
var o1 = {a:'未変更',b:-1};
document.write('関数呼び出し前-------------<br>');
document.write('b:' + b1 + ' n:' + n1 + ' s:' + s1 + ' o:(' + o1.a + ',' + o1.b + ')<br>');

// 関数を呼び出し
sample(b1, n1, s1, o1);
document.write('関数呼び出し後-------------<br>');
document.write('b:' + b1 + ' n:' + n1 + ' s:' + s1 +' o:(' + o1.a + ',' + o1.b + ')<br>');
