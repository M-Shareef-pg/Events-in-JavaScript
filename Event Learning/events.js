let btn2 = document.querySelector("#btn2");
// Event and function

btn2.onclick = () =>{
    console.log("Button 2 was clicked");
}


let btn3 = document.querySelector("#btn3");
btn3.onclick = () => {
    btn3.textContent = "not login";
    btn3.style.color = "Red";
    btn3.style.width = "100px";
    btn3.style.height = "60px";

}

// Event listner
let btn4 = document.querySelector("#btn4");
btn4.addEventListener("click", () =>{
    console.log("Button was Clicked");
})

btn4.addEventListener("click", () =>{
    console.log("Button was clicked 2");
})


