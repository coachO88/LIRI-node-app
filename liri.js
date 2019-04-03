var keys = require("./keys.js");
var axios = require("axios");

require("dotenv").config();

console.log(process.env.SPOTIFY_ID)
console.log(process.env.SPOTIFY_SECRET)

var spotifyID= process.env.SPOTIFY_ID;

var spotifySecret= process.env.SPOTIFY_SECRET;

// var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var value = process.argv[3];

console.log("Command: " + command)

if (command=="movie-this"){

    axios.get("http://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=trilogy").then(
  function(response) {
    // Then we print out the imdbRating
    console.log("Title of Movie: " + response.data.Title + "\nYear Movie Came Out: " + response.data.Year + "\nIMBD Rating of the Movie: " + response.data.imdbRating
    + "\nRotten Tomatoes Rating of the Movie: " + response.data.Ratings + "\nCountry Where the Movie Was Produced: " + response.data.Country +
    "\nLanguage of the Movie: " + response.data.Language + "\nPlot of the Movie: " + response.data.Plot + "\nActors in the Movie: " + response.data.Actors);
    }
    );
}