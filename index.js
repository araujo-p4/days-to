// import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js"
// import { getDatabase} from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js"

// const firebaseConfig = {
//     databaseURL: "https://days-left-288cb-default-rtdb.firebaseio.com/"
// }

// const app = initializeApp(firebaseConfig);
// const database = getDatabase(app)
// console.log(app)
// console.log(database)


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

let myMessages = []

let textSay = document.getElementById("say")
let sendEl = document.getElementById("send-el")
let deleteEl = document.getElementById("delete-el")
let savedMessages = document.getElementById("saved-message")


let messagesFromLocalStorage = JSON.parse(localStorage.getItem("myMessages"))
if(messagesFromLocalStorage){
    myMessages = messagesFromLocalStorage
    renderMessages()
}

sendEl.addEventListener("click", function(){
    if(textSay.value != ""){    
        myMessages.push(textSay.value)
    }
    textSay.value = "" 
    localStorage.setItem("myMessages", JSON.stringify(myMessages))    
    renderMessages()   
})

deleteEl.addEventListener("click", function(){
    localStorage.clear()
})

function renderMessages() {
    let listMessages = ""
    for (let i = 0; i < myMessages.length; i++) {
        listMessages += `<li id="mes">${myMessages[i]}</li>`
        console.log(myMessages[i])
    }
    savedMessages.innerHTML = listMessages 
}



