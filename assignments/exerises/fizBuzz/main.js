let fizzCounter = 0
let buzzCounter = 0
let fizzBuzzCounter = 0

function fizzer(){
    for (let i = 1; i <101; i++) {
        
        if (i % 3 === 0) {
            console.log("Fizz")
        }
        if (i % 5 ===0) {
            console.log("buzz")
           
        }
        if (i % 3 ===0 && i % 5 ===0) {
            console.log("fizzBuzz")
            
        } else{
                console.log(i)
            }
    }
}
fizzer();