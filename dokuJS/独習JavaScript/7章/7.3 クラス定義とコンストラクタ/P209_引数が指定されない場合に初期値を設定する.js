// ���[�U�����Ǘ�����N���X
function UserInfo(userId) {
  if (userId == undefined) {
    userId = 'U00000'; // �����l��^����
  }
  this.userId = userId;
}

// ���ʂ̊m�F
var usr1 = new UserInfo();
alert(usr1.userId);
