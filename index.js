import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js"
import { getDatabase,
         ref,
         push,
         onValue,
         remove } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js"

const firebaseConfig = {
    databaseURL: process.env.DATABASE_URL
}

const app = initializeApp(firebaseConfig);
const database = getDatabase(app)
const referenceInDB = ref(database, "messages")


function daysleft(firstDate, secondDate){
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const diffDays = Math.round(Math.abs((firstDate - secondDate) / oneDay))
    return diffDays
}


const textSay = document.getElementById("say")
const sendEl = document.getElementById("send-el")
const deleteEl = document.getElementById("delete-el")
const savedMessages = document.getElementById("saved-message")
const nowBtn = document.getElementById("now-btn")

onValue(referenceInDB, function(snapshot){
    const snapshotDoesExist = snapshot.exists()
    if (snapshotDoesExist) {
        let snapshotvalues = snapshot.val()
        let message = Object.values(snapshotvalues)
        renderMessages(message)
    }    
})

nowBtn.addEventListener("click", function(){
    let currentDate = new Date()
    let year = currentDate.getFullYear()
    let month = currentDate.getMonth()+1
    let day = currentDate.getDate()
    const firstDate = new Date(year, month, day)
    const secondDate = new Date(2024, 10, 11)
    var diffDays
    diffDays = daysleft(firstDate, secondDate)
    let countDays = document.getElementById("count-days")
    countDays.innerText = diffDays
})

sendEl.addEventListener("click", function(){
    if(textSay.value != ""){    
        push(referenceInDB, textSay.value)
    }
    textSay.value = "" 
})

deleteEl.addEventListener("click", function(){
    remove(referenceInDB)
    savedMessages.innerHTML = ""
})

function renderMessages(myMessages) {
    let listMessages = ""
    for (let i = 0; i < myMessages.length; i++) {
        listMessages += `<li id="mes">${myMessages[i]}</li>`
    }
    savedMessages.innerHTML = listMessages 
}



