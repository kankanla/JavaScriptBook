// ���b�Z�[�W�����Ǘ�����N���X
function MessageInfo(message) {
  this.message = message;
}

// ���[�U�����Ǘ�����N���X
function UserInfo(userId) {
  this.userId = userId;
}

// �C���X�^���X�̐���
var msg1 = new MessageInfo('����ɂ���');
var usr1 = new UserInfo('U00001');

// instanceof���Z�q�̌��ʂ���ʏ�ɕ\��
document.write('msg1 MessageInfo : ' + (msg1 instanceof MessageInfo) + '<br>');
document.write('usr1 UserInfo : ' + (usr1 instanceof UserInfo) + '<br>');
document.write('usr1 MessageInfo : ' + (usr1 instanceof MessageInfo) + '<br>');
