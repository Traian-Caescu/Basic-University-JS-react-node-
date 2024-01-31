// If an error occurs, we need to detect and handle it. Take m off random to create 404
// Take m off .com to create a catastrophic runtime error - app will crash without catch
// Add try catch
// With no try catch, the whole app is wrapped in one and reported unrevoverably in console
async function getJoke() {
  let url = 'https://official-joke-api.appspot.com/jokes/random'
  try {
    let response = await fetch(url) // Response 404 is not a runtime error
    console.log('Response object: ', response)
    if (!response.ok) throw new Error(response.status)
    let jsonObj = await response.json()
    console.log('JSON object: ', jsonObj)

    // Or outout to the web page
    document.getElementById("setup").innerText = jsonObj.setup
    document.getElementById("punchline").innerText = jsonObj.punchline

  } catch (error) {     // Ok to catch here as error will jump straight here over other code
    console.log(error)  // Could display a message: Site unavailable or url incorrect or whatever
    document.getElementById("setup").innerText = error.stack // Send back what you want
  }
}


getJoke()