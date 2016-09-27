// 空白を連想配列に変換する関数
function parseCookie(){
  var cookies = {};
  // セミコロン（;）で分割
  var dim = document.cookie.split(';');
  for(var i=0;i<dim.length;i++){
    if(dim[i].length > 0){
      // キーと値をイコール（=）で分割
      var keyValue = dim[i].split('=');
      // キーと値の前後の空白を除去し、値をデコードする
      cookies[trim(keyValue[0])] = decodeURIComponent(trim(keyValue[1]));
    }
  }
  return cookies;
}

// 文字列の前後の空白を削除する関数
function trim(value){
  return value.replace(/^\s*|\s*$/, '');
}
