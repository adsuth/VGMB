// should be the same format as the songs.json
// I only have it like this to avoid promises

let ALLSONGS_JSON = 
`{
    "series" : {

        "pokemon" : {
            "seriesName" : "Pokémon",
            "seriesImage" : "pokemon.png",
            "color": "red",
            "game" : {
                "red and blue" : {
                    "gameName": "Red and Blue",
                    "image" : "redBlue.png",
                    "songs" : {
                        "wild battle" : {
                            "link" : "https://youtu.be/NrS523dOHU4",
                            "title" : "Battle! Wild Pokémon"                            
                        },
                        "champion battle" : {
                            "link" : "nXgAj5KdAC0",
                            "title" : "Battle! Champion"                            
                        }
                    },
                    "answers" : [
                        "pokemon rby",
                        "pokemon rb",
                        "pokemon red",
                        "pokemon blue",
                        "pokemon yellow",
                        "pokemon green",
                        "pokemon red and green",
                        "pokemon red and blue",
                        "red and green",
                        "red and blue"
                    ],
                    "closeAnswers" : [
                        "pokemon",
                        "gsc",
                        "gold",
                        "silver",
                        "crystal",
                        "pokemon",
                        "pokemon gold",
                        "pokemon silver",
                        "pokemon crystal"
                    ]
                }
            }

        },

        "zelda" : {
            "seriesName" : "The Legend of Zelda",
            "seriesImage" : "zelda.png",
            "color": "green",
            "game" : {
                "wind waker" : {
                    "gameName": "The Wind Waker",
                    "image" : "windWaker.png",
                    "songs" : {
                        "dragon_roost " : {
                            "link" : "s7fqllhtdHI",
                            "title" : "Dragon Roost Island"                            
                        },
                        "mini_boss" : {
                            "link" : "XF24XSYYiDw",
                            "title" : "Mini Boss Battle"                            
                        }
                    },
                    "answers" : [
                        "wind waker",
                        "windwaker",
                        "zelda wind waker",
                        "zelda windwaker",
                        "legend of zelda wind waker",
                        "legend of zelda windwaker",
                        "the legend of zelda wind waker",
                        "the legend of zelda windwaker",
                        "the legend of zelda the wind waker",
                        "the legend of zelda the windwaker",
                        "the wind waker",
                        "the windwaker",
                        "zelda ww",
                        "loz ww",
                        "lozww"
                    ],
                    "closeAnswers" : [
                        "zelda",
                        "twilight princess",
                        "ocarina of time",
                        "phantom hourglass",
                        "spirit tracks"
                    ]
                }
            }
        }

    }
}
`

const ALLSONGS = JSON.parse( ALLSONGS_JSON );