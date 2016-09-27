var d = new Date('2008/07/08'); // Dateオブジェクトを生成
// 標準の日付フォーマットで日付を表示
var dateStr = d.toDateString();
document.write('dateString : ' + dateStr + '<br>');
// 現地日付のフォーマットで日付を表示
var localeDateStr = d.toLocaleDateString();
document.write('localeDateString : ' + localeDateStr);
