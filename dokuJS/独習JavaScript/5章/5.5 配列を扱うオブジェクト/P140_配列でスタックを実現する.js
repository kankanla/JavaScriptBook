var ary1 = new Array('aa', 'bb', 'cc');
// push()�Ŕz��̖����ɗv�f��ǉ�
ary1.push('dd'); // �z��̖�����'dd'��ǉ�
document.write(ary1 + '<br>'); // 'aa,bb,cc,dd'�ɂȂ�
// pop()�Ŕz��̖�������v�f���擾
var pop1 = ary1.pop();
document.write(pop1 + '<br>'); // 'dd'�����o�����
var pop2 = ary1.pop();
document.write(pop2 + '<br>'); // 'cc'�����o�����
// ������xpush()�Ŕz��̖����ɗv�f��ǉ�
ary1.push('ee'); // �z��̖�����'ee'��ǉ�
document.write(ary1 + '<br>'); // 'aa,bb,ee'�ɂȂ�
