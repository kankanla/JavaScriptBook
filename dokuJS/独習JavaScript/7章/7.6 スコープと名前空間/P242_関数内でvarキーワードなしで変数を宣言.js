var global= 1;
function func1() {
  funcVar = 2; // var��t�����ɒ�`����
  alert('global:' + global); // �O���[�o���ϐ��͂ǂ�����ł��Q�Ƃł���
}
func1();
alert('funcVar:' + funcVar); // �֐����Œ�`�����ϐ��ł��Q�Ƃł���
