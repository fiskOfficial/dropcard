const createCard = document.createElement("div");
const h1 = document.querySelector("h1");
const dropSite = document.querySelector(".dropSite");

createCard.style.width = 150 + "px";
createCard.style.height = 80 + "px";
createCard.style.backgroundColor = "#AA336A";
createCard.style.marginLeft = 100 + "px";
createCard.style.borderRadius = 10 + "px";
createCard.innerHTML = "Create A Card";
createCard.style.display = "flex";
createCard.style.justifyContent = "center";
createCard.style.alignItems = "center";
createCard.style.color = "white";
createCard.style.border = "white 4px dashed"

h1.parentNode.insertBefore(createCard, h1.nextSibling);

createCard.addEventListener("click", () => {
    
    const newNote = document.createElement("div");
    newNote.classList.add(`note`)

    newNote.style.width = 130 + "px";
    newNote.style.height = 50 + "px";
    newNote.style.borderRadius = 8 + "px";
    newNote.style.display = "flex"
    newNote.style.justifyContent = "center"
    newNote.style.alignItems ="center"
    const R = Math.floor(Math.random() * 255);
    const G = Math.floor(Math.random() * 255);
    const B = Math.floor(Math.random() * 255);
     const newColor = `rgb(${R}, ${G}, ${B} )`
    createCard.style.backgroundColor = newColor;
    newNote.style.backgroundColor = newColor;
 
    const randomPositionX = Math.random() * window.innerWidth / 1.5; 
    const randomPositionY = Math.random() * window.innerHeight /1.5; 
    newNote.style.position = "absolute";
    newNote.style.transform = `translate(${randomPositionX}px, ${randomPositionY}px)`

    createCard.parentNode.insertBefore(newNote, createCard.nextSibling);
    console.log(newNote);

    // newNote.addEventListener("dblclick", () => {
    //     const input = document.createElement("input");
    //     console.log("Double click event on note");
    //     input.PositionX = newNote.randomPositionX;
    //     input.PositionY = newNote.randomPositionY;
    //     input.style.position = "absolute";
    //     input.style.transform = `translate(${randomPositionX}px, ${randomPositionY}px)`
    //     // newNote.parentNode.insertBefore(input, newNote.nextSibling);
    
    //   });

    newNote.addEventListener("dblclick", () => {
        const input = document.createElement("input");

        
        input.style.backgroundColor = newColor;
        input.style.border = "white 1px solid";
        input.style.width = 90 + "%";

        console.log("Double click event on note");
        input.style.position = "relative"; 
        input.style.transform = "none"; 
        newNote.appendChild(input); 
        if(R+G+B < 305){
            newNote.style.color = "white";
            input.style.color = "white";
        }else {
            newNote.style.color = "black";
            input.style.color = "black"
        }

        input.addEventListener("keydown" , (event) => {
            console.log(event.code);
            if (event.code === "Enter") {
                input.remove();
                newNote.innerHTML = input.value;
            }
        })
      });
    //   newNote.addEventListener("mousedown", () => {
    //     document.onmousemove(e => {
    //         var x = e.pageX; 
    //         var y = e.pageY; 

    //         newNote.style.left = x + "px";
    //         newNote.style.top = y + "px";
    //     })
    //   })
})


