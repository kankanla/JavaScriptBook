// 円錐の体積を求める関数を定義と同時に呼び出す
// 引数はオブジェクトでradiusとheightをプロパティに定義する
function calcCone(obj) {
  // オブジェクトもしくはradiusが指定されていない場合はエラー
  if (obj == null || !obj.radius) { //�@
    throw new Error('引数にはradiusプロパティを持ったオブジェクトを指定してください');
  }
  // heightのデフォルト値は10
  if (!obj.height) {
    obj.height = 10;
  }
  var dimension = obj.radius * obj.radius * Math.PI;
  return dimension * obj.height / 3;
};
alert(calcCone({radius:10, height:10}));
