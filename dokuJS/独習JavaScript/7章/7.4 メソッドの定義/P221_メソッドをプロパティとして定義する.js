// メッセージ情報を管理するクラス
function MessageInfo(message) {
  this.message = message;
  this.alertMessage = function() {
    alert(this.message);
  };
}
// 結果を確認
var msg1 = new MessageInfo('こんにちは');
msg1.alertMessage();
