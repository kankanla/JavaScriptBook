// 円錐の体積を求める関数を定義と同時に呼び出す(変更例)
var dimension = function(radius, height) {
  var dimension = radius * radius * Math.PI;
  return dimension * height / 3;
};
alert(dimension);
