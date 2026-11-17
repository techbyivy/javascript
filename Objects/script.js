
//Objects are a realworld representatio

//How to create an object
const character = {
    "name": "Spongebob",
    "age": 28,
    "occupation": "Chef",
    "is Funny": true
}

//accessing Object properties using a dot notation

console.log(`My name is ${character.name}`);
console.log(`I am ${character.age} years old`)
console.log(`I am a ${character.occupation} by profession`)
//console.log(`${character.isFunny}`) 

//accessing the object properties using square brackets []
console.log(character['name'])
console.log(character["age"])
console.log(character["is Funny"])
 
//changing Object properties
character.name = "Spongebob Square Pants";
character.age = 30
console.log(character)

const characterTwo = {
    name: "Patrick",
    age: 50,
    occupation: "Watches Tv the whole day",
    "is Funny": false,
    address: {
        "town": "bikini bottom",
        "city": "Ocean"
    },
    greet: function(){
        console.log(`Hello I am ${this.name}`)
    }
}

//looping through the properties
for(let key in characterTwo){
    console.log(`${key} : ${characterTwo[key]}`)
}

characterTwo.greet();


console.log(characterTwo)
console.log(characterTwo.address.town)

characterTwo.name = "Patrick Star";

//Adding new properties to an Object
character["placeOfWork"] = "Krusty Krab";
characterTwo["hobby"] = "sleeping"

console.log(character)
console.log(characterTwo)

//deleting properties from an object
delete character.age; //delete using the dot method
delete character["is Funny"] //delete using the square method

console.log(character);






