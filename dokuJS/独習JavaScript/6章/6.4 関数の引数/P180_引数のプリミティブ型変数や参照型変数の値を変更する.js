// �����̒l��ύX����֐�
function sample(b, n, s, o) {
  b = false;
  n = 100;
  s = '�㏑��';
  o.a = '�ύX';
  o.b = 100;
}
// �����l��ݒ�
var b1 = true;
var n1 = -1;
var s1 = '�����l';
var o1 = {a:'���ύX',b:-1};
document.write('�֐��Ăяo���O-------------<br>');
document.write('b:' + b1 + ' n:' + n1 + ' s:' + s1 + ' o:(' + o1.a + ',' + o1.b + ')<br>');

// �֐����Ăяo��
sample(b1, n1, s1, o1);
document.write('�֐��Ăяo����-------------<br>');
document.write('b:' + b1 + ' n:' + n1 + ' s:' + s1 +' o:(' + o1.a + ',' + o1.b + ')<br>');
