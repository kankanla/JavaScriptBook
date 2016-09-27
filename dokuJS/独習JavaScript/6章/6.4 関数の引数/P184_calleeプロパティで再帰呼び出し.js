function factorial(n) {
  if (n < 0) {
    throw new Error('0以上の値を指定してください');
  } else if (n == 0) {
    return 1;
  } else {
    return arguments.callee(n - 1) * n; // nの階乗= (n-1の階乗) * n
  }
}
alert(factorial(5)); // 1 * 2 * 3 * 4 * 5 = 120
