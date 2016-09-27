var obj = {};
obj.prop = 1; // プロパティを定義
document.write('プロパティ削除前:' + obj.prop + '<br>');
delete obj.prop; // プロパティを削除
document.write('プロパティ削除後:' + obj.prop + '<br>');
