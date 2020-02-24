// Write a function that returns the product of 2 numbers
function product(x, y) {
  return x * y;
}

product(10, 7);

// Write a function that returns whether a given number is even
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
  //
}

// Return the largest of 2 numbers
function maxOfTwoNumbers(a, b) {
  switch (a > b) {
    case true:
      return a;
      break;
    case false:
      return b;
      break;
  }
}

maxOfTwoNumbers(7, 9);

// Return the largest of 3 numbers
function maxOfThreeNumbers(a, b, c) {
  if (a > b && a > c) {
    return a;
  } else if (b > a && b > c) {
    return b;
  } else (c > a && c > b); {
    return c;
  }
}
  //switch (a, b, c) {
  //  case (a > b && a > c):
  //    return a;
  //    break;
  //  case (b > a && b > c):
  //    return b;
  //    break;
  //  case (c > a && c > b):
  //    return c;
  //    break;
  //  default:

  //}
//}

// Calculate the sum of an array of numbers
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

sumArray([1,2,3,4,5]);

  // Return the largest number of a non-empty array
  function maxOfArray(numbers) {
      return Math.max.apply(null, numbers);
    }
  

  // Return the longest string in an array
  function longestString(strings) {
      if (strings.length === 1) {
        return strings[0];
      } else {
       return strings.sort(function(a, b) {return b.length - a.length})[0];
      }
  }

  // Return whether a word is in an array
  function doesWordExist(wordsArr, word) {
    if (wordsArr.includes(word)) {
      return true;
    } else {
      return false;
    }
  }

  // Finding the first non-duplicate (non-repeating) word in an array
  function findUnique(wordsArr) {
     } 
  // Get the fullName from the object { firstName: 'Tony', lastName: 'Stark'}
  let personObj = {
    firstName: 'Tony', 
    lastName: 'Stark'
  }
  
  function getFullName(personObj) {
    return `${personObj.firstName} ${personObj.lastName}`;
  }
 getFullName (personObj);


  // Return the largest number in a two dimensional array
  function maxTwoDimArray(matrix) {
    let flatArray = matrix.flat();
    for (let i=0; i<flatArray.length; i++) {
      return Math.max.apply(null, flatArray);
    }
  }