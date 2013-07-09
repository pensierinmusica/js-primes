/**
 * Prime Tester
 * 
 * A JavaScript function that checks if a given number is prime.
 * 
 * The MIT License (MIT)
 * Copyright (c) Alessandro Zanardi
 * 
 */

var primeTester = function(n) {
  // Validate input
  if (isNaN(n) || n < 1 || Math.floor(n) != n) {
    return 'The input number must be a positive integer, please enter a correct value';
  }
  if (n === 2) {
    return true;
  }
  if (n % 2 === 0) {
    return false;
  }
  // Check if number is prime
  for (var i = 3, limit = Math.sqrt(n); i <= limit; i+=2) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};