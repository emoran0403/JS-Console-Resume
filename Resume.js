//The 'me' object contains properties about me, which will be logged later.

let me = {
    myname: "Eric Moran",
    career: "Math Teacher",
    desc:  "I love learning",
}

//The 'interests' and 'jobs' arrays contain lists of my interests and previous jobs respectively.

let interests =["Math", "Video Games", "Movies", "Cooking"];
let jobs = ["Cashier - Rite Aid: Worked the cash register", "Delivery Driver - Domino's: Delivered delicious pizza", "Math Tutor - IRSC: Helped college students study math ", "Math Teacher - FL Public School: Teaching math to 6th grade students"];

//s1 through s5 are objects containing the skill and coolness properties.  These are collected in the 'skills' array in Line 32.

let s1 ={
    skill: "Math Background",
    coolness: true,
}
let s2 ={
    skill: "Baking",
    coolness: false,
}
let s3 ={
    skill: "Cooking",
    coolness: false,
}
let s4 ={
    skill: "Halo",
    coolness: true,
}
let s5 ={
    skill: "Minecraft",
    coolness: false,
}

//The 'skills' array collects the s1 through s5 objects, which will then be logged later.

let skills = [s1, s2, s3, s4, s5]

//These logs output the properties from the 'me' object.  The 'myname' property should display in all caps if executed properly.

console.log("Name: " + me.myname.toUpperCase());
console.log("Career: " + me.career);
console.log("Description: " + me.desc);

//The space being logged allows for better readability in the console.

console.log(' ');

//This loop iterates over each element in the 'interests' array, logging them to the console.

console.log("My Interests:")
for (let i = 0; i < interests.length; i++) { 
    console.log(displayPosition(interests[i]));
}
console.log(' ');

//This loop iterates over each element in the 'jobs' array, logging them to the console.

console.log("My Previous Experience:")
for (let i = 0; i < jobs.length; i++) { 
    console.log(displayPosition(jobs[i]));
}
console.log(' ');

//This loop iterates over each element in the 'skills' array, logging them to the console.

console.log("My Skills:")
for (let i = 0; i < skills.length; i++) { 
    console.log(displayPosition(displaySkill(skills[i].skill, skills[i].coolness)));
}

//This function contatenates an asterisk and a space to the string passed to it, stores it temporarily in a local variable, and return that local variable.

function displayPosition(str) {
    use = "* " + str;
    return use;
}

//Similar to the 'displayPosition' function, this function first tests the truthiness of the 'coolness' property of the object passed to it,
//then contatenates the string passed to it, stores it temporarily in a local variable, and returns that local variable.

function displaySkill(skill, coolness) {
    if (coolness == true) {
        use = "BAM: " + skill;
        return use;
    }
    return skill;
}

