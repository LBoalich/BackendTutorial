const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://lkboalich:password255@song-db.rkflqk8.mongodb.net/?retryWrites=true&w=majority&appName=Song-DB", {useNewUrlParser: true});

module.exports = mongoose;