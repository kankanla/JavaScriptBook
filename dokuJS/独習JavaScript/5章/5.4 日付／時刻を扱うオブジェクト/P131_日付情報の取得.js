var now = new Date(); // 現在の日付でDateオブジェクトを生成
// 年の情報を取得する
var currentYear = now.getFullYear(); // 年を4桁で取得
document.write('getFullYear : ' + currentYear + '<br>');
// 曜日の情報を取得する
var currentDoW = now.getDay(); // 曜日を0〜6で取得
var DAY_ARRAY = ['日', '月', '火', '水', '木', '金', '土'];
var currentDoWStr = DAY_ARRAY[currentDoW]; // 0〜6の曜日を文字列に変換
document.write('getDay : ' + currentDoWStr + '<br>');
