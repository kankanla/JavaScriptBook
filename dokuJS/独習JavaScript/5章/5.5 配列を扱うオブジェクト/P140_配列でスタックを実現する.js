var ary1 = new Array('aa', 'bb', 'cc');
// push()で配列の末尾に要素を追加
ary1.push('dd'); // 配列の末尾に'dd'を追加
document.write(ary1 + '<br>'); // 'aa,bb,cc,dd'になる
// pop()で配列の末尾から要素を取得
var pop1 = ary1.pop();
document.write(pop1 + '<br>'); // 'dd'が取り出される
var pop2 = ary1.pop();
document.write(pop2 + '<br>'); // 'cc'が取り出される
// もう一度push()で配列の末尾に要素を追加
ary1.push('ee'); // 配列の末尾に'ee'を追加
document.write(ary1 + '<br>'); // 'aa,bb,ee'になる
