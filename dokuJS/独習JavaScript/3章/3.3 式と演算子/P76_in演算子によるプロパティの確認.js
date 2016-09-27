var coord = {x:0, y:0, z:0};
var result1 = 'x' in coord;
var result2 = 'a' in coord;
var result3 = 'toString' in coord;
alert(result1 + '\n' + result2 + '\n' + result3);
