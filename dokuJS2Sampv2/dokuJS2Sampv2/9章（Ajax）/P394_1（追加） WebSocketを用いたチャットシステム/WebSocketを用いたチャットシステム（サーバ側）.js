var ws = require('websocket.io'); // websocket.io���W���[�����g��
var server = ws.listen(1337, function() {
    console.log('Server running at http://127.0.0.1:1337/');
  });
server.on("connection", function(client) {
  client.on("message", function(message) {
    var obj = JSON.parse(message); // JSON�`���ɕϊ����đ��M���ꂽ���b�Z�[�W�����ɖ߂�
    console.log("received message is '" + obj.text +"' by '" + obj.author + "'"); // �R���\�[���ɕ\��
    server.clients.forEach(function(client) {
      client.send(obj.author + " > " + obj.text); // ���ׂẴN���C�A���g�ɑ��M����i������͕�����Łj
    });
  });
});