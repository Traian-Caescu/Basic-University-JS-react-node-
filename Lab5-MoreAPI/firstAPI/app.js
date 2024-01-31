const express = require('express') 
const app = express() 

// It looks like the router jumps into the .get function but it doesn't
// The get function simply registers the callback. The debugger jumps in here
// as the executable code is in here as source code so is misleading
app.get('/books', (req, res) => {
    // more stuff); 
    res.send('Book ordered. How easy was that?')
})

app.get('/', (req, res) => {
  // more stuff); 
  res.send('Tell me what to get!')
})

app.get('/time', (req, res) => {
  let today = new Date();
  let time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
  res.send(time);
});

// This approach demonstrates the path much better but is not the
// Typical way to write is as you have to think of a name for every 
// handler rather than using an anonymous function. None of this code
// is executed on the first pass
function beerFn(req, res) {
  console.log(req.query) // Pass in any query string to see it parsed here
  res.send('Party time!')
}

app.get('/beer', beerFn)


app.listen(3000, () => console.log('Listening on port 3000'));