require("dotenv").config()
var keys = require("./keys.js")
var axios = require("axios")
var Spotify = require("node-spotify-api")
var moment = require('moment')
var spotify = new Spotify(keys.spotify)
var fs = require('fs')
var command = process.argv[2];
var value = process.argv[3];

if (command=="movie-this"){

    axios.get("http://www.omdbapi.com/?t=" + value + "&y=&plot=short&apikey=trilogy").then(
  function(response) {
    
    console.log("Title of Movie: " + response.data.Title + "\nYear Movie Came Out: " + response.data.Year + "\nIMBD Rating of the Movie: " + response.data.imdbRating
    + "\nRotten Tomatoes Rating of the Movie: " + response.data.Ratings[0].Value + "\nCountry Where the Movie Was Produced: " + response.data.Country +
    "\nLanguage of the Movie: " + response.data.Language + "\nPlot of the Movie: " + response.data.Plot + "\nActors in the Movie: " + response.data.Actors);
    }
    );
}


if (command=="concert-this"){

  axios.get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp").then(
function(response) {
      console.log("Artist Name: " + response.data[0].lineup[0] + "\nName of the venue: " + response.data[0].venue.name
                  + "\nVenue location: " + response.data[0].venue.city + ", " + response.data[0].venue.region +
                  "\nDate of the Event: " + moment(response.data[0].datatime).format('MMMM Do YYYY, h:mm:ss a'))
  });
}


  if (command=="spotify-this-song"){

  spotify.search({type: 'track', query: value }, function(err, data){
    if (err){
      return console.log("Error Occured: " + err)
    }
    console.log("Name of Artist: " + data.tracks.items[0].album.artists[0].name + "\nName of Track: " + data.tracks.items[0].name +
                "\nAlbum Name: " + data.tracks.items[0].album.name + "\nPreview Link: " + data.tracks.items[0].external_urls.spotify)
   });
}

if (command === "do-what-it-says") {

  fs.readFile("random.txt", "utf8", function read(error, data) {
    if (error) {
      return console.log('Error occurred: ' + error);
    }
    let dataArr = data.split(",")
    console.log(dataArr)
  
    command = dataArr[0];
    value = dataArr[1];
    console.log(command)
    console.log(value)
  });
};