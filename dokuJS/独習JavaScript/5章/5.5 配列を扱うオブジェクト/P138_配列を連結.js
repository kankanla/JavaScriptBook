var ary1 = new Array('aa', 'bb', 'cc');
var ary2 = new Array('dd', 'ee');
// concat()の結果を新しい配列に代入する
var ary3 = ary1.concat(ary2);
document.write(ary1.length + ' : ' + ary1 + '<br>'); // ary1は変化しない
document.write(ary3.length + ' : ' + ary3 + '<br>'); //2つの要素がつながっている
// concat()の結果を再代入して既存の配列を上書きする
ary1 = ary1.concat(ary2); // ①
document.write(ary1.length + ' : ' + ary1 + '<br>'); // ary1が変化した
