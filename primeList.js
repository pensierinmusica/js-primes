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

  // Find primes and eliminate their multiples
  var len = list.length;
  for (i = 0, limit = Math.sqrt(len); i <= limit; i++) {
    if (list[i]) {
      for (var pos = i + list[i]; pos < len; pos += list[i]) {
        list[pos] = 0;
      }
    }
  }

  for (i = 0; i <= len; i++) {
    list[i] && result.push(list[i]);
  }

  // Trim result from given start and return
  if (start !== 2) {
    for (i = 0; i <= len; i++) {
      if (result[i] >= start) {
        return result.slice(i);
      }
    }
  }

  return result;
};