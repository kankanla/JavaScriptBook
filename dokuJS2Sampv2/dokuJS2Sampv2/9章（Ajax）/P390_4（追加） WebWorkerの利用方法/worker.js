addEventListener("message", function(e){ // �c �C
  // �񓯊��Ɏ��s����鏈��
  var count = e.data;
  var total = 0;
  for(var i=0; i < count; i++){
    total = total + i;
  }
  // �Ăяo�����Ƀ��b�Z�[�W�𑗐M
  postMessage(total);//�@�c �D
});
