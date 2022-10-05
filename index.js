// Copied from tutorial GitHub (https://github.com/ninadpchaudhari/React-Tutorial)

const express = require('express') // Import express
const app = express() // Create an instance of the import
const port = 9000 // Variable to store the port to listen on

// Display HTML to localhost
app.get('/', (req, res) => res.sendFile(__dirname + "/index.html")) 

// Make app listen on the port
app.listen(port, () => console.log(`Example app listening on port ${port}!`)) 