// ���b�Z�[�W�����Ǘ�����N���X
function MessageInfo(message) {
  if (message == undefined) {
    throw new Error('missing parameter \'message\'.'); // �G���[�Ƃ���
  }
  this.message = message;
}

// ���ʂ̊m�F
var msg1 = new MessageInfo();
