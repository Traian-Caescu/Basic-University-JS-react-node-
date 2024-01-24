// Demo to show that despite callbacks being called first, they are deferred whilst
// other code runs even if the timeout is 0 and 1ms because the inline code runs faster
// So get used to code executing out of order when using callbacks
// Traditional function approach
function callback() {
  console.log(`Long operation Callback executing now`);
}

function longOperation() {
  setTimeout(callback, 2000);
}

// More moderen and popular to declare inline. Less readable to me but hey ho
function longerOperation() {
  setTimeout(() => console.log(`Longer operation callback executing now`), 5000);
}

console.log(`About to pass callback to a longer operation.`);
longerOperation();
console.log(`Back from call to a longer operation.`);

console.log(`About to pass callback to a long operation.`);
longOperation();
console.log(`Back from call to a long operation.`);

// Output
// About to pass callback to a longer operation. This is called first but executes last after 2 seconds
// Back from call to a longer operation. This is back from starting the timer but not the timer function
// About to pass callback to a long operation.  
// Back from call to a long operation.  This is back from starting the timer but not the timer function
// Long operation Callback executing now
// Longer operation callback executing now even though called first
