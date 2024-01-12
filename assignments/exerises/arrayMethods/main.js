var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//Remove the last item from the vegetable array.

function fruitAndVeg(){
    vegetables.pop();
    console.log(vegetables)
    fruit.shift();
    console.log(fruit)
    var indexOfOrange = fruit.indexOf("orange")
    console.log(indexOfOrange)
    fruit.push(indexOfOrange)
    console.log(fruit)
    var lengthOfVeg =vegetables.length;
    console.log(lengthOfVeg)
    vegetables.push(lengthOfVeg)
    console.log(vegetables)
    var food = fruit.concat(vegetables)
    console.log(food)
    food.splice(4,2)
    console.log(food)
    food.reverse().join("")
    console.log(food)
}

fruitAndVeg();