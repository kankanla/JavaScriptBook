// メッセージ情報を管理するクラス
function MessageInfo(message, priority) {
  this.message = message;
  this.priority = priority;
}
MessageInfo.PRIORITY_LOW = 'low'; // クラスプロパティ（定数）の定義
MessageInfo.PRIORITY_HIGH = 'high'; // クラスプロパティ（定数）の定義
MessageInfo.getErrorLevelNubmer = function(level) { // クラスメソッドの定義
  if (level == MessageInfo.PRIORITY_LOW) {
    return 1; // lowの場合は1
  }
  if (level == MessageInfo. PRIORITY_HIGH) {
    return 5; // highの場合は5
  }
  return 0; // 該当しない場合は0を返す
};
// クラスメソッドの呼び出し
var priority = MessageInfo.getErrorLevelNubmer(MessageInfo.PRIORITY_HIGH);
alert(priority);
