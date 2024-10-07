// Illustrates path parameter, query parameter and response codes

const express = require('express')
const app = express()
const results = require('./results.json') // Include some data to emulate a database 
const PORT=3000

// Basic get
app.get("/", (req, res) => {
  res.send("We have an API!")
});


app.get("/results", (req, res) => { 
  res.send(results)
})

// Simulate reading a database but using an array of objects
// get some data from an object file based on the query string: ?lName=
// Call with: /results/name?lName=whatever
app.get("/results/name", (req, res) => {
  let lName = req.query.lName
  if (lName == undefined) return res.sendStatus(404) // Not found

  // filter creates a new array that satisfies the filter on each element
  let person = results.filter(element => element.lName === lName) 
  if (person.length == 0) return res.sendStatus(404) // not found
  else
    res.send(person)
});


// Call using: /results/id/3 (or whatever)
app.get("/results/id/:id", (req, res) => {
  let id = Number(req.params.id) // Use param instead of query string
  if (isNaN(id))
    return res.sendStatus(400) // bad request

  let score = results.filter(element => element.id === id)
  if (score.length == 0) return res.sendStatus(404); // not found
  else
    res.send(score)
})



app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

