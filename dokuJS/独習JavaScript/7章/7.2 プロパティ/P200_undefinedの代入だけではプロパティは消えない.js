var obj = {};
obj.prop = 1; // プロパティを定義
obj.prop = undefined; // deleteの代わりにundefinedを代入
document.write('obj.prop:' + obj.prop + '<br>'); // 'undefined'にはなる

for (var i in obj) {
  document.write('objのプロパティ:' + i + '<br>'); // objのプロパティを表示
}
