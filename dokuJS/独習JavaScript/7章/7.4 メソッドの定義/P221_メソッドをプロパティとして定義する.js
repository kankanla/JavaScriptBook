// ���b�Z�[�W�����Ǘ�����N���X
function MessageInfo(message) {
  this.message = message;
  this.alertMessage = function() {
    alert(this.message);
  };
}
// ���ʂ��m�F
var msg1 = new MessageInfo('����ɂ���');
msg1.alertMessage();
