var target = 'aA0aabbbbA025ccccA52A5'; // 検索対象の文字列

// RegExpオブジェクトの生成
var reg = new RegExp('(A[0-9]{2})|(aa)', 'g'); // 「A＋数値2桁」または「aa」を検索

// 検索結果がnullになるまでwhileループで検索を行なう
var result = reg.exec(target); // 1つ目を検索
while (result != null) {
  document.write(result.index + ' : ' +result[0] + '<br>'); // 見つかった位置と文字列
  document.write('- ' +result[1] + ' , ' + result[2] + '<br>'); // グループごとの結果
  result = reg.exec(target); // 次の検索
}
