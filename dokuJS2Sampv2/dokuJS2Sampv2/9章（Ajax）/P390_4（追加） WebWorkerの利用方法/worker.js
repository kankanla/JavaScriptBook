addEventListener("message", function(e){ // … ④
  // 非同期に実行される処理
  var count = e.data;
  var total = 0;
  for(var i=0; i < count; i++){
    total = total + i;
  }
  // 呼び出し元にメッセージを送信
  postMessage(total);//　… ⑤
});
