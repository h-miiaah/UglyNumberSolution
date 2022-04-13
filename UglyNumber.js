/**
 * @param {number} n
 * @return {boolean}
 */
 var isUgly = function(n) {
    if (n < 1) return false;
    if (n === 1) return true;

    var divisor = [2, 3, 5];

    for (var i = 0; i < divisor.length; i++) {
        while (n && n % divisor[i] === 0) {
            n = Math.floor(n / divisor[i]);
          }
      }
      return n === 1;
  };
  
  /**
   * We start with a number n.
   * If n is less than 1, we return false.
   * If n is 1, we return true.
   * We create an array of 3 numbers: 2, 3, and 5.
   * We loop through the array of divisors.
   * We check if n is divisible by the current divisor.
   * 
   */