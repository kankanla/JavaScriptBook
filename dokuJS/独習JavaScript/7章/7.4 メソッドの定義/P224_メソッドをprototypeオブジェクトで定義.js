// ���b�Z�[�W�����Ǘ�����N���X
function MessageInfo(message) {
  this.message = message;
}
// prototype�I�u�W�F�N�g�ւ̃��\�b�h��`
MessageInfo.prototype.alertMessge = function() {
  alert(this.message);
};
// ���ʂ̊m�F
var msg1 = new MessageInfo('����ɂ���');
var msg2 = new MessageInfo('���悤�Ȃ�');
msg1.alertMessge();
msg2.alertMessge();
