var express = require('express');
var router = express.Router();
const app = express() // Create an instance of the import
const port = 9000 // Variable to store the port to listen on
const path = require('path');


/* GET home page. */
app.set('views', "views");
app.set('view engine', 'ejs');
// Display HTML to port
app.use(express.static(path.join(__dirname, 'index')));

app.get('/', (req, res) => res.render('index', {}));

// Make app listen on the port
app.listen(port, () => console.log(`Example app listening on port ${port}!`)); 

//note, unlike POST, parameters are visible to a user in browser address bar in GET request.
router.get('/add/:firstNumber/and/:secondNumber', (req,res)=>{
    console.log(req.params.firstNumber + req.params.secondNumber);
    //Checkout console to see why parseInt is essential in this case.
    let firstNo = parseInt(req.params.firstNumber),
        secondNo = parseInt(req.params.secondNumber);
    res.json({"Addition" : firstNo + secondNo});
  });

module.exports = router;
