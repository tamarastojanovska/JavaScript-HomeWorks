
 //## Exercise 1

// $(document).ready(function(){

//     $("#jQueryAjaxRequest").click(function(){
    
//         $.ajax({
//             type:"GET",
//             url:"https://raw.githubusercontent.com/Drakso/AJS2019/master/Class1/students.json",
            
//             success: function(response){
            
//             console.log("Request is successfull");
//             let responseObject= JSON.parse(response);
//             console.log(responseObject);
//             },
//             error: function(response){

//             }
//         })
//     });

  //## Exercise 2

    $("#StarWarsapi").on("click",function(){
       
            $.ajax({
                type:"GET",
                url:"https://swapi.dev/api/people/1 ",
                success: function(response){
                    console.log(response);

                    let elementWithJquery=$("#StarWarsapi");
                elementWithJquery.html("");
                for(let i=0;i<response.firstperon.length;i++){
                    elementWithJquery.append(`<li>${response.firstperon[i].name}</li>`);
                }


                    printElementsWithTwoArguments("#StarWarsapi",response);
                },
                error:function(response){
                    console.log("The request has failed(Bad Request)");
                }
            })
        })
    });