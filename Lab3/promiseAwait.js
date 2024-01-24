// Using async, we can await an asyncronous operation then process what's been returned before returning from the 
// function so we don't need to clutter the main program with .then, .catch and .finally and don't need to 
// register callbacks. This enables us to write code that looks more like synchronous code so is probably 
// easier to understand and we can use the more familiar try catch finally construct.
// You can only use await in a function that is declared async. An async function will always return a promise no
// matter what you return. If you don't return a promise, it will wrap your return value in one
//
// The first line to execute here is fetch. It calls the async fetch function which will take a second to complete
// In try, the function execution is suspended until the getEven promise is resolved. i.e. when 
// the timer times out and the reject or resolve is called. No further code is executed, execution stops at await 
// and control passed back to main to console log then the app waits for a messsage on the queue.  
// Once the promise is resolved, whatever resolve or reject passed back through the parameter, is assigned
// to result so looks more familiar as the function appears to return a value as opposed to it being returned as 
// a .then parameter of a callback. 
// In this case it's just a string but it could be anything. Result is then output but this is where you can put your processing
// code, i.e. not just output result, so it looks more like a synchronous process
// The return of a silly message has been added to show that you can return something if you want but as it 
// is coming from an async function, it will be converted to a promise so you can use .then if you want to to access it
// The real fetch can now look like this:
//
// let response = await fetch('https://whatever.com/stuff'); // Payload written to response by resolve()
// let user = await response.json();                         // json data from payload written to user by resolve
// console.log(user.name)                                    // Access the returned object

async function fetch(url) {
    try {
        console.log(`Accessing API at ${url}.`); // Just pretending
        let result = await longFunction();       // Suspend this function until getEven promise is resolved or rejected. Wait while pending
        console.log(result);
        result = await longFunction();           // Call another async function.     
        console.log(result);
    } catch (error) {
        console.log(error); // rejected. Note: if await 1 rejects, await 2 will not be called so only use it for errors or take out of try
    } finally {
        console.log(`Do anything here that has to happen either way`);
    }

    return 'Just something so you can see that you can.'; // You can return something if you want to - it will be a promise
}

fetch('bank.com/customers/customer/id'); // Looks like a normal function call. 

// As a promise is returned, you can still use .then etc if that's useful
//fetch('bank.com/customers/customer/id').then(result => console.log(`Result returned from fetch: ${result}`));

console.log(`Other program stuff. This will happen before the promise completes.`);

// End of main




// **** Just simulates a long process ****
function longFunction() {
    let rand = 0;
    let getEven = new Promise((resolve, reject) => {

        // setTimeout also takes a callback function. Emulates a slow server call
        setTimeout(() => {
            rand = Math.floor(Math.random() * 10); // Generate 0 to 9
            if (rand % 2)
                reject(`Failed to return an even number. Got ${rand}.`);  // Optional arg. Promise now not pending
            else
                resolve(`Correctly returned an even number. Got ${rand}.`); // Optional arg. Promise now nort pending
        }, 1000);
    });
    return getEven; // Return the promise. This will be pending until resolved
}