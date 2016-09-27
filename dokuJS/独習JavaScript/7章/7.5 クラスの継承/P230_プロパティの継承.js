// メッセージ情報を管理するクラス（スーパークラス）
function MessageInfo(message) {
  this.message = message;
}

// MesasgeInfoを継承したエラーメッセージを管理するクラス（サブクラス）
function ErrorMessageInfo(message, errorLevel) {
  this.errorLevel = errorLevel;
  MessageInfo.apply(this, [message]); // スーパークラスのコンストラクタを呼び出す
}

// 結果の確認
var eMsg1 = new ErrorMessageInfo('エラーです', 'error');
alert(eMsg1.message);
