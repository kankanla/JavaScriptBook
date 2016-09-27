// メッセージ情報を管理するクラス
function MessageInfo(message) {
  this.message = message;
  return {}; // 空のオブジェクトを返す
}

// 処理の実行
var msg1 = new MessageInfo('こんにちは'); // msg1には空のオブジェクトが格納されてしまう

alert(msg1.message);
