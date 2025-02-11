let div = document.querySelector("#box");
let meme = document.querySelector("#memeDiv")
div.addEventListener("mouseover", () =>{
    meme.classList.add("Apply");
})

div.addEventListener("mouseout", () =>{
    div.style.backgroundColor = "white";
    meme.classList.remove("Apply");
   
})