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

if (calcCone(100, 50) >= 50) {
  alert('���i�ł�');
}
