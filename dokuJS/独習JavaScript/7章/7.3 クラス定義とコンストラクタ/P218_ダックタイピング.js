// �_�b�N�^�C�s���O��userId���`�F�b�N���AuserId�������userId��\������֐�
function alertUserId(obj) {
  if (obj.userId) { // �_�b�N�^�C�s���O
  // if (obj instanceof UserInfo) { // �_�b�N�^�C�s���O���g��Ȃ��ꍇ
    alert(obj.userId);
  }
}

// ���b�Z�[�W�����Ǘ�����N���X
function MessageInfo(message) {
  this.message = message;
  return 10; // ���l��Ԃ�
}

// ���[�U�����Ǘ�����N���X
function UserInfo(userId) {
  this.userId = userId;
}

// �C���X�^���X�̐���
var msg1 = new MessageInfo('����ɂ���');
var usr1 = new UserInfo('U00001');

// ���ʂ̊m�F
alertUserId(msg1); // �����N����Ȃ�
alertUserId(usr1); // 'U00001'���\�������
