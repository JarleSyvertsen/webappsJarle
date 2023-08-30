// Oppgave 1
const removeBtn = document.getElementById("remove-btn");
const removeElement = document.getElementById("remove");
removeBtn.addEventListener("click", () => { removeElement.remove() });


// Oppgave 2
const changeTextButton = document.getElementById("change-btn");
const changeTextElement = document.getElementById("change");
const text = "God aften"
changeTextButton.addEventListener("click", () => {  changeTextElement.innerText = text; })


// Oppgave 3
const inputField = document.getElementById("input");
const textToBeReplaced = document.getElementById("input-text");
inputField.addEventListener("input", () => {  textToBeReplaced.innerText = inputField.value })


// Oppgave 4
const myList = ["item one", "item two", "item three"];
const ulToPopulate = document.getElementById("ul");
const populateButton = document.getElementById("write-list");

populateButton.addEventListener("click", () => {
    for(listItem of myList) {
        let li = document.createElement("li");
        li.innerText = listItem;
        ulToPopulate.appendChild(li);
    }
})

// Oppgave 5
const typeSelector = document.getElementById("select");
const elementText = document.getElementById("text");
const createButton = document.getElementById("create");
const appendElement = document.getElementById("placeholder");
createButton.addEventListener("click", () => {
    const newElement = document.createElement(typeSelector.value);
    newElement.innerText = elementText.value;
    appendElement.appendChild(newElement);
})


// Oppgave 6
const listToDepopulate = document.getElementById("list");
const listToDepopulateBtn = document.getElementById("remove-li");

listToDepopulateBtn.addEventListener("click", () => {
    listToDepopulate.children.item(0).remove();
})


// Oppgave 7
const nameField = document.getElementById("name");
const orderButton = document.getElementById("order");

nameField.addEventListener("input", () => {
    if (nameField.value.length > 4) {
        orderButton.setAttribute("disabled", true);
    } else {
        orderButton.removeAttribute("disabled");
    }
})
// Oppgave 8
const listElements = document.querySelector(".children").children;
const colorButton = document.getElementById("color");

colorButton.addEventListener("click", () => {
    for (let i = 0; i < listElements.length; i++) {
        if(i % 2 === 0) {
            listElements.item(i).style.color = "pink";
        } else {
            listElements.item(i).style.color = "green";
        }
    }
})