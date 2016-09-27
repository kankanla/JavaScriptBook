var now = new Date(); // 現在日時でDateオブジェクトを生成
var millis = now.getTime() - Date.parse('2008/01/01'); // 1/1からの経過ミリ秒を計算
var dates = millis / 1000 / 60 / 60 / 24; // ミリ秒を日に変換
alert(dates + '日');
