var target = 'a09a10a11a12';

// ������������Ɏw�肵�Ēu��
var result1 = target.replace('a1', 'a2'); // ������ŏ������w��
document.write('�u��: ' + result1 + '<br>');
document.write('�u����: ' + target + '<br>'); // ���̕�����͕ύX����Ȃ��F

// ���K�\���������Ɏw�肵�đS�u��
var result2 = target.replace(/a1/g, 'a2'); // ���K�\���ŏ������w��
document.write('g�I�v�V�����őS�u���\: ' + result2 + '<br>');
