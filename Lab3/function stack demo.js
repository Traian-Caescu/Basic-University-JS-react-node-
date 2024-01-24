//  setTimeout(()=>console.log(`In callbackDemo using arrow Fn. 1 second to execute`), 1000); // Using anonymous
// Demo to show that the callback is not executed until after the stack is cleared
// even with a zero delay
function level1() {
  console.log('In level1');
  level2();
  console.log('Leaving level1');
}

function level2() {
  console.log('In level2');
  level3();
  console.log('Leaving level2');
}

const callbackDemo = function () {
  console.log(`In callbackDemo using named function. 2 seconds to execute`);
}

function level3() {
  console.log('In level3');
  setTimeout(callbackDemo, 2000); // even if 0 it will be called after stacked functions
  console.log('Leaving level3');
}


level1();
let x=5;


