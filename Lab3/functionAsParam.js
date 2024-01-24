// This function is a general iterator. It will traverse the array and do to each
// element, whatever the passed in function tells it to
function doEach(data, fn) {
  // Copy array to keep it local - objs are passed by refenrence
  let list = data.slice(); 

  for (let i = 0; i < list.length; i++) {
    list[i] = fn(list[i]);
  }
  return list;
}

function square(val) { 
  return val * val
}

let numList = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let result = doEach(numList, square)

// An example of doing it without arrow function
const getOdd = function (value) {
  if (value % 2 == 0)
    return null;
  else
    return value;
}



console.log(numList);



// Pass a function to multiply all elements by 10
// let newList = doEach(numList, num => num *= 10);
// console.log(newList);

// console.log(numList);
// Pass a function to null all even numbers
newList = doEach(numList, getOdd);
console.log(newList);


let nameList = ['jim', 'jane', 'bob', 'jean'];
console.log(nameList);
// Pass a function to make all strings uppercase
newList = doEach(nameList, name => name.toUpperCase());
console.log(newList);