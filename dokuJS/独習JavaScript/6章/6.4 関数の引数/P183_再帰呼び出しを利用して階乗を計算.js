function factorial(n) {
  if (n < 0) {
    throw new Error('0�ȏ�̒l���w�肵�Ă�������');
  } else if (n == 0) {
    return 1;
  } else {
    return factorial(n - 1) * n; // n�̊K��= (n-1�̊K��) * n
  }
}
alert(factorial(5)); // 1 * 2 * 3 * 4 * 5
