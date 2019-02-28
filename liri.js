/* code to read and set any environment variables with the dotenv package: */
require("dotenv").config();
var Spotify = require('node-spotify-api');

/* code required to import the keys.js file and store it in a variable. */
var keys = require("./keys.js");

// TODO Grab the axios package...
// @link https://www.npmjs.com/package/axios
var axios = require("axios");

//need this to do the time conversion
var moment = require("moment");

/* spotify require */
var Spotify = require("node-spotify-api");

// Reading Random Text
var fs=require("fs");

var commandType = '';
commandType = process.argv[2];
var commandText = process.argv[3];
 commandSelection(commandType,commandText);

function commandSelection(commandType, commandText) {
    switch(commandType){
        case 'concert-this':
            console.log ('concert-this');
            if (commandText===undefined )
               commandText='Carlos';
            bandsInTown(commandText);
            break;
     
        case 'spotify-this-song':
            console.log("spotify-this-song");
            if (commandText===undefined )
            commandText='The Sign'
            songSearch(commandText);
            break;
     
        case 'movie-this':
            console.log( "movie-this");
            if (commandText===undefined )
            commandText='Mr. Nobody'
            movieSearch(commandText);
            break;
        case 'do-what-it-says':
            console.log("do-what-it-says");
            //readRandom();
            break;
        case 'default':
            console.log("unknown");
            break;
     }
}

if (commandType === 'movie-this'){
    movieSearch(commandText);
}
   

function movieSearch(movieName){
/* this code is for movies */
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

// Run the axios.get function...
// The axios.get function takes in a URL and returns a promise (just like $.ajax)

axios.get(queryUrl).then(function(response){
       console.log(response.data);
   }).catch(function(error){
       if(error.response)
       {
           console.log("error.response");
       }
   });
}

function bandsInTown(artist){
console.log(artist);
var queryBands = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
axios.get(queryBands).then(function(response){
    /* console.log(JSON.stringify(response.data)); */
    
    console.log("Name of the venue:", response.data[0].venue.name);
       console.log("Venue location:", response.data[0].venue.city + ","+response.data[0].venue.country);
       console.log("Date of the Event", moment(response.data[0].datetime).format("MM/DD/YYYY") );
    
}).catch(function(error){
    if(error.response)
    {
        console.log("error.response");
    }
});

}


function songSearch(searchSong){
/* access my keys information */
var spotify = new Spotify(keys.spotify);
/* the EASIEST way to find an artist, album, or track: */
  spotify
      .search({type: 'track', query: searchSong, market:'US',limit:1})
      .then(function(response) {
        console.log(response.tracks.items[0]);
        console.log("Album Name:", result.tracks.items[0].album.name);
     console.log("Song Name:", result.tracks.items[0].name);
     console.log("Artist Name:", result.tracks.items[0].artists[0].name);
     console.log("Song preview link:", result.tracks.items[0].preview_url);
      })
      
      .catch(function(err) {
        console.log(err);
      });
}

function readRandom()
{
    fs.readFile("random.txt", "utf8", function(err, data) {
        if (err) {
          return console.log(err);
        }
       // Break down all the numbers inside
        data = data.split(",");
       console.log(data[0]);
       console.log(data[1]);
    commandSelection(data[0],data[1]);
    });
    
}
/* Make it so liri.js can take in one of the following commands:
concert-this
spotify-this-song
movie-this
do-what-it-says */