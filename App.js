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

function sortPlayers(players) {
    const sortedList = players.sort((a, b) => (a.value < b.value) ? 1 : -1)
    return sortedList
}

console.log(sortPlayers(ListOfPlayers))