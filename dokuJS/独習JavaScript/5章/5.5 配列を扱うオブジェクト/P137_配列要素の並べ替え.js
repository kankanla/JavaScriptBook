var ary1 = new Array('bb', 'eeee', 'aaa', 'dddd', 'cc');
// 文字コード順でソートを行なう
var result1 = ary1.sort();
document.write('通常: ' + result1 + '<br>'); // 通常は文字列比較ルールで並べ替える
// 独自のルールでソートを行なう
var sortFunc = function(a, b) {
  return a.length - b.length; // aの文字列が短ければ負の値を返却
}; // 文字列長を優先する並べ替えを行なう関数リテラル
var result2 = ary1.sort(sortFunc);
document.write('長さ順: ' + result2 + '<br>');
