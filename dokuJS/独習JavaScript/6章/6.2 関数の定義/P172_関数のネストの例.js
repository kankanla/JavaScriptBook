// 円錐の体積を求める関数
function calcCone(radius, height) {
  var dimension = calcCircle(radius); // 関数の内部で定義した関数を呼び出す�@
  // 底面の面積を求める関数
  function calcCircle(r) {
    var circle = r * r * Math.PI; //�A
    return circle;
  }
  // 体積= 1/3 * 底面積* 高さ
  return dimension * height / 3;
}
alert(calcCone(10, 10));
