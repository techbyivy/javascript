let marks1 = 34
let marks2 = 35

//37 variables
//Below are arrays where we use square brackets and comma separated values
let studentmarks= [56, 46, 78, 31, 30, 45, 66, 84, 57, 25] //this array stores numbers
let studentnames=["Mary", "Ivy", "Mike", "Sam", "Angie"]// This array stores string values
let mixedlist= ["Mary", 20, true]//mixed array that holds different values of different data types
let emptyarray=[];//creating an empty array

console.log(studentnames[0]);
console.log(studentnames[1]);
console.log(studentnames[2]);
console.log(studentnames[3]);
console.log(studentnames[4]);

console.log(studentmarks.length);

let days= ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri"]
console.log(days[1])
console.log(days.length)
console.log(days[days.length-1])
console.log(7)

//adding or removing items from at the end of an array
let cart=["Milk", "Bread", "Eggs",];
cart.push("Chocolate") //used push to add an item at the end of the array
console.log(cart)
cart.pop(cart) // pop method removes the last element of an array

//adding or removing items at the beginning of an array
//unshift method adds an item at the beginning of an array
cart.unshift("soap")
cart.unshift("salt")
cart.unshift("Indomie")
cart.unshift("Rice")
console.log(cart)
//shift methos removes an item at the beginning of the array
cart.shift();
console.log(cart)

let playlist=["Unanifaa", "Mockingbird", "I'll be Okay", "Kitemeo"]
console.log(playlist)
playlist.push("Frozen");
console.log(playlist)
playlist.pop(playlist)
console.log(playlist)
playlist.unshift("Ordinary")
playlist.unshift("Happy")


//using loops to iterate through an array
//for
for(let i=0; i<studentnames.length; i++){
    console.log(studentnames[i])
}

let marks= [50, 34,40, 39, 78, 80,]
let total=0;

for(const mark of marks) {
    total=total+mark;
}

console.log(total)

//searching through the array
let firstfail = marks.find(mark => mark< 50);
console.log(firstfail)

