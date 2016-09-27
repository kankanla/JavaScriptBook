function sample(o) {
  o = {a:'変更'}; // オブジェクトの参照を変更
}
var o1 = {a:'初期値'};
sample(o1);
alert(o1.a);
