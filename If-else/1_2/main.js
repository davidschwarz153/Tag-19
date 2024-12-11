function weather(){
    let input = document.querySelector("#weather").valueAsNumber
    let result1 = document.querySelector(".resultw")
    
    if (input <= 0) {
        result1.innerText = "schlecht"
    } else if (input <= 3) {
        result1.innerText = "okay"
    } else if (input <= 6) {
        result1.innerText = "gut"
    } else if (input <= 8) {
        result1.innerText = "super"
    }


}