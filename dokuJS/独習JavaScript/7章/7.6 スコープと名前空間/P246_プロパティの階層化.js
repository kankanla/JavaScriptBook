// ���b�Z�[�W�����Ǘ�����N���X
function MessageInfo(message) {
  this.message = message;
}

// ���[�U�����Ǘ�����N���X
function UserInfo(userId) {
  this.userId = userId;
  this.messageInfo = new MessageInfo(userId +'�̃��b�Z�[�W'); //�@
}

// �����̎��s
var usr1 = new UserInfo('U00001');
alert(usr1.messageInfo.message); // �l�X�g���ꂽ�v���p�e�B���Q�Ƃ���
