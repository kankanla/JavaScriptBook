var i = 0;
while (i < 100) {
  i++;
  if (i % 2 == 0) {
    continue;
  }
  document.write(i, '<br/>');
}
