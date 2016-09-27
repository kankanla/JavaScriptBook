var obj = {}; // プロパティを持たないオブジェクトを生成
document.write('プロパティ代入前:' + obj.prop + '<br>');
obj.prop = 1; // プロパティに値を代入→自動的にプロパティが定義される
document.write('プロパティ代入後:' + obj.prop + '<br>');
