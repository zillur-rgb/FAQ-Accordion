let boxes = document.querySelectorAll(".box");
console.log(boxes);

// function activeBox(){
//     boxes.forEach((box) => {
//         box.addEventListener("click", () => {
//           box.classList.toggle("active");
//         });
//       });
// }

// activeBox()

function activeBox() {
  boxes.forEach((box) => {
    box.addEventListener("click", () => {
      for (let i = 0; i < boxes.length; i++) {
        if (boxes[i].classList.contains("active")) {
          boxes[i].classList.remove("active");
        } else{
          box.classList.toggle("active")
        }
      }
      // box.classList.toggle("active")
    });
  });
}

activeBox();
