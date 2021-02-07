//HOMEWORK #1

/* function MyFunction(name,  surname, bird, year) {
    alert("Hello" +name+surname+bird+year);
 
}
MyFunction("Tamara");
MyFunction("Stojanovska");
MyFunction("bird");
MyFunction(1993); */

//HOMEWORK #2

function MyFunction(year){
	let result = year /7;
	return result;
}
function MyFunction(year){
	let result = 7 * (year);
	return result;  
}

//The person chooses what to calculate
let personChoice = prompt("Enter year for dog and year for people");
let personInput = parseInt(prompt("Please enter value:"));
if(personChoice === "dog"){
	console.log(`${celToFar(personInput)}people`);
} else if(personChoice === "people"){
	console.log(`${farToCel(personInput)}dog`);
} else {
	console.log("ERROR!");
}