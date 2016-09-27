// 円錐の体積を求める関数
function calcCone(radius, height) {
  // 底面の面積
  var dimension = radius * radius * Math.PI;
  // 体積= 1/3 * 底面積* 高さ
  return dimension * height / 3;
}

// 体積によりサイズを分類する関数
function getSize(dimension) {
  if (dimension >= 100) { // 100以上の場合はLサイズ
    return 'L';
  } else if (dimension >= 50) { // 50以上100未満の場合はMサイズ
    return 'M';
  } else { // 50未満の場合はSサイズ
    return 'S';
  }
}

var dimension = calcCone(3, 10);
var size = getSize(dimension);
if (size == 'L' || size == 'M') {
  alert('合格です:' + size);
} else {
  alert('不合格です');
}
