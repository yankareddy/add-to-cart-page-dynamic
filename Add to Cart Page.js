let mainConatiner = document.getElementById("mainConatiner");

function listItem() {
    let inputElementValue = document.getElementById("cartItemTextInput");
    let input = inputElementValue.value;
    let listElement = document.createElement("li");
    listElement.textContent = input;
    listElementContainer.appendChild(listElement);
    input = "";
}


let headingElement = document.createElement("h1");
headingElement.textContent = "Add To Cart";
headingElement.classList.add("main_Conatiner");
mainConatiner.appendChild(headingElement);

let inputContainer = document.createElement("div");
inputContainer.classList.add("d-flex", "flex-row");
mainConatiner.appendChild(inputContainer);

let inputElement = document.createElement("input");
inputElement.type = "text";
inputElement.id = "cartItemTextInput";
inputContainer.appendChild(inputElement);

let buttonElement = document.createElement("button");
buttonElement.id = "addBtn";
buttonElement.textContent = "Add";
buttonElement.classList.add("btn", "btn-primary", "button");
buttonElement.onclick = function() {
    listItem();
}
inputContainer.appendChild(buttonElement);

let breakElement = document.createElement("br");
inputContainer.appendChild(breakElement);

let paraElement = document.createElement("p");
paraElement.textContent = "My cart items";
mainConatiner.appendChild(paraElement);

let listElementContainer = document.createElement("ul");
paraElement.appendChild(listElementContainer);