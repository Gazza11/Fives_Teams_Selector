//Dummy Data

const player1 = {
    name: 'player1',
    value: 4
}   
const player2 = {
    name: 'player2',
    value: 6
}   
const player3 = {
    name: 'player3',
    value: 4.8
}   
const player4 = {
    name: 'player4',
    value: 4.6
}   
const player5 = {
    name: 'player5',
    value: 4
}   
const player6 = {
    name: 'player6',
    value: 5
}   
const player7 = {
    name: 'player7',
    value: 8
}   
const player8 = {
    name: 'player8',
    value: 7
}   
const player9 = {
    name: 'player9',
    value: 4.6
}   
const player10 = {
    name: 'player10',
    value: 7.9
}   

const ListOfPlayers = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10]

// Function sorts players from best to worst.
function sortPlayers(players) {
    const sortedList = players.sort((a, b) => (a.value < b.value) ? 1 : -1)
    return sortedList
}


// Super function that will run all other functions and return with teams.
function teamSelector(players) {
    const sortedList = sortPlayers(players)
    let pairedPlayersArray = []

    // Splits players into pairs
    for (let counter =0 ; counter < Object.keys(players).length; counter ++){
        let tempArray = []
        if( counter % 2 != 0 && counter !=0){
            tempArray.push(sortedList[(counter - 1)])
            tempArray.push(sortedList[counter])
            pairedPlayersArray.push(tempArray)
            tempArray = []
        }
    }

    teamCreator(pairedPlayersArray)
}


function teamCreator(listOfPairs){
    let team1 = []
    let team2 = []

    for (let i = 0; i < listOfPairs.length; i ++){
        team1.push(listOfPairs[i].splice(Math.round(Math.random()), 1))
        console.log(team1)
    }

}

console.log(teamSelector(ListOfPlayers))

