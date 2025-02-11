let body = document.querySelector("body");
let heading = document.querySelector("h1")
let btn1 = document.querySelector("#btn1");
let curr = "light";
btn1.addEventListener("click", () => {
    if(curr === "light"){
        curr = "dark";
        body.style.backgroundColor = "black"
        body.style.color = "white"
    } else if(curr === "dark"){
        curr = "light";
        body.style.backgroundColor = "white";
        body.style.color = "black";
    }
})

let clickCount = 0;
btn1.addEventListener("click", () =>{
    clickCount++;
    if(clickCount ===5){
        heading.innerText = "Bs krde bhai ab kitna dbaega"
    }

})
