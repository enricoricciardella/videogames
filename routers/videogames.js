//Creo le rotte della risorsa videogames
const express = require("express");
const router = express.Router();
//Importo lista da videogames.data tramite
const gamesList = require("../data/videogames");

//INDEX
router.get("/", (req, resp) => {
    resp.json({
        data: gamesList,
        count: gamesList.length
    });
});

//SHOW
router.get("/:id", (req, res) => {
    const gameId = req.params.id;
    res.json("leggiamo solo UN determinato dato " + gameId);
    //TESTARE SU POSTMAN CON /e un numero da controllare
});

//CREATE
router.post("/", (req, res) => {
    res.json("Creiamo un NUOVO elemento!");
});

//UPDATE - modifica TOTALE e sovrascrive tutto
router.put("/:id", (req, res) => {
    const gameId = req.params.id;
    res.json("Qui AGGIORNIAMO o modifichiamo i dati dell' elemento, e mandiamo tutti i dati " + gameId);
});


//MODIFY - modifica nel DETTAGLIO un elemento
router.patch("/:id", (req, res) => {
    const gameId = req.params.id;
    res.json("Qui modifichiamo gli specifici dati di uno specifico elemento " + gameId);
});


//DESTROY
router.delete("/:id", (req, res) => {
    const gameId = req.params.id;
    res.json("Eliminiamo l'elemento numero..." + gameId);
});

module.exports = router;
