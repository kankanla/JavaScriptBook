// ���b�Z�[�W�����Ǘ�����N���X
function MessageInfo(message, priority) {
  this.message = message;
  this.priority = priority;
}
MessageInfo.PRIORITY_LOW = 'low'; // �N���X�v���p�e�B�̒�`
MessageInfo.PRIORITY_HIGH = 'high'; // �N���X�v���p�e�B�̒�`

// ���ʂ̊m�F
var msg1 = new MessageInfo('����ɂ���', MessageInfo.PRIORITY_LOW);
alert(msg1.priority);
