/*
Project Euler: Problem 14: Longest Collatz sequence
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)
Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under the given limit, produces the longest chain?

Note: Once the chain starts the terms are allowed to go above one million.
*/

function longestCollatzSequence(limit) {
  let max = 0;
  let maxIndex = 0;
  let tempLength = 0;
  for (let i = 1; i <= limit; i++) {
    tempLength = chainLength(i);
    // console.log("For: " + i + " Length: " + tempLength);
    if (max < tempLength) {
      max = tempLength;
      maxIndex = i;
    }
  }
  // console.log(max);
  return maxIndex;
}

function chainLength(n) {
  let i = 1;
  while (n != 1) {
    if(n % 2 == 0) {
      n = n/2;
    } else {
      n = 3*n + 1;
    }
    // console.log(n);
    i += 1;
  }
  // console.log(i);
  return i;
}

// chainLength(9);
console.log(longestCollatzSequence(14));
