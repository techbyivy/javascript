//objects are a real world representation
//how to create an object
const character= {
    "name":"Spongebob",
    "age": 28,
    "course": "Software Development",
    "address":{

        "town": "bikini bottom",
        "city": "Ocean"
    }
};

console.log(`My name is ${character.name}`);
console.log(`I am ${character.age} years old`);
console.log(`I live in ${character.address.town}, in the city of ${character.address.city}`);


