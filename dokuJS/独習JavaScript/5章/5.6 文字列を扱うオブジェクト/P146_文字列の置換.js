var target = 'a09a10a11a12';

// 文字列を引数に指定して置換
var result1 = target.replace('a1', 'a2'); // 文字列で条件を指定
document.write('置換: ' + result1 + '<br>');
document.write('置換元: ' + target + '<br>'); // 元の文字列は変更されない：

// 正規表現を引数に指定して全置換
var result2 = target.replace(/a1/g, 'a2'); // 正規表現で条件を指定
document.write('gオプションで全置換可能: ' + result2 + '<br>');
