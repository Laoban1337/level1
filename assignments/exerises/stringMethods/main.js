//Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.
function capAndLower(string) {
  string = string.toUpperCase();
  lowerString = string.toLowerCase();
  console.log(string + lowerString);
}

capAndLower("hello");

//Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down.

function findMiddleIndex(string) {
  const stringLength = Math.floor(string.length / 2);

  return stringLength;
}

findMiddleIndex("hello world");

//Write a function that uses slice() and the other functions you've written to return the first half of the given string.

function returnFirstHalf(string) {
  //  const lengthOfString = Math.floor(string.length /2)
  const lengthOfString = findMiddleIndex(string);
  const firstHalf = string.slice(0, lengthOfString);
  return firstHalf;
}

function returnSecondHalf(string){
    const startingIndex = returnFirstHalf(string)
    const secondHalf = string.slice(startingIndex)
    return secondHalf;
}
    

returnFirstHalf("What in the world is the first half of this?");




//Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.

function capilizeAndLowercase(string){
    const firstHalf = returnFirstHalf(string)
    const secondHalf = returnSecondHalf(string)
     return firstHalf.toUpperCase() + secondHalf.toLowerCase();
}

capilizeAndLowercase("first second");