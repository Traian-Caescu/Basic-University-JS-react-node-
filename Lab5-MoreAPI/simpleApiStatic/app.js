const express = require('express');
const app = express();
const PORT = 3000
const results = require('./data/results.json'); // Include some data to emulate a database
const path = require('path'); // Used for concatenation to create a path

// Point to static pages. Just use one if all files are in the same place but as code gets more complex, need to structure the folders
app.use(express.static(path.join(__dirname, '/public/html')));  // Client requests files relative to here - i.e. no path needed
app.use(express.static(path.join(__dirname, '/public/img')));   // e.g. in index.html, <img src="http://localhost:3000/xx.jpg"> 
app.use(express.static(path.join(__dirname, '/public/css')));
app.use(express.static(path.join(__dirname, '/public/js')));

// get some data from an object file based on the query string: /results/student?lName=whatever
app.get("/results/student/", (req, res) => {
  let score = [];
  let lName = req.query.lName;
  if (lName == undefined) return res.sendStatus(404); // not found

  score = results.filter(bill => bill.lName === lName);

  if (score.length == 0) return res.sendStatus(404); // not found
  else
    res.send(score)
});


// get some data from an object file based on the student ID param
// e.g. /results/student/5
app.get("/results/student/:id", (req, res) => {
  let score = [];
  let id = Number(req.params.id); // Use param instead of query string
  if (isNaN(id))
    return res.sendStatus(400); // bad request

  score = results.filter(element => element.id === id);
  if (score.length == 0) return res.sendStatus(404); // not found
  else
    res.send(score)
});

// Get all results
app.get("/results/all", (req, res) => {
  res.json(results);
});

// *****
// You can provide a catch-all to respond with your response rather 
// than node's standard response. However, it will find the page so
// return 200 so we need to override with 404
// Because these functions return an object, we can chain them
// get /* at end means everything. If valid, it would have already 
// been processed as this is at the end so if it makes it here then
// the route or page hasn't been found
app.get('/*', (req, res) => {
  res.status(404).sendFile(path.join(__dirname, '/public/html/404.html'));
})

// ****

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));

