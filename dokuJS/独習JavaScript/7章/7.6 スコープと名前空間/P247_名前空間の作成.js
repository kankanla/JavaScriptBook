// 名前空間を定義して、オブジェクトを定義する
var jp;
if (!jp) {
  jp = {}; // jpが定義されていない場合に空オブジェクトを生成する
}
if (!jp.teachYourself) {
  jp.teachYourself = {}; // jp.teachYourselfが定義されていない場合に空オブジェクトを生成する
}
jp.teachYourself.MessageInfo = function(message) {
  this.message = message;
}

// 名前空間に定義したオブジェクトを生成
var msg1 = new jp.teachYourself.MessageInfo('こんにちは');
// var msg2 = new MessageInfo('こんにちは'); // これは生成できない
alert(msg1.message);
