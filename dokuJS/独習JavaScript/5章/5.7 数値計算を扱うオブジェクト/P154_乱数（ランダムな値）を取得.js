// random()メソッドで0.0以上1.0未満のランダムな値を取得する
var rdm = Math.random();
document.write('random : ' + rdm + '<br>');
// ランダム値を整数に変換する
for (var i = 1; i <= 10; i++) {
  // 0〜9のランダムな整数に変換する
  var rdm2 = Math.floor(Math.random() * 10); // 10を乗算し0〜9の乱数に変換
  document.write(i + '回目　: ' + rdm2 + '<br>');
}
