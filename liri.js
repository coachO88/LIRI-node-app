var keys = require("./keys.js");

require("dotenv").config();

console.log(process.env.SPOTIFY_ID)
console.log(process.env.SPOTIFY_SECRET)

var spotifyID= process.env.SPOTIFY_ID;

var spotifySecret= process.env.SPOTIFY_SECRET;

var spotify = new spotify(keys.spotify);

var command = process.argv[2];

console.log("Command: " + command)