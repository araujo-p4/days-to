function daysleft(firstDate, secondDate){
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay))
    return diffDays
}

function update(){
    var currentDate = new Date() 
    var tomorrowDate = new Date(2024, 10, 11)
    const firstDate = currentDate
    const secondDate = tomorrowDate
    var diffDays
    diffDays = daysleft(firstDate, secondDate)
    let countDays = document.getElementById("count-days")
    countDays.innerText = diffDays
}

function send(){
    let textSay = document.getElementById("say").value
    let savedMessage = document.getElementById("saved-message")
    savedMessage.textContent += textSay + "\n";
}

