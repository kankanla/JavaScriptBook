// メッセージ情報を管理するクラス
function MessageInfo(message) {
  this.message = message;
}

// ユーザ情報を管理するクラス
function UserInfo(userId) {
  this.userId = userId;
  this.messageInfo = new MessageInfo(userId +'のメッセージ'); //①
}

// 処理の実行
var usr1 = new UserInfo('U00001');
alert(usr1.messageInfo.message); // ネストされたプロパティを参照する
