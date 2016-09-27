// メッセージ情報を管理するクラス
function MessageInfo(message) {
  this.message = message;
}

// ユーザ情報を管理するクラス
function UserInfo(userId) {
  this.userId = userId;
}

// インスタンスの生成
var msg1 = new MessageInfo('こんにちは');
var usr1 = new UserInfo('U00001');

// constructorプロパティの比較結果を画面上に表示
document.write('msg1 MessageInfo : ' + (msg1.constructor == MessageInfo)+ '<br>');
document.write('usr1 UserInfo : ' + (usr1.constructor == UserInfo) + '<br>');
document.write('msg1 UserInfo : ' + (msg1.constructor == UserInfo) + '<br>');
document.write('usr1 MessageInfo : ' + (usr1.constructor == MessageInfo)+ '<br>');
