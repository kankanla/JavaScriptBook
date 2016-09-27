var d = new Date('2008/7/8 5:55'); // 日時指定でDateオブジェクトを生成
// 時刻文字列を表示する
var timeString = d.toTimeString(); // 標準フォーマット
document.write('timeString : ' + timeString + '<br>');
var localeTimeString = d.toLocaleTimeString(); // 現地フォーマット
document.write('localeTimeString : ' + localeTimeString + '<br>');
// 日時文字列を表示する
var str = d.toString(); // 標準フォーマット
document.write('string : ' + str + '<br>');
var localeStr = d.toLocaleString(); // 現地フォーマット
document.write('localeString : ' + localeStr + '<br>');
