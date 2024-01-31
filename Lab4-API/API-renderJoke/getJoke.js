// If this fails, we need to deal with it. Just take m out of random to illustrate or m off com
// Error caught in lower function could be dealt with as it's trapped but it will
// cause an error in the calling function. Rethrow (in other languages) just throw in JavaScript
async function getJoke() {
  let url = 'https://official-joke-api.appspot.com/jokes/random'
  try {
    let response = await fetch(url) // fetch returns a promise
    if (!response.ok) throw new Error(response.status)
    let jsonObj = await response.json() // json returns a promise
    return jsonObj
  } catch (error) {
    throw(error) // throw to caller to report the real cause of the error at the upper level
  }
}

async function renderJoke() {
  try {
    let joke = await getJoke() // Take await out and see what happens. Show joke pending
    let jokeSetup = document.getElementById("jokeSetup")
    let jokePunchline = document.getElementById("jokePunchline")

    jokeSetup.innerText = joke.setup

    // Wait 3 seconds before delivering the punchline
    setTimeout(() => { jokePunchline.innerText = joke.punchline; }, 3000) // Add breakpoint on jokePunchline to show callback execute
  } catch (error) {
    // We have access to user here so better that getJoke throws the error here
    document.getElementById("error").innerText = error.stack
  }
}

// Just to show the main program continues during async operations
renderJoke()
document.getElementById("jokeSetup").innerText = "Waiting for setup"
document.getElementById("jokePunchline").innerText = "Waiting for punchline"

