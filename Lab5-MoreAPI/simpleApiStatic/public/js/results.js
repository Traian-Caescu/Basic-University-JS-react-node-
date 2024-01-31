document.addEventListener('input', handleInputEvents)  // All input events
document.addEventListener('change', handleInputEvents) // All change events

// Build the API URI
async function getResult(searchTxt, searchType) {
  let APIendPoint = 'http://localhost:3000/results/'
  //let APIendPoint = 'http://20.68.198.91:3000/results/'

  switch (searchType) {
    case 'lName': APIendPoint += `student?lName=${searchTxt}`; break
    case 'id': APIendPoint += `student/${searchTxt}`; break
    case 'all': APIendPoint += searchType; break
  }

  try {
    const payload = await fetch(APIendPoint) // .ok if any 2xx status code returned
    if (!payload.ok) {
      return []
    } else {
      const results = await payload.json() // Response is good so process
      return results
    }
  } catch (err) {
    console.log(`Error: ${err}`)
  }
}

function renderResult(result) {
  let outputElem = document.getElementById("displayResult")
  if (result.length != 0) {    // Array not empty so something found
    outputElem.innerHTML = ''

    for (let i = 0; i < result.length; i++) {
      outputElem.innerHTML += `Student ID: ${result[i].id}, ${result[i].fName} ${result[i].lName}, scored ${result[i].result}<br>`
    }
  }
  else
    outputElem.innerHTML = `Not found`
}


// Input and change events processes so we get an output whe user chenges input - e.g. deletes a char
async function handleInputEvents(event) {
  let attrib = event.target.getAttribute('id') // Get the id
  switch (attrib) {
    case 'ddSearchType': document.getElementById("searchText").value = '' // Clear search if type is changed
    case 'searchText':
      const type = document.getElementById("ddSearchType").value

      try {
        renderResult(await getResult(event.target.value, type)); break
      } catch (err) {
        console.log(err)
      }
  }
}

