var d = new Date('2008/7/8 5:55'); // �����w���Date�I�u�W�F�N�g�𐶐�
// �����������\������
var timeString = d.toTimeString(); // �W���t�H�[�}�b�g
document.write('timeString : ' + timeString + '<br>');
var localeTimeString = d.toLocaleTimeString(); // ���n�t�H�[�}�b�g
document.write('localeTimeString : ' + localeTimeString + '<br>');
// �����������\������
var str = d.toString(); // �W���t�H�[�}�b�g
document.write('string : ' + str + '<br>');
var localeStr = d.toLocaleString(); // ���n�t�H�[�}�b�g
document.write('localeString : ' + localeStr + '<br>');
