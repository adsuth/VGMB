
class VGMBSongFormatter:
    def __init__(this, file, ansFile):
        this.VGMB_TSV_file = file
        this.VGMB_TSV_Answers_file = ansFile
        this.ALLSONGS_file = open( "ALLSONGS.json", "w" )
        this.json = ""
        this.allSongsArr = []
        # [ ID, Title, Game, Series, Link ]
        this.answers = []
        # [ ID, Game, Series, Answer0, ... AnswerX ]


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

            # new series
            # new game in the same series
            if this.allSongsArr[i][2] != currentGame and this.allSongsArr[i][3] == currentSeries:
                isNewSeries = False
                json = json[:len(json) - 1]
                currentGame = this.allSongsArr[i][2]
                json += this.formatNewGame(i, isNewSeries)

            if this.allSongsArr[i][3] != currentSeries:
                isNewSeries = True
                json = json[:len(json) - 1]
                currentSeries = this.allSongsArr[i][3]
                currentGame = this.allSongsArr[i][2]

                json += this.formatNewSeries(i)
                json += this.formatNewGame(i, isNewSeries)

            json += "\"ID_" + this.allSongsArr[i][0] + "\" : { \"title\": \"" + this.allSongsArr[i][1] + "\", \"link\": \"" + this.allSongsArr[i][4]  +"\""
        
        return json

    # "game": { "gameName": ___, "songs": formatSongs() }
    def formatNewGame(this, index, isNewSeries):
        json = ""
        if index > 0 and not isNewSeries:
            json += "} },"

        json += "\"" + this.allSongsArr[index][2] + "\" : {" + "\"gameName\": \"" + this.allSongsArr[index][2] + "\", \"answers\": [" + this.getAnswers( this.allSongsArr[index][2] ) + "], \"closeAnswers\": [], \"songs\": {"

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
        
        print( indexOfGame ) 

           
        # print( indexOfGame )

        return this.filterAnswers(indexOfGame)
            
    def filterAnswers(this, index):
        output = ""
        for i in range( len(this.answers[index]) ):

            if ( i == 0 or i == 2  ):
                continue
            output += "\"" + this.answers[index][i].lower() + "\""

            if len( this.answers[index] ) == 3:
                continue

            if i != len(this.answers[index]) - 1:
                output += ", "

        return output

    def formatEndOfArr(this):
        return "} } } } } } }"


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

formatter = VGMBSongFormatter( open( "VGMB - Export Page.tsv", "r" ), open( "VGMB - Answers.tsv", "r" ) )
formatter.formatTSVAsArr()

formatter.ALLSONGS_file.write( formatter.beginFormatting() )

