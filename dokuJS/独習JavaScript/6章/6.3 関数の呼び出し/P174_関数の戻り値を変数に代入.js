// �~���̑̐ς����߂�֐�
function calcCone(radius, height) {
  var dimension = calcCircle(radius); // �֐��̓����Œ�`�����֐����Ăяo��
  // ��ʂ̖ʐς����߂�֐�
  function calcCircle(r) {
    var circle = r * r * Math.PI;
    return circle;
  }
  // �̐�= 1/3 * ��ʐ�* ����
  return dimension * height / 3;
}

var dimension = calcCone(100, 50);
if (dimension >= 50) {
  alert('���i�ł�');
}
