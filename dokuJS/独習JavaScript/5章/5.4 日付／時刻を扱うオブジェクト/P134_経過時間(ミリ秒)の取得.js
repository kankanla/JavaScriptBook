var now = new Date(); // ���ݓ�����Date�I�u�W�F�N�g�𐶐�
var millis = now.getTime() - Date.parse('2008/01/01'); // 1/1����̌o�߃~���b���v�Z
var dates = millis / 1000 / 60 / 60 / 24; // �~���b����ɕϊ�
alert(dates + '��');
