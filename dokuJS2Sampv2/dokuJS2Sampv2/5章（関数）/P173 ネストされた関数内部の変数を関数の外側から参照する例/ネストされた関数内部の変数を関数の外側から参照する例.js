// �~���̑̐ς����߂�֐�
function calcCone(radius, height) {
    // ��ʂ̖ʐς����߂�֐�
    function calcCircle(r) {
        var circle = r * r * Math.PI; // �l�X�g�֐����ŕϐ��ɃZ�b�g
        return circle;
    }
    var d = calcCircle(radius) * height / 3; // �֐��̓����Œ�`�����֐����Ăяo��
    alert(circle); // �l�X�g�֐����Œ�`���ꂽ�ϐ����Q�� �� �G���[�ɂȂ�
}
alert(calcCone(10, 10));
