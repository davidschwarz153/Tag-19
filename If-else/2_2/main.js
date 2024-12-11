



function checkAirQuality(){

    const qual = document.querySelector(".lq")
    const slider = document.querySelector("#slider").valueAsNumber
    const body = document.querySelector("body")

    qual.innerText = slider

    
    if (slider <= 50 ) {
        body.style.backgroundColor = "green" 
    } else if (slider <= 100){
        body.style.backgroundColor = "yellow"
    } else if (slider <= 150){
        body.style.backgroundColor = "orange"
    }
}