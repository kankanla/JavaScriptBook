// ユーザ情報を管理するクラス
function UserInfo(userId) {
  if (userId == undefined) {
    userId = 'U00000'; // 初期値を与える
  }
  this.userId = userId;
}

// 結果の確認
var usr1 = new UserInfo();
alert(usr1.userId);
