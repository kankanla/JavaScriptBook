var check = 'aaaabbbbA025cccc';
var reg = new RegExp('[0-9]{2}'); // 数値2桁を探す
if (reg.test(check)) {
  alert(check + 'には数値2桁が含まれています');
} else {
  alert(check + 'には数値2桁が含まれていません');
}
