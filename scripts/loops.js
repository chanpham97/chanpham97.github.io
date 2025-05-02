const DARK_COLOR = "#073B3A"

function clearLight(){
    for (let i = 0; i < lightbulbs.length; i++){
        lightbulbs[i].style.backgroundColor = DARK_COLOR
    }
}

let lightbulbs = document.querySelectorAll(".lightbulb")
let clearButton = document.querySelector("#clear")
let runButton = document.querySelector("#run")
let init = document.querySelector("#init")
let stop = document.querySelector("#stop")
let inc = document.querySelector("#inc")

clearButton.addEventListener("click", clearLight)

runButton.addEventListener("click", ()=>{
    clearLight()
    
    let initNum = parseInt(init.value)
    let stopNum = parseInt(stop.value)
    let incNum = parseInt(inc.value)

    console.log(`let i = ${initNum}; i < ${stopNum}; i += ${incNum}`)
    for (let i = initNum; i < stopNum; i += incNum){
        console.log("turning on " + i)
        lightbulbs[i].style.backgroundColor = "white"
    }
})