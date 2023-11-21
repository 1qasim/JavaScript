let toDoItem = document.querySelector("#input");
let addButton = document.querySelector("#addButton");
let ulHtml = document.querySelector("#ulitems")

function addButtonHandler(){
    let toDoItemValue = toDoItem.value;
    let liHtml = `
    <li id = "${toDoItemValue}"> ${toDoItemValue} <button id="edit" class="editDeleteButton" onclick="editHandler('${toDoItemValue}')">Edit</button><button id="delete" class="editDeleteButton">Delete</button> </li>
    `

    
    ulHtml.innerHTML += liHtml;
    toDoItem.value = ""
    
}


function editHandler(toDoItemValuE){
    console.log(toDoItemValuE)
    let li = document.getElementById(`${toDoItemValuE}`);
    toDoItem.value = `${toDoItemValuE}`;
    addButton.textContent = "Save";
    li.setAttribute("disabled", "true");
    let saveButton = `saveButtonHandler('${toDoItem.value}')`
    addButton.setAttribute("onclick", saveButton );
    li.classList.add(`${toDoItemValuE}`)
}

function saveButtonHandler(toDoItemValuE){
let li = document.getElementsByClassName(toDoItemValuE);
console.log(toDoItemValuE)
li.textContent = toDoItem.value;
}