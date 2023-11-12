let toDoItem = document.querySelector("#input");
let addButton = document.querySelector("#addButton");
let ulHtml = document.querySelector("#ulitems")

addButton.addEventListener("click", ()=> {
    let liHtml = `
    <li> ${toDoItem.value} <button id="edit" class="editDeleteButton">Edit</button><button id="delete" class="editDeleteButton">Delete</button> </li>
    `
    ulHtml.innerHTML += liHtml;
    toDoItem.value = ""
    let editButton = document.querySelector("#edit");
    let deleteButton = document.querySelector("#delete");
    console.log(editButton)
})




    