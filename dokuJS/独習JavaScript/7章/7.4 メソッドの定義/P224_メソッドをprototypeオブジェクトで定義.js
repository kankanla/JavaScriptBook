// メッセージ情報を管理するクラス
function MessageInfo(message) {
  this.message = message;
}
// prototypeオブジェクトへのメソッド定義
MessageInfo.prototype.alertMessge = function() {
  alert(this.message);
};
// 結果の確認
var msg1 = new MessageInfo('こんにちは');
var msg2 = new MessageInfo('さようなら');
msg1.alertMessge();
msg2.alertMessge();
