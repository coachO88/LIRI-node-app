require("dotenv").config();
var keys = require("./keys.js");
var axios = require("axios");
var Spotify = require("node-spotify-api");
var moment = require('moment');

// console.log(process.env.SPOTIFY_ID)
// console.log(process.env.SPOTIFY_SECRET)

// var spotifyID= process.env.SPOTIFY_ID;
// var spotifySecret= process.env.SPOTIFY_SECRET;
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var value = process.argv[3];

// console.log("Command: " + command)

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


if (command=="concert-this"){

  axios.get("https://rest.bandsintown.com/artists/" + value + "/events?app_id=codingbootcamp").then(
function(response) {
  // console.log(response)
  for (i = 0; i < data.length; i++){
    var data = moment(response.data[i].datetime).format("dddd,MMMM Do YYYY, h:mm:ss a");
    
      console.log ("--------------------   Result: #" + (i+1) + "   ---------------------");
      console.log ("Name of the venue: " + response.data[i].venue.name);
      console.log ("Venue location: " + response.data[i].venue.city + ", " + response.data[i].venue.region)
      console.log ("Date of the Event: " + date);
      console.log ("-----------------   End of Result: #" + (i+1) + "   -----------------");
      console.log (" ")
    }
  });
}

if (command=="spotify-this-song"){

    spotify.search({type: "track", query: value }, function(err, data){
      if (err){
        return console.log("Error Occured: " + err)
      }
      console.log(response);

      for (y = 0; y < data.tracks.items.length; y++){
        var track = "";
        for (z = 0; z < data.tracks.items[y].album.artists.length; z++){
          track = track + data.tracks.items[y].album.artists[z].name + ",";
        }
        console.log ("--------------------   Result: #" + (z+1) + "   ---------------------");
        // ARTISTS
        console.log ("Artist(s): " + name);
        // NAME OFSONG
        console.log ("Track Name: " + song);
        //PREVIEW LINK
        console.log("Preview: " + data.tracks.items[z].album.external_urls.spotify);
        // ALBUM NAME
        console.log("Album Name: " + data.tracks.items[z].album.name);
        console.log ("-----------------   End of Result: #" + (z+1) + "   -----------------");
        console.log (" ");
      }
   });
}