// ���O��Ԃ��`���āA�I�u�W�F�N�g���`����
var jp;
if (!jp) {
  jp = {}; // jp����`����Ă��Ȃ��ꍇ�ɋ�I�u�W�F�N�g�𐶐�����
}
if (!jp.teachYourself) {
  jp.teachYourself = {}; // jp.teachYourself����`����Ă��Ȃ��ꍇ�ɋ�I�u�W�F�N�g�𐶐�����
}
jp.teachYourself.MessageInfo = function(message) {
  this.message = message;
}

// ���O��Ԃɒ�`�����I�u�W�F�N�g�𐶐�
var msg1 = new jp.teachYourself.MessageInfo('����ɂ���');
// var msg2 = new MessageInfo('����ɂ���'); // ����͐����ł��Ȃ�
alert(msg1.message);
