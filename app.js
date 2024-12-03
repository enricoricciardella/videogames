const express = require("express");
const app = express();
const port = 3000;
const gamesRouters = require("./routers/videogames");
//Abbiamo creato/validato la prima rotta index
app.use("/videogames", gamesRouters);


app.get("/", (req, res) =>{
    res.json("Hello world");
});

//Mettere server in ascolto per chiamate API
app.listen(port, () =>{
    console.log("Server on");
});
