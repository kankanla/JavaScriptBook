var obj = {};
obj.prop = 1; // �v���p�e�B���`
obj.prop = undefined; // delete�̑����undefined����
document.write('obj.prop:' + obj.prop + '<br>'); // 'undefined'�ɂ͂Ȃ�

for (var i in obj) {
  document.write('obj�̃v���p�e�B:' + i + '<br>'); // obj�̃v���p�e�B��\��
}
