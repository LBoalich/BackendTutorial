// setup.. this is similar to when we use our default tags in html
const express = require("express")
// we have to use cors in order to host a front end and backend on the same device
var cors = require("cors")
// activate or tell the app variable to be an express server

const bodyParser = require("body-parser")
const Song = require("./models/songs");
const app = express()
app.use(cors())

app.use(bodyParser.json());
const router = express.Router()

// making an api using routes
// Routes are used to handle browser requests.  The look like URLs.  The difference is that when a browser requests a route, it is dynamically handled by using a function

//Grab all the songs in a database
router.get("/songs", async (req, res) => {
    try {
        const songs = await Song.find({});
        res.send(songs);
        console.log(songs);
    } catch (err) {
        console.log(err);
    }

    /*
    let query = {};
    if (req.query.genre) {
        query = {genre : req.query.genre}
    }

    //to find all songs in a database you just use the find() method this is built into mongoose
    Song.find(query, function(err, songs) {
        if (err) {
            res.status(400).send(err);
        } else {
            res.json(songs);
        }
    })
    */
});

router.post("/songs", async (req, res) => {
    try {
        const song = new Song(req.body);
        await song.save();
        res.status(201).json(song);
        console.log(song);
    } catch (err) {
        res.status(400).send(err);
    }
})

// all requests that usually use an api start with /api.. so the url would be localhouse:3000/api/songs
app.use("/api", router)
app.listen(3000)