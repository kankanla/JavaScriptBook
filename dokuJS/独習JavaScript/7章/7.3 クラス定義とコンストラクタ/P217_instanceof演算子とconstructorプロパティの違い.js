var error = new Error('エラー'); // Errorのインスタンス
var synErr = new SyntaxError('エラー'); // Errorを継承したSyntaxErrorのインスタンス

// instanceof演算子の比較結果を表示
document.write('instanceof ====================<br>');
document.write('err Error:' + (error instanceof Error) + '<br>');
// SyntaxErrorはErrorを継承しているのでconstructorとは違い'true'となる
document.write('synErr Error:' + (synErr instanceof Error) + '<br>');
document.write('err SynErr:' + (error instanceof SyntaxError) + '<br>');
document.write('synErr SynErr:' + (synErr instanceof SyntaxError) + '<br>');

// constructor演算子の比較結果を表示
document.write('constructor ====================<br>');
document.write('err Error:' + (error.constructor == Error) + '<br>');
// SyntaxErrorはErrorを継承しているがconstructorは異なるので'false'となる
document.write('synErr Error:' + (synErr.constructor == Error) + '<br>');
document.write('err SynErr:' + (error.constructor == SyntaxError) + '<br>');
document.write('synErr SynErr:' + (synErr.constructor == SyntaxError) + '<br>');