var check = 'aaaabbbbA025cccc';
var reg = new RegExp('[0-9]{2}'); // ���l2����T��
if (reg.test(check)) {
  alert(check + '�ɂ͐��l2�����܂܂�Ă��܂�');
} else {
  alert(check + '�ɂ͐��l2�����܂܂�Ă��܂���');
}
