# -liri-node-app

Deployed site: https://pennyarnold.github.io/liri-node-app/

LIRI is a Language Interpretation and Recognition Interface. LIRI is a command line node app that takes in parameters and returns data.

1.1	Search Results in Node
    LIRI searches Spotify for songs, Bands in Town for concerts, and OMDB for movies.

1.2	APIs, Libraries and Packages:
    This application includes:
    •	Axios 
    •	Bands in Town 
    •	Spotify 
    •	OMDB APIs
    •	Node-Spotify-API package
    •	Moment
    •	DotEnv – sets environment variables to the global process.env object in node
2	How LIRI works
    This is a Command Line Application and cannot be deployed to GitHub or Heroku. Therefore, the ReadMe includes screenshots reflecting how the app functions. 
2.1	Building LIRI
    I ran npm init -y  in Node to initialize a package.json file. The package.json file is required for installing third party npm packages and saving their version numbers. This package alleviates issues running LIRI and helps others who may clone this code.  
    The .gitignore file prevents git from tracking files that I did not want to share in GitHub (including node modules and files containing API keys).  If you clone this code, you will be responsible for obtaining your own API keys which are critical for the functionality of the application.
    The keys.js file contains Spotify API key code and assists in ensuring files are being loaded properly.
    The random.txt file which contains a command line to pull object data from a random song.
    The liri.js file contains all code to run the application and is commented out so that the user can identify and better understand how the code is functioning.
2.2	Commands
    LIRI responds to the following commands:
    •	concert-this <artist/band name here>
    •	spotify-this-song '<song name here>'
    •	movie-this '<movie name here>'
    •	do-what-it-says
2.3	Data Responses
    Command lines returns information to the terminal/bash window.
2.3.1	Concert-this
        LIRI concert-this command returns:
        •	Name of the venue
        •	Venue location
        •	Date of the Event (moment.js library formats the date "MM/DD/YYYY")
        It the user does not enter a concert/artist, node returns "Carlos".

        To see a video of the working code, go to the following web files within this folder: assets\concert-this.webm and assets\concert-this default.webm

2.3.2	Spotify-this
        LIRI spotify-this-song returns:
        •	Artist(s)
        •	The song's name
        •	A preview link of the song from Spotify
        •	The album that the song is from
        If no song is typed in Node, then LIRI will return "The Sign" by Ace of Base.

        To see a video of the working code, go to the following web files within this folder: 
        assets\spotify-this-song default.webm and assets\spotify-this-song.webm

2.3.3	Movie-this
        LIRI movie-this returns:
        •	Title of the movie
        •	Year the movie came out
        •	IMDB Rating of the movie
        •	Rotten Tomatoes Rating of the movie
        •	Country where the movie was produced
        •	Language of the movie
        •	Plot of the movie
        •	Actors in the movie
        If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'

        To see a video of the working code, go to the following web files within this folder:
        assets\movie-this default.webm and assets\movie-this.webm

2.3.4	Do-what-it-says
        LIRI do-what-it-says returns the following:
        •	Spotify-this-song for "I Want it That Way"
        
        To see a video of the working code, go to the following web files within this folder:
        assets\do-what-it-says.webm
        

