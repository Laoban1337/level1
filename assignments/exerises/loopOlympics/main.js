//Preliminaries
const fruit = ["banana", "orange", "apple", "kiwi"]

// array that spits out 0-9
for (let i = 0; i < 10; i++) {
     console.log(i)
    
}
// array that spits out 9-0
for(let i = 9; i >=0; i--){
    console.log(i)
}

//prints fruit to console
for (let i = 0; i < fruit.length; i++) {
    const element = fruit[i];
    console.log(element)
}




// bronze

let array = []
// wrote a loop that will push the numbers in i into the empty array
for(let i =0; i < 10; i++){
    array.push(i);
    console.log(array)
}
// prints to the console only even numbers 0 through 100.
 for(var i =0; i < 100; i++){
    if(i %2 ===0){
        console.log("the even numbers are: ",  i)
    }
 }

 //every other item in the array
for (let i = 0; i < fruit.length; i+= 2) {
    const element = fruit[i];
  
     console.log(element)
}