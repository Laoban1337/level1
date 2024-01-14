var people = ["Jon", "Jacob", "Jingle", "Heimer", "Schmidt"]
var alphabet = "abcdefghijklmnopqrstuvwxyz"
var newArray =[]

function forception(people, alphabet){
    // your code here
    

    for (let i = 0; i < people.length; i++) {
        
         if (people[i] ==="Jon"|| people[i] ==="Jacob" ||people[i] ==="Jingle"||people[i] ==="Heimer"||people[i] ==="Schmidt") {
             people[i]= people[i].concat(alphabet)
         }
         newArray.push(people[i]+" :")
        
         for (let j = 0; j < alphabet.length; j++) {
             newArray.push(alphabet[j])
     

          console.log(newArray)
         }
        
    }
    // const newArray = people.splice();
    // newArray.splice(1,1, ...alphabet)
   
    
    // return people;
   
}



forception(people,alphabet)