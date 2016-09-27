a(); // エラーにならない
b(); // エラーになる
function a() { // 関数を関数定義で定義する
  alert('a');
}
var b = function() { // 関数を関数リテラルで定義する
  alert('b');
};
