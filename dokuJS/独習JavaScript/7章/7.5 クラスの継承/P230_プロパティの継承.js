// ���b�Z�[�W�����Ǘ�����N���X�i�X�[�p�[�N���X�j
function MessageInfo(message) {
  this.message = message;
}

// MesasgeInfo���p�������G���[���b�Z�[�W���Ǘ�����N���X�i�T�u�N���X�j
function ErrorMessageInfo(message, errorLevel) {
  this.errorLevel = errorLevel;
  MessageInfo.apply(this, [message]); // �X�[�p�[�N���X�̃R���X�g���N�^���Ăяo��
}

// ���ʂ̊m�F
var eMsg1 = new ErrorMessageInfo('�G���[�ł�', 'error');
alert(eMsg1.message);
