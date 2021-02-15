// first set interval to call every 1000 milliseconds
// we are going to call the function setClock
setInterval(setClock, 1000)

//define function setClock that is going to get current date
function setClock () {
    // going to get current date
    const currentDate = new Date()
    //get seconds from current date - repeat hours & minutes and change 60
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
}