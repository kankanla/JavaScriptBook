var ws = require('websocket.io'); // websocket.io���W���[�����g��
var server = ws.listen(1337, function() {
    console.log('Server running at http://127.0.0.1:1337/');
  });
server.on("connection", function(client) {
  client.on("message", function(message) {
    console.log("received message is '" + message + "'"); // �R���\�[���ɕ\��
  });
});