  //HOMEWORK PART 1

 let Animal = {
  name:'Bob',
  kind: "Yorki",

  checkAvailability: function(){
      return this.name - this.kind;
  }
}

 console.log(Animal.name);
 console.log(Animal.kind);

//Homework Part 2 

// let library = [ 
//   {
//       title: 'Bill Gates',
//       author: 'The Road Ahead',
//       readingStatus: true
//   },
//   {
//       title: 'Steve Jobs',
//       author: 'Walter Isaacson',
//       readingStatus: true
//   },
//   {
//       title: 'Mockingjay: The Final Book of The Hunger Games',
//       author: 'Suzanne Collins',
//       readingStatus: false
//   }];

// for (let i = 0; i < library.length; i++) 
//  {
//   let book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
//   if (library[i].readingStatus) {
//     console.log("Already read " + book);
//   } else
//   {
//    console.log("You still need to read " + book);
//   }
//  }
 
