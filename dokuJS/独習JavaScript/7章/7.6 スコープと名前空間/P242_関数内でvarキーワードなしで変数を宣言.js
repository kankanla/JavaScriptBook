var global= 1;
function func1() {
  funcVar = 2; // varを付けずに定義する
  alert('global:' + global); // グローバル変数はどこからでも参照できる
}
func1();
alert('funcVar:' + funcVar); // 関数内で定義した変数でも参照できる
