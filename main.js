//Creating a new note
let addNewNote = document.getElementById("new-btn")


const addNote = (text = '') => {
    let notesDiv = document.querySelector(".notes-div")
    const noteDiv = document.createElement("div") //creating a div
    noteDiv.classList.add("note-div") //assining the div a specific name
    const HTMLdata = `
        <div class="operation">
            <button class="edit-btn" id="edit-btn"><i class="fa-solid fa-pen-to-square"></i></button>
            <button class="del-btn" id="del-btn"><i class="fa-solid fa-trash-can"></i></button>
        </div>
        <div id="outputText" class="${text? '':'hidden'}"></div>
        <textarea id="inputText" class="${text? 'hidden':''}" cols="34" rows="10"></textarea>`

    noteDiv.insertAdjacentHTML("afterbegin", HTMLdata)
    notesDiv.appendChild(noteDiv)

    //deleteting that particular note
    const delButton = noteDiv.querySelector(".del-btn")
    delButton.addEventListener('click', deleteNote)

    function deleteNote() {
        noteDiv.remove()
        updateData()
    }

    //editing that particular note
    const editButton = noteDiv.querySelector(".edit-btn")
    const outputArea = noteDiv.querySelector("#outputText")
    const textArea = noteDiv.querySelector("#inputText")

    if (text != null || text != "") {
        textArea.value = text
        outputArea.innerHTML = text
    }


    editButton.addEventListener('click', editNote)

    function editNote() {
        if (textArea.value != null || textArea.value != "") {
            outputArea.innerHTML = textArea.value
            updateData()
        }
        if (outputArea.innerHTML) {
            textArea.value = outputArea.innerHTML
        }

        outputArea.classList.toggle('hidden')
        textArea.classList.toggle('hidden')


    }
}

addNewNote.addEventListener('click', () => {
    addNote("") //function call
})

//Storing the upadated data to localeStorage
function updateData() {
    let notesArray = []
    const notes = document.querySelectorAll("textarea")
    notes.forEach((currentNote) => {
        if (currentNote.value != "") {
            notesArray.push(currentNote.value)
        }
    })
    localStorage.setItem("notes", JSON.stringify(notesArray))
}

//Getting the data from locale Storage
getData()

function getData() {
    const data = localStorage.getItem("notes")
    const notes = JSON.parse(data)
    notes.forEach((currrentNote) => {
        addNote(currrentNote)
    })
}