function diff(){
    let firstAge = document.querySelector("#age1").valueAsNumber
    let secAge = document.querySelector("#age2").valueAsNumber
    let result = document.querySelector(".result")

    result.innerText += Math.abs(firstAge - secAge) 
}
