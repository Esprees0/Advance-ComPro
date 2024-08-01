function missingDigits(numStr){
    const allDigits = '0123456789';
  
    // Create an object to keep track of digits present in the input string
    const inputDigitMap = {};
    
    // Mark digits present in the input string
    for (let i = 0; i < numStr.length; i++) {
      inputDigitMap[numStr[i]] = true;
    }
    
    // Initialize an array to hold missing digits
    const missingDigits = [];
    
    // Find missing digits
    for (let j = 0; j < allDigits.length; j++) {
      const digit = allDigits[j];
      if (!inputDigitMap[digit]) {
        missingDigits.push(digit);
      }
    }
  
    if (missingDigits.length === 0) {
      return `${numStr} has no missing digits`;
    } else {
      return `${numStr} Missing Digit = ${missingDigits.join(', ')}`;
    }
  }
  
  module.exports = missingDigits;
  
  // Call the function with some test cases and log the results
  console.log(missingDigits("123456789")); // 123456789 Missing Digit = 0
  console.log(missingDigits("0123456789")); // 0123456789 has no missing digits
  console.log(missingDigits("13579")); // 13579 Missing Digit = 0, 2, 4, 6, 8
 