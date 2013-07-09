/**
 * Prime List
 * 
 * A JavaScript function that returns all the prime numbers within a given range.
 * 
 * The MIT License (MIT)
 * Copyright (c) Alessandro Zanardi
 * 
 */

 var primeList = function(start, end) {
  // Validate input and initialize storage for result
  if (isNaN(start) || start < 1 || Math.floor(start) != start) {
    return 'The starting number must be a positive integer, please enter a correct value';
  }
  if (isNaN(end) || end < 1 || Math.floor(end) != end) {
    return 'The ending number must be a positive integer, please enter a correct value';
  }
  if (end < start) {
    return 'The ending number must be a positive integer, greater or equal to the starting number';
  }

  if (end === 1) {
    return [1];
  }
  if (end === 2) {
    return [1,2];
  }

  var prime;
  var result = [];
  if (start === 1) {
    result.push(1);
    start++;
  }

  // Generate list
  var list = [];
  for (var i = 2; i <= end; i++) {
    list.push(i);
  }

  // Catch primes and eliminate multiples
  for (var i = 0, len = list.length; i <= len; i++) {
    if (list[i]) {
      prime = list[i];
      result.push(prime);
      for (var pos = i; pos < len; pos += prime) {
        list[pos] = 0;
      }
    }
  }

  // Trim result from given start and return
  if (start !== 2) {
    for (var i = 0, len = result.length; i <= len; i++) {
      if (result[i] >= start) {
        return result.slice(i);
      }
    }
  }

  return result;
};