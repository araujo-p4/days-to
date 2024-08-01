function daysleft(firstDate, secondDate){
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay))
    return diffDays
}

function update(){
    var currentDate = new Date()
    var year = currentDate.getFullYear()
    var month = currentDate.getMonth()+1
    var day = currentDate.getDate()
    console.log(year)
    console.log(month)
    console.log(day)
    const firstDate = new Date(year, month, day)
    const secondDate = new Date(2024, 10, 11)
    var diffDays
    diffDays = daysleft(firstDate, secondDate)
    let countDays = document.getElementById("count-days")
    countDays.innerText = diffDays
}

function send(){
    let textSay = document.getElementById("say").value
    let savedMessage = document.getElementById("saved-message")
    savedMessage.textContent += textSay + "\n"
}



