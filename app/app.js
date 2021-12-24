const input = document.querySelector('.inputItem');
const addItem = document.querySelector('.save');
const list = document.querySelector('.list');
const arrayNotes = []; 

const addResetShowList = ()=>{
    const newItem = document.createElement("li");
    const span = document.createElement("SPAN");
    span.classList.add("deleteItem");
    const fragment = document.createDocumentFragment();
    if (input.value !=="") {
        arrayNotes.push(input.value);
        for (const item of arrayNotes) {
            newItem.textContent = item;
            span.textContent = "X";
            newItem.appendChild(span);
            fragment.append(newItem);
            
        }
        list.appendChild(fragment)
    }
    input.value ="";
    
}

// Event Listener 

addItem.addEventListener("click", ()=>{
    addResetShowList()
})

input.addEventListener("keypress", (event)=>{
    if (event.key =="Enter"){
        addResetShowList()
    }
})

list.addEventListener("click", (event)=>{
    event.target.classList.toggle("checked");
    // console.log(event.target.textContent)
    if (event.target.textContent === "X"){
        event.target.parentElement.remove();
    }
})

