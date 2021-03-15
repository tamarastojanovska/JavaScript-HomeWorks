

let objConstructor = new Object();
objConstructor 


function Student(fName, lName, age, year, academy, ) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.year = year;
    this.academy = academy;
   
    this.getinfo = function () {
        return `${this.firstName} ${this.lastName} ${this.academy}`;

}
}
this.getage=function() {
    return `Age:${this.age}`;
}

this.getGradeAverage=function()  {
   return `Grade:`
}  


    let student = new Student ("Tamara", "Stojanovska", 1993);
console.log(`Full name of student is ${student.getinfo()} `);

 console.log(`Full name of student is ${this.firstName}.${this.lastName}`);
console.log(`Student age is ${this.age} `);

// let Array =["studen1","studen2", "student3"];



let signingup = document.getElementById("signingup");
let firstNameInput = document.getElementById("fName");
let lastNameInput = document.getElementById("lName");
let academyInput = document.getElementById("academy");


signingup.addEventListener("click", function (event) {

    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let academy = academyInput.value;
});

