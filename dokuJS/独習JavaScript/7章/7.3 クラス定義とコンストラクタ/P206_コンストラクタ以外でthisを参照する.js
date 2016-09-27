var a = 'global'; //�@
// コンストラクタではない関数でthisを参照する
function func() { //�A
  // ネスト以外の関数では関数の外で定義された変数が参照される
  document.write('コンストラクタ以外の関数:' + this.a + '<br>');
}
func();
// オブジェクトに属している関数でthisを参照
var obj = {
  a : 'obj', //�B
  func : function() { //�C
    document.write('オブジェクトの関数:' + this.a + '<br>');
  }
};
obj.func();
