var a = 5; // グローバル変数を定義
// グローバル変数aを参照する（オブジェクトの指定は省略されている）
alert(a);

// 上記コードは以下のコードと等価
// 変数aは実はグローバルオブジェクトwindowのaプロパティ
alert(window.a); // '5'
