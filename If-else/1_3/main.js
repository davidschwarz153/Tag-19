function ageCheck(){
    event.preventDefault();
    let ageInput = document.querySelector("#age").valueAsNumber
    let result1 = document.querySelector(".result")
    

    if (ageInput > 18) {
        result1.innerText = "Ja du darfst Shisha rauchen"
    } else {
        result1.innerText = "Du darfst noch nicht Shisha rauchen"
    }
}