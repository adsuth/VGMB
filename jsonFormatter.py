# this script takes simply reads the data from the export page and answer tsv files
# and converts them to JSON which is then read by the VGMB. 

# To avoid the stress of asynchronous malarkey, its simply pasted into the ALLSONGS.js as a string.
# Not great practice, but it works and saves me the headache.

# The export page and answer TSV files are gotten from the VGMB spreadsheet.
# TSV was chosen as game titles can have commas.

# dont ask why this is OO and not functional. I dont know either.
class VGMBSongFormatter:
    def __init__(this, file, ansFile):
        this.VGMB_TSV_file = file
        this.VGMB_TSV_Answers_file = ansFile
        this.ALLSONGS_file = open( "ALLSONGS.json", "w" )
        this.json = ""
        this.allSongsArr = []
        # [ ID, Title, Game, Series, Link, Difficulty ]
        this.answers = []
        # [ ID, Game, Series, Answer0, ... AnswerN ]


    # converts the TSV file to a workable ar- I mean list. Sorry python has to be special.
    def formatTSVAsArr(this):
        for line in this.VGMB_TSV_file:
            line = line.strip()
            this.allSongsArr.append(line.split("\t"))

        for line in this.VGMB_TSV_Answers_file:
            line = line.strip()
            this.answers.append(line.split("\t"))
            
        print( "answers" )
        print( this.answers )

    # "songs": { "track": ___, "link":___ }
    def formatSongs(this, index):
        json = ""
        
        currentSeries = this.allSongsArr[index][3]
        currentGame = this.allSongsArr[index][2]

        isNewSeries = False
        
        for i in range( len(this.allSongsArr) ) :

            if i > 0:
                json += "},"

            # new game in the same series
            if this.allSongsArr[i][2] != currentGame and this.allSongsArr[i][3] == currentSeries:
                isNewSeries = False
                json = json[:len(json) - 1]
                currentGame = this.allSongsArr[i][2]
                json += this.formatNewGame(i, isNewSeries)

            # new series
            if this.allSongsArr[i][3] != currentSeries:
                isNewSeries = True
                json = json[:len(json) - 1]
                currentSeries = this.allSongsArr[i][3]
                currentGame = this.allSongsArr[i][2]

                json += this.formatNewSeries(i)
                json += this.formatNewGame(i, isNewSeries)

            json += "\"ID_" + this.allSongsArr[i][0] + "\" : { \"title\": \"" + this.allSongsArr[i][1] + "\", \"link\": \"" + this.allSongsArr[i][4]  +"\", \"difficulty\": \"" + this.allSongsArr[i][5]  + "\""
        
        return json

    # "game": { "gameName": ___, "songs": formatSongs() }
    def formatNewGame(this, index, isNewSeries):
        json = ""
        if index > 0 and not isNewSeries:
            json += "} },"

        json += "\"" + this.allSongsArr[index][2] + "\" : {" + "\"gameName\": \"" + this.allSongsArr[index][2] + "\", \"answers\": [" + this.getAnswers( this.allSongsArr[index][2] ) + "], \"songs\": {"

        return json
    
    # "series": { "seriesName": ___, "seriesColor": ____, "game": { } }
    def formatNewSeries(this, index):
        json = ""
        if index > 0:
            json = "} } } },"

        json += "\"" + this.allSongsArr[index][3] + "\" : { " + "\"seriesName\": \"" + this.allSongsArr[index][3] + "\", \"seriesColor\": \"red\", \"game\": {"
        return json

    def getAnswers(this, currentSong):    
        indexOfGame = 0       

        for i in range( len( this.answers ) ):
            if currentSong == this.answers[i][1].strip() :
                    indexOfGame = i
           
        # print( indexOfGame )

        return this.filterAnswers(indexOfGame)
            
    def filterAnswers(this, index):
        output = ""
        for i in range( len(this.answers[index]) ):

            # filters out the game ID (0th pos) and series (2th pos) 
            if ( i == 0 or i == 2  ):
                continue

            output += "\"" + this.answers[index][i].lower() + "\""

            # if there are no answers beyond the title (1th pos)
            # due to lack of permuation/ simplification. eg: Ballon Fight
            if len( this.answers[index] ) == 3:
                continue

            # Condition prevents trailing commas
            if i != len(this.answers[index]) - 1:
                output += ", "

        return output

    # sloppy, but this just closes off the json.
    def formatEndOfArr(this):
        return "} } } } } } }"

    # essentially the master function of the object
    def beginFormatting(this):
        json = "{ \"series\": { "
        json += this.formatNewSeries(0)
        json += this.formatNewGame(0, False)
        json += this.formatSongs(0)
        json += this.formatEndOfArr()

        return json

# # # # #
# main
# # # # #
# init the formatter, format the files as lists and generate + write the json to file.
formatter = VGMBSongFormatter( open( "VGMB - Export Page.tsv", "r" ), open( "VGMB - Answers.tsv", "r" ) )
formatter.formatTSVAsArr()

formatter.ALLSONGS_file.write( formatter.beginFormatting() )

