var target = 'a09a10a11a12';

// 文字列を引数に指定した検索
var result1 = target.search('a1'); // 'a1'を検索
document.write('検索: ' + result1 + '<br>');

// 正規表現を利用した任意の数字の検索
var result2 = target.search(/[0-9]/);
document.write('正規表現で検索: ' + result2 + '<br>');
