function pow(x, n) {
  if (n > 0) {
    let result = 1;
    for (let i = 0; i < n; i++) {
      result *= x;
    }
    return result;
  } else {
    return "n must be positive";
  }
}
console.log(pow(-5, 2));
