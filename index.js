const express = require('express') // IMPORT express
const app = express() // create an instance of the import.
const port = 3000 // variable to store the port to listen on

// Display HTML to localhost
app.get('/', (req, res) => res.sendFile(__dirname + "/index.html")) 

app.listen(port, () => console.log(`Example app listening on port ${port}!`)) // make app listen on the port.