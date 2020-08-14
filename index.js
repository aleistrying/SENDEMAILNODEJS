const express = require('express');
const app = express();
var path = require('path');
const port = 3000;

//view engine. aka ejs
app.set('views', path.join(__dirname, 'views'));

app.set('view engine', 'ejs');

//set public folder
app.use(express.static('./public/'));
app.use(express.static(__dirname+'/node_modules/bootstrap/dist/css/'));
app.use(express.static(__dirname+'/node_modules/bootstrap/dist/js/'));

//renders pages when asked
app.get('/', (req, res) => {
    res.render('pages/home');
})


//listens to requests by user
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});