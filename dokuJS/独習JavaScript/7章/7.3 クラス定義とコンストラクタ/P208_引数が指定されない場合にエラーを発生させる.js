// メッセージ情報を管理するクラス
function MessageInfo(message) {
  if (message == undefined) {
    throw new Error('missing parameter \'message\'.'); // エラーとする
  }
  this.message = message;
}

// 結果の確認
var msg1 = new MessageInfo();
