   
//localStorage.setItem("High_Score",0)
document.getElementById("high_score").innerHTML+=localStorage.getItem("High_Score")



function click_start_button()
{
    setTimeout(() => {
      
    
     const body_for_gaming = document.getElementById("body");

     body_for_gaming.setAttribute(
         "style",
         "opacity: 1; transition :  ease-in-out 0.5s;   display: block;"
         );

          document.getElementById("input_from_user").focus()
     all_code_one_function()
           }, 3000 );

    const start_popup_box = document.getElementById("start_popup_box");

    start_popup_box.setAttribute(
        "style",
        "opacity: 0.9; transition :  ease-in-out 1s; scale:1.3;"
        );
 } 



 /////////////     gaming js code below   ////////////////////////////


 
 
 var new_scores = 0;
 let correct_count =-1;
 let incorrect_count =0;
 var score = -10;
 
 
 function  all_code_one_function()
 
 {
   

    const body_game_start = document.getElementById("body_game_start");

    body_game_start.setAttribute(
        "style",
        "opacity: 0; transition :  ease-in-out 0.5s; display:none "
        );
   
   var game_play_mode = document.getElementById("game_play_mode").value;
   
   
   if(game_play_mode == 5000)
   {
     var time_value = 5000;
     console.log(game_play_mode)
   }else if(game_play_mode == 3500)
   {
     var time_value = 3500;
     console.log(game_play_mode)
   }else
   {
     var time_value = 2000;
     console.log(game_play_mode)
   }
 
 generateRandomSentence()
 function generateRandomSentence() {
   var alphabet = 'abcdefghijklmnopqrstuvwxyz';
   
   var sentenceLength = Math.floor(Math.random() * 3) + 3;
   var sentence = '';
   
   for (var i = 0; i < sentenceLength; i++) {
     var randomIndex = Math.floor(Math.random() * alphabet.length);
     sentence += alphabet[randomIndex];
   }
   
   return sentence;
 }
 
 function updateSentence() {
   var randomSentence = generateRandomSentence();
   document.getElementById("output_to_display").innerHTML=randomSentence; 
   //console.log(randomSentence);
  // console.log(document.getElementById("output_to_display").value); 
 }
 
 // Update the sentence every 3 seconds
 //setInterval(updateSentence, 2000);
 
 setInterval(() => {
  var randomSentence =  document.getElementById("output_to_display").value; 
  var input = document.getElementById("input_from_user").value;
   
 
  if(input==randomSentence)
  {
 
    let score1 = 10;
     score = score+score1;
 
    document.getElementById("Score").innerHTML="Score "+score; 


    var High_Score = localStorage.getItem("High_Score")


   
if(score > High_Score)
  {
    
    localStorage.setItem("High_Score",score)
    
    document.getElementById("high_score").innerHTML="High Score "+localStorage.getItem("High_Score")
    
    
    if(new_scores == 0)
      { 
        new_scores = 2;
        const new_score = document.getElementById("new_score");
        
        new_score.setAttribute(
          "style",
  "opacity: 1; transition :  ease-in-out 0.4s; border-color:green;"
);



setTimeout(() => {
    
   // const high_score = document.getElementById("high_score");
           
   new_score.setAttribute(
      "style",
      "opacity: 0; transition :  ease-in-out 0.4s; border-color:green;"
    );

  }, 2000);

  }

}

   const output_to_display = document.getElementById("output_to_display");
           
           output_to_display.setAttribute(
             "style",
             "opacity: 0.8; transition :  ease-in-out 0.2s; border-color:green;width: 100%;"
           );
   //document.getElementById("input_from_user").innerHTML="hello"; 
    document.getElementById("input_from_user").innerHTML=""; 
          correct_count ++;
           document.getElementById("correct_button").innerHTML="Correct "+correct_count; 
          
     var input_from_user=  document.getElementById("input_from_user");
     input_from_user.value=""; 
     console.log("true"+randomSentence)

     var  correct_button = document.getElementById("correct_button");
           
     correct_button.setAttribute(
       "style",
       " transition :  ease-in-out 0.3s; border-color:green; background-color:green;"
     );

    
     setTimeout(() => {
      
   //   const correct_button = document.getElementById("correct_button");
   var  correct_button = document.getElementById("correct_button");
            
   correct_button.setAttribute(
        "style",
        " transition :  ease-in-out 0.3s; border-color:black;background-color: white; "
      );

     }, 1000);

   }
   else
   {


    var  incorrect_button = document.getElementById("incorrect_button");
           
    incorrect_button.setAttribute(
      "style",
      " transition :  ease-in-out 0.3s; border-color:green; background-color: red;"
    );

   
    setTimeout(() => {
     
  //   const correct_button = document.getElementById("correct_button");
  var  incorrect_button = document.getElementById("incorrect_button");
           
  incorrect_button.setAttribute(
       "style",
       " transition :  ease-in-out 0.3s; border-color:black;background-color: white; "
     );

    }, 1000);
 

     const output_to_display = document.getElementById("output_to_display");
         
         output_to_display.setAttribute(
           "style",
           "opacity: 0.8; transition :  ease-in-out 0.2s; border-color:red;width: 100%;"
         );
 
     var input_from_user=  document.getElementById("input_from_user");
     input_from_user.value=""; 
    // document.getElementById("input_from_user").innerHTML = "hello";
 
        incorrect_count ++;
       document.getElementById("incorrect_button").innerHTML="Incorrect "+incorrect_count; 
         
     console.log("false")
   }
 
    ///document.getElementById("input_from_user").innerHTML=""; 
   
   updateSentence() 
 }, time_value);
 
 }



 function back_to_home()
 {

  restart_game()
     setTimeout(() => {
         
         location.reload();
         console.log("home button ")
        }, 2000);
 }
 
 function restart_game()
 {
   
  display_score()

  if(score>300)
    {
      document.getElementById("display_score").innerHTML=" Your Score Is Excellent "; 
      
    }else
   if(parseInt(correct_count)==parseInt(incorrect_count))
    {
      document.getElementById("display_score").innerHTML=" Your Score Is Tie "; 
      
    }else
    if(score > 150)
      {
        document.getElementById("display_score").innerHTML=" Your Score Is Good "; 
        
      }
    else if(parseInt(correct_count)>parseInt(incorrect_count))
      {
        document.getElementById("display_score").innerHTML=" Your Score Is Better "; 
        
      }

      if(parseInt(correct_count)<parseInt(incorrect_count))
        {
          document.getElementById("display_score").innerHTML=" Your Score Is Low"; 
          
        }
        
        
        correct_count =0;
        incorrect_count =0;       
        score = 0;
        document.getElementById("correct_button").innerHTML="Correct "+correct_count; 
        document.getElementById("incorrect_button").innerHTML="Incorrect "+incorrect_count; 
      
        document.getElementById("Score").innerHTML="Score "+score; 
    

        console.log("restart")
 }

 function display_score()
 {
  const display_score = document.getElementById("display_score");

  display_score.setAttribute(
   "style",
   "opacity:1;transition:0.8s;"
 );


setTimeout(() => {
  const display_score = document.getElementById("display_score");

  display_score.setAttribute(
   "style",
   "opacity:0;transition:0.5s;"
 );

}, 2000);
 }