var ws = require('websocket.io'); // websocket.ioモジュールを使う
var server = ws.listen(1337, function() {
    console.log('Server running at http://127.0.0.1:1337/');
  });
server.on("connection", function(client) {
  client.on("message", function(message) {
    var obj = JSON.parse(message); // JSON形式に変換して送信されたメッセージを元に戻す
    console.log("received message is '" + obj.text +"' by '" + obj.author + "'"); // コンソールに表示
    server.clients.forEach(function(client) {
      client.send(obj.author + " > " + obj.text); // すべてのクライアントに送信する（こちらは文字列で）
    });
  });
});