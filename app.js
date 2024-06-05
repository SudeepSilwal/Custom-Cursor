let text = prompt("Write any TEXT")
if (text = " " || text === undefined || text === null
){
    text = "sudeep"
}
capTxt = text.toUpperCase()
document.querySelector("h1").innerText = capTxt

let main = document.querySelector(".main")
let crsr = document.querySelector(".cursor")

main.addEventListener("mousemove",(move)=>{
    crsr.style.left = move.x+"px"
    crsr.style.top = move.y+"px"
})

