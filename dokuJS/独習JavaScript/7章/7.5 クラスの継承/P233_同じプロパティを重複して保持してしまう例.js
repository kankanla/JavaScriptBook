// ���b�Z�[�W�����Ǘ�����N���X
function MessageInfo(message) {
  if (message == undefined) {
    message = '���w��';
  }
  this.message = message;
}
MessageInfo.prototype.alertMessage= function() {
  alert(this.message);
};

// MessageInfo���p�������G���[���b�Z�[�W���Ǘ�����N���X
function ErrorMessageInfo(message, errorLevel) {
  this.errorLevel = errorLevel;
  MessageInfo.apply(this, [message]);
}
ErrorMessageInfo.prototype = new MessageInfo(); // �v���g�^�C�v�`�F�[����ݒ�

// ���ʂ̊m�F
var eMsg1 = new ErrorMessageInfo('�G���[�ł�', 'error');
alert('eMsg1��message�v���p�e�B:' + eMsg1.message);
alert('prototype�I�u�W�F�N�g�̃v���p�e�B:' + eMsg1.__proto__.message);
