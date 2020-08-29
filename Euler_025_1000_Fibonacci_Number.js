function digitFibonacci(n) {
    let fib = [1,1];
    for (let i = 2; i < n; i++) {
      fib[i] = fib[i-1] + fib[i-2];
    }
    return fib[n-1];
}

digitFibonacci(20);
