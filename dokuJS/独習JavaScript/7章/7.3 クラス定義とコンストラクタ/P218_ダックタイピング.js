// ダックタイピングでuserIdをチェックし、userIdがあればuserIdを表示する関数
function alertUserId(obj) {
  if (obj.userId) { // ダックタイピング
  // if (obj instanceof UserInfo) { // ダックタイピングを使わない場合
    alert(obj.userId);
  }
}

// メッセージ情報を管理するクラス
function MessageInfo(message) {
  this.message = message;
  return 10; // 数値を返す
}

// ユーザ情報を管理するクラス
function UserInfo(userId) {
  this.userId = userId;
}

// インスタンスの生成
var msg1 = new MessageInfo('こんにちは');
var usr1 = new UserInfo('U00001');

// 結果の確認
alertUserId(msg1); // 何も起こらない
alertUserId(usr1); // 'U00001'が表示される
