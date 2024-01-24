// An example of doing it without arrow function
const getOdd = function (value) {
  if (value % 2 == 0)
    return null;
  else
    return value;
}

let numList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(numList);
// Pass a function to multiply all elements by 10
let newNumList = numList.map(num => num *= 10);
console.log(newNumList);

console.log(numList);
// Pass a function to null all even numbers
newNumList = numList.map(getOdd);
console.log(newNumList);

let nameList = ['jim', 'jane', 'bob', 'jean'];
console.log(nameList);
// Pass a function to make all strings uppercase
let newNameList = nameList.map(indexVal => indexVal.toUpperCase());
console.log(newNameList);

function sum(val) {
  return total+val
}

// If the array isn't modified, then use forEach
let total = 0;
// Sum all values in the array
numList.forEach(indexVal => total += indexVal);
console.log(`Sum of array values is: ${total}`);