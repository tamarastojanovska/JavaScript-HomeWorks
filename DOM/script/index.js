//Bonus

// document.getElementById("resultTamaraButton").addEventListener("click",function() {
//     let receptName = prompt("Name of the recept");
//     let numberIng = Number (prompt("Insert numb of ing."));
//     let tempArray = [];
    
//     for (let index = 0; index < numberIng; index++) {
//         let ingredient = prompt("Ingredient name");

//         tempArray.push(ingredient);
        
   
//     }
//     document.getElementById("resultTamara").innerHTML=(
//         `
//             <hi>${receptName}</h>
//             <ul>
//                 ${tempArray.map(element =>{

//                 })}
//             </ul>        
//         `
//     )
//             },false)    


//Homework 1

let divWithChangedContent = document.getElementById("first");
console.log(divWithChangedContent);
divWithChangedContent.innerHTML +=`<p>
    This is generated paragraph
</p>`;
console.log(divWithChangedContent);
divWithChangedContent.innerHTML="";
console.log(divWithChangedContent);