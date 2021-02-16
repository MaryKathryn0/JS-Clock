// first set interval to call every 1000 milliseconds
// we are going to call the function setClock
setInterval(setClock, 1000)
//add element 
const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')
//define function setClock that is going to get current date
function setClock () {
    // going to get current date
    const currentDate = new Date()
    //get seconds from current date - repeat hours & minutes and change 60
    const secondsRatio = currentDate.getSeconds() / 60
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12
    // adding data attributes to html for clock rotation//
    setRotation(secondHand, secondsRatio)
    setRotation(minuteHand, minutesRatio)
    setRotation(hourHand, hoursRatio)
}

// function to set rotation 
function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360)
}
setClock()