var EnviaEmail = require('./js/EnviaEmail')
const express = require("express")
const app = express()
var path = require("path")// no se si ni es necesario usar esto.

const port = 3000

//Para tener las vistas de EJS
app.set("views", path.join(__dirname, "views"))

app.set("view engine", "ejs")

//set public folder
app.use(express.static("./public/"));
app.use(express.static(__dirname + "/node_modules/bootstrap/dist/css/"))
app.use(express.static(__dirname + "/node_modules/bootstrap/dist/js/"))

// Parse URL-encoded bodies (as sent by HTML forms)
    // use body parser to easy fetch post body
    app.use(express.urlencoded({ extended: false })) 

    // Parse JSON bodies (as sent by API clients)
    app.use(express.json())
    
// si es un get entonces que te envie al archivo
app.get("/sent", function (req, res) {
  //no  se si sirve con get para una pagina renderizada.
  res.render("pages/home")
});

//la ruta para completar el post y retorna el resultado
app.post("/sent", function (req, res) {
  EnviaEmail(req.body, res)
  //console.log(req)
  res.render("pages/home")
});

//renders pages when asked
app.get("/", (req, res) => {
  res.render("pages/home")
});

//listens to requests by user
app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});
