// 特殊文字をエンコードして比較する
document.write('encodeURI()とencodeURIComponent()の違い============<br>')
document.write('encodeURI：' + encodeURI(';:/@?&$#=+,') + '<br>');
document.write('encodeURIComponent：' + encodeURIComponent(';:/@?&$#=+,') + '<br>');
// 日本語の文字列を変換する
document.write('日本語の変換=======================================<br>');
document.write('encodeURI：' + encodeURI('日本') + '<br>'); //'日'=%E6%97%A5 '本'=%E6%9C%AC
document.write('encodeURIComponent：' + encodeURIComponent('日本') + '<br>');
// エンコードした文字列をデコードして復元する
document.write('decode============================================<br>');
document.write('decodeURI：' + decodeURI('%3B%3A%2F%40%3F%26%24%23%3D%2B%2C') + '<br>');
document.write('decodeURIComponent：' + decodeURIComponent('%3B%3A%2F%40%3F%26%24%23%3D%2B%2C') + '<br>');
document.write('decodeURI：' + decodeURI('%E6%97%A5%E6%9C%AC'));
