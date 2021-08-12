
# import csv

# with open('demoCSV.csv') as csv_file:
#     csv_reader = csv.reader(csv_file, delimiter=',')
#     line_count = 0
#     for row in csv_reader:
#         if line_count == 0:
#             print(f'Column names are {", ".join(row)}')
#             line_count += 1
#         else:
#             print(f'\t{row[0]} works in the {row[1]} department, and was born in {row[2]}.')
#             line_count += 1
#     print(f'Processed {line_count} lines.')


with open("VGMB - Sheet2.tsv") as tsvFILE:

    arr = []

    for line in tsvFILE:
        line = line.strip()
        arr.append(line.split("\t"))



def makeJSON( arr ):
    json = ""
    currentSeries = arr[0][2]
    currentGame = arr[0][1]
    
    for i in range(len(arr)) :
        if arr[i][1] != currentGame and arr[i][2] == currentSeries:
            currentGame = arr[i][1]
            json += "\n"

        if arr[i][2] != currentSeries:
            currentSeries = arr[i][2]
            json += "\n\n\n"

        json += "\"trackNo_" + arr[i][4] + "\": { \"title\": \"" + arr[i][0] + "\", \"link\": \"" + arr[i][3]  +"\" },"

    return json 


newFile = open( "newSongs.txt", "w" )
newFile.write( makeJSON( arr ) )
