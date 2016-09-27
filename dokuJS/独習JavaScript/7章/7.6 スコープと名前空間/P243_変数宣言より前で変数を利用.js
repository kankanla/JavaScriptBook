function func1() {
  alert(a); // 変数定義より前で変数を利用する
}
var a = 4; // 変数定義
func1();
