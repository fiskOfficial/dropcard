const createCard = document.createElement("button");
const btnClass = createCard.classList.add("btnClass");
const h1 = document.querySelector("h1");
const dropSite = document.querySelector(".dropSite");

createCard.style.backgroundColor = "#9678b6";
createCard.style.border = "3px solid white";
createCard.style.color = "white";
createCard.style.cursor = "pointer";
createCard.innerHTML = "Create A Card";


h1.parentNode.insertBefore(createCard, h1.nextSibling);

createCard.addEventListener("click", () => {
  const newNote = document.createElement("div");

  newNote.style.width = 200 + "px";
  newNote.style.height = 120 + "px";
  newNote.style.borderRadius = 8 + "px";
  newNote.style.display = "flex";
  newNote.style.justifyContent = "center";
  newNote.style.alignItems = "center";

  const R = Math.floor(Math.random() * 255);
  const G = Math.floor(Math.random() * 255);
  const B = Math.floor(Math.random() * 255);
  const newColor = `rgb(${R}, ${G}, ${B})`;

  // createCard.addEventListener("mouseover", () => {
  //   createCard.style.backgroundColor = "white";
  //   createCard.style.color = newColor;
  //   createCard.style.border = newColor + "1px solid";
  // });

  // createCard.addEventListener("mouseout", () => {
  //   createCard.style.backgroundColor = "white";
  //   createCard.style.color = newColor;
  //   createCard.style.border = newColor + "1px solid";

  // });

  createCard.style.backgroundColor = newColor;
  newNote.style.backgroundColor = newColor;

  const randomPositionX = (Math.random() * window.innerWidth) / 1.2;
  const randomPositionY = (Math.random() * window.innerHeight) / 1.7;
  newNote.style.position = "absolute";
  newNote.style.transform = `translate(${randomPositionX}px, ${randomPositionY}px)`;

  createCard.parentNode.insertBefore(newNote, createCard.nextSibling);
  console.log(newNote);

  newNote.addEventListener("dblclick", () => {
    console.log(newNote);
    newNote.setAttribute("contenteditable", "true");
    console.log(newNote);
    newNote.style.overflow = "scroll";
    newNote.style.border = "white 3px solid";
    newNote.style.zIndex = 1000;

    if (R + G + B < 305) {
      newNote.style.color = "white";
    } else {
      newNote.style.color = "black";
    }
  });

  newNote.addEventListener("mousedown", handleMouseDown);

  // JavaScript code
  let draggableDiv;
  let initialX, initialY;
  let isDragging = false;

  // Function to handle mouse down event
  function handleMouseDown(e) {
    if (e.target.getAttribute("contenteditable") !== "true") {
      e.preventDefault();
      draggableDiv = e.target;
      initialX = e.clientX - draggableDiv.offsetLeft;
      initialY = e.clientY - draggableDiv.offsetTop;
      isDragging = true;
      document.onmouseup = handleMouseUp;
      document.onmousemove = handleMouseMove;
    }
  }

  // Function to handle mouse move event
  function handleMouseMove(e) {
    if (isDragging) {
      e.preventDefault();
      draggableDiv.style.top = e.clientY - initialY + "px";
      draggableDiv.style.left = e.clientX - initialX + "px";
      draggableDiv.style.zIndex = 1001;
    }
  }

  // Function to handle mouse up event
  function handleMouseUp(e) {
    if (isDragging) {
      e.preventDefault();
      draggableDiv.classList.remove("upper");
      isDragging = false;
      document.onmouseup = null;
      document.onmousemove = null;
    }
  }

  newNote.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      newNote.setAttribute("contenteditable", "false");
    }
  });

  //   newNote.addEventListener('mousedown', dragMouseDown);

  //   // JavaScript code
  //   let draggableDiv;
  //   let initialX, initialY;

  //   // Function to handle mouse down event
  //   function dragMouseDown(e) {
  //     e.preventDefault();
  //     draggableDiv = e.target;
  //     initialX = e.clientX - draggableDiv.offsetLeft;
  //     initialY = e.clientY - draggableDiv.offsetTop;
  //     document.onmouseup = closeDragElement;
  //     document.onmousemove = elementDrag;
  //   }

  //   // Function to drag the element
  //   function elementDrag(e) {
  //     e.preventDefault();

  //     draggableDiv.style.top = (e.clientY - initialY) + "px";
  //     draggableDiv.style.left = (e.clientX - initialX) + "px";
  //   }

  //   // Function to handle mouse up event
  //   function closeDragElement(e) {
  //       draggableDiv.classList.remove('upper');
  //       document.onmouseup = null;
  //       document.onmousemove = null;
  //   }
});

//     const input = document.createElement("input");

//     if (newNote.innerHTML !== "") {
//       newNote.innerHTML = "";
//     }
//     newNote.appendChild(input);
//     input.style.backgroundColor = newColor;
//     input.style.border = "white 1px solid";
//     input.style.width = 90 + "%";
//     input.style.position = "relative";
//     input.style.transform = "none";

//     const inputEnterEvent = input.addEventListener("keydown", (event) => {
//       if (event.code === "Enter") {
//         input.remove();
//         newNote.innerHTML = input.value;
//         newNote.style.zIndex = 0;
//       }
//     });

//     const indicativeClickInputClose = document.addEventListener("click", () => {
//       if (input && input.value !== "") {
//         input.remove();
//         newNote.innerHTML = input.value;
//         newNote.style.zIndex = 0;
//       }
//     });
