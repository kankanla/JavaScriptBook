var target = 'a09a10a11a12';

// ������������Ɏw�肵������
var result1 = target.search('a1'); // 'a1'������
document.write('����: ' + result1 + '<br>');

// ���K�\���𗘗p�����C�ӂ̐����̌���
var result2 = target.search(/[0-9]/);
document.write('���K�\���Ō���: ' + result2 + '<br>');
