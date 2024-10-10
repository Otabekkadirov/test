const form = document.getElementById("form")
const itemInput = document.getElementById("item-input")
const items = document.getElementById("items");

form.addEventListener("submit", (event)=>{
    event.preventDefault();
    
    const newLi = document.createElement("li");
    newLi.textContent = itemInput.value;
    newLi.className = "list-group-item";
    
    items.append(newLi)
    form.reset();
})