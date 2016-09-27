// メッセージ情報を管理するクラス
function MessageInfo(message) {
  if (message == undefined) {
    message = '未指定';
  }
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

// 結果の確認
var eMsg1 = new ErrorMessageInfo('エラーです', 'error');
alert('eMsg1のmessageプロパティ:' + eMsg1.message);
alert('prototypeオブジェクトのプロパティ:' + eMsg1.__proto__.message);
