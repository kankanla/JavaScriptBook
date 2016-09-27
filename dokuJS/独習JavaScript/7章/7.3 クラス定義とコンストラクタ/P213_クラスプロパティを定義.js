// メッセージ情報を管理するクラス
function MessageInfo(message, priority) {
  this.message = message;
  this.priority = priority;
}
MessageInfo.PRIORITY_LOW = 'low'; // クラスプロパティの定義
MessageInfo.PRIORITY_HIGH = 'high'; // クラスプロパティの定義

// 結果の確認
var msg1 = new MessageInfo('こんにちは', MessageInfo.PRIORITY_LOW);
alert(msg1.priority);
