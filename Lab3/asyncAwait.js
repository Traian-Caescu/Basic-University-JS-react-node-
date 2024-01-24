// Quite a lot of the time you will just use promise based functionality such as fetch. But it's not hard to write your own
// Sequence is: smallNum is declared so new Promise created. Part of creation is to call the callback immediately
// This is referred to as an executer as it is unusually executed immediately
// Resolve and Reject are typically used as parameters to the executer but they could be Bill and Bob. The first one is called 
// on success and the second on fail. In this example, success is a number less than 5. Whatever the resolve or reject pass
// as arguments, end up as parameters in .then or .catch respectively
// Once resolve or reject are called, the promise moves from a pending state into a fulfilled or rejected state
function getSmallNum() {
  let rand = new Promise((resolve, reject) => {

    setTimeout(() => {
      rand = Math.floor(Math.random() * 10); // Generate 0 to 9
      if (rand < 5)
        resolve(`${rand} is good`)
      else
        reject(`${rand} is too big`)
    }, 1000)
  })

  return rand
}

// Needs to be an async function to be able to wait. Call any function that returns a promise
// and just await. It won't carry on until the promise is satisfied but does not block the main thread
// Uses the more traditional try / cat
async function displayNum() {
  try {
    let num = await getSmallNum()
    console.log(num)
  } catch (err) {
    console.log(err)
  } finally {
    console.log('Do this anyway')
  }
}

displayNum()
console.log("Done")



