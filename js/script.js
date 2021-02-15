// first set interval to call every 1000 milliseconds
// we are going to call the function setClock
setInterval(setClock, 1000)
//add element 
cont hourHand = document.querySelector('[data-hour-hand]')
cont minuteHand = document.querySelector('[data-minute-hand]')
cont secondHand = document.querySelector('[data-second-hand]')
//define function setClock that is going to get current date
function setClock () {
    // going to get current date
    const currentDate = new Date()
    //get seconds from current date - repeat hours & minutes and change 60
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    // adding data attributes to html for clock rotation//

}

// function to set rotation 
function setrotation