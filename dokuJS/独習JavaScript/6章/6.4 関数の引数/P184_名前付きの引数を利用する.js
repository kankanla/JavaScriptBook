// �~���̑̐ς����߂�֐����`�Ɠ����ɌĂяo��
// �����̓I�u�W�F�N�g��radius��height���v���p�e�B�ɒ�`����
function calcCone(obj) {
  // �I�u�W�F�N�g��������radius���w�肳��Ă��Ȃ��ꍇ�̓G���[
  if (obj == null || !obj.radius) { //�@
    throw new Error('�����ɂ�radius�v���p�e�B���������I�u�W�F�N�g���w�肵�Ă�������');
  }
  // height�̃f�t�H���g�l��10
  if (!obj.height) {
    obj.height = 10;
  }
  var dimension = obj.radius * obj.radius * Math.PI;
  return dimension * obj.height / 3;
};
alert(calcCone({radius:10, height:10}));
