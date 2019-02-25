/* code to read and set any environment variables with the dotenv package: */
require("dotenv").config();

var _ = require('lodash');

/* code required to import the keys.js file and store it in a variable. */
var keys = require("./keys.js");

// TODO Grab the axios package...
// @link https://www.npmjs.com/package/axios
var axios = require("axios");

// Run the axios.get function...
// The axios.get function takes in a URL and returns a promise (just like $.ajax)
axios.get("https://en.wikipedia.org/wiki/Kudos_(granola_bar)").then(
  function(response) {
    // If the axios was successful...
    // Then log the body from the site!
    console.log(response.data);
  },

  function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log(error.response.data);
      console.log(error.response.status);
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  }
);

/* access my keys information */
var spotify = new Spotify(keys.spotify);

/* the EASIEST way to find an artist, album, or track: */
/* search: function(
    { type: 'artist OR album OR track', 
    query: 'My search query', 
    limit: 20 }, 
    callback); */

/* Make it so liri.js can take in one of the following commands:
concert-this
spotify-this-song
movie-this
do-what-it-says */