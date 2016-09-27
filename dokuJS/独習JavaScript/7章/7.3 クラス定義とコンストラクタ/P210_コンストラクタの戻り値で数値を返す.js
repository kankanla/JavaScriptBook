// メッセージ情報を管理するクラス
function MessageInfo(message) {
  this.message = message;
  return 10; // 数値を返す
}

// 処理の実行
var msg1 = new MessageInfo('こんにちは'); // msg1にはMessageInfoのインスタンスが生成される

alert(msg1.message);
