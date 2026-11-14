let profile={
    fullname:"TechbyIvy",
    Age: 30,
    Profession:"Cybersecurity Analyst",
    Hobbies: "Dancing and Singing",
    ContactInformation: {
        Email: "techbyivy@gmail.com",
        Number: "0723456789",
     },
     Address: {
        Town:"Mukuyu",
        Postalcode: "256-10100",
        City: "Murang'a",
     },
     introduce() {
  return `Hi, I'm ${this.fullname}, a ${this.Age}-year-old ${this.Profession} who enjoys ${this.Hobbies}.`;
}
    };
   document.getElementById("fullname").textContent = profile.fullname;
    document.getElementById("age").textContent = profile.Age;
    document.getElementById("profession").textContent = profile.Profession;
    document.getElementById("email").textContent = profile.ContactInformation.Email;
    document.getElementById("phone").textContent = profile.ContactInformation.Number;
    document.getElementById("town").textContent = profile.Address.Town;
    document.getElementById("intro").textContent = profile.introduce();
   // Bonus 1: button that updates the profession
document.getElementById("updateBtn").addEventListener("click", function () {
  profile.Profession = "Full-Stack Developer";
  document.getElementById("profession").textContent = profile.Profession;
});

// Bonus 2: button that displays all properties
document.getElementById("showAllBtn").addEventListener("click", function () {
  let output = "";
  for (let key in profile) {
    if (typeof profile[key] === "function") continue;
    output += key + ": " + JSON.stringify(profile[key]) + "\n";
  }
  document.getElementById("all").textContent = output;
});

// Bonus 3 and 4: Object.keys() and Object.values()
console.log(Object.keys(profile));
console.log(Object.values(profile));