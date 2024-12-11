function ageCheck(){
    let ageInput = document.querySelector("#age").valueAsNumber
    let result1 = document.querySelector(".result")
    

    if (ageInput > 18) {
        result1.innerText = "over 18"
    } else {
        result1.innerText = "under 18"
    }
}