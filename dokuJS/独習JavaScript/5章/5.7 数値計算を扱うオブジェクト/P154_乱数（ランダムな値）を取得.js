// random()���\�b�h��0.0�ȏ�1.0�����̃����_���Ȓl���擾����
var rdm = Math.random();
document.write('random : ' + rdm + '<br>');
// �����_���l�𐮐��ɕϊ�����
for (var i = 1; i <= 10; i++) {
  // 0�`9�̃����_���Ȑ����ɕϊ�����
  var rdm2 = Math.floor(Math.random() * 10); // 10����Z��0�`9�̗����ɕϊ�
  document.write(i + '��ځ@: ' + rdm2 + '<br>');
}
