function factorial(n) {
  if (n < 0) {
    throw new Error('0ˆÈã‚Ì’l‚ðŽw’è‚µ‚Ä‚­‚¾‚³‚¢');
  } else if (n == 0) {
    return 1;
  } else {
    return factorial(n - 1) * n; // n‚ÌŠKæ= (n-1‚ÌŠKæ) * n
  }
}
alert(factorial(5)); // 1 * 2 * 3 * 4 * 5
