// メッセージ情報を管理するクラス
function MessageInfo(message) {
  this.message = message;
}
MessageInfo.prototype.alertMessage= function() {
  alert(this.message);
};

// MessageInfoを継承したエラーメッセージを管理するクラス
function ErrorMessageInfo(message, errorLevel) {
  this.errorLevel = errorLevel;
  MessageInfo.apply(this, [message]);
}
ErrorMessageInfo.prototype = new MessageInfo(); // プロトタイプチェーンを設定
ErrorMessageInfo.prototype.constructor = ErrorMessageInfo; // constructorプロパティをセット

// 結果の確認
var eMsg1 = new ErrorMessageInfo('エラーです', 'error');
document.write('eMsg1 ErrMsgInfo:' + (eMsg1.constructor == ErrorMessageInfo)+ '<br>');
document.write('eMsg1 MsgInfo:' + (eMsg1.constructor == MessageInfo) + '<br>');
