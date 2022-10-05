// Copied from tutorial GitHub (https://github.com/ninadpchaudhari/React-Tutorial)

const express = require('express') // Import express
const app = express() // Create an instance of the import
const port = 9000 // Variable to store the port to listen on
var path = require('path');


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// Display HTML to localhost
app.use(express.static(path.join(__dirname, 'index')));

app.get('/', (req, res) => res.render('index', {}));

// Make app listen on the port
app.listen(port, () => console.log(`Example app listening on port ${port}!`)); 