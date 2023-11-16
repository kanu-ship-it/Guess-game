'use strict';

/*console.log(document.querySelector(".message").textContent);

// change the text content
console.log(document.querySelector(".message").textContent ="🎉 Correct Number.");
// to put the secret number 
document.querySelector(".number").textContent = 13;
// to change the score
document.querySelector(".score").textContent = 10;

// input value


document.querySelector(".guess").value = 23;

console.log(document.querySelector(".guess").value);*/

/* GUESS GAME PROJECT*/

// how to get random number btw 1 and 20. 

/*const secretNumber = Math.trunc(Math.random() * 20) + 1;

// to enable the score to be decreasing, 20 in a variable, then decrease it in the function and assign the new score using dom.
let highscore = 0;
let score = 20;

// document.querySelector(' .number').textContent = secretNumber;



//handling the click of a button i.e handling click event.) N.B ; to connect the input with check box

document.querySelector(".check").addEventListener('click' , function(){
    // to convert the input; it's a string so you need to convert it. we also did how the input space will be empty when you input a value and click on check

 const guess = Number(document.querySelector('.guess').value);

 console.log(guess , typeof guess);
   
    // When there is no input

 if(!guess){
    document.querySelector('.message').textContent ='⛔ No Number!'
    
    // when player win

 }else if(guess === secretNumber){
    document.querySelector(".message").textContent ="🎉 Correct Number.";

    document.querySelector(' .number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = "#60b347";
    
    document.querySelector('.number').style.width = "30rem";

    if(score > highscore){
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
    }
}
   // when guess is too high
 
else if (guess > secretNumber){

    if (score > 1){

        document.querySelector('.message').textContent = '💹 Too High!';

     score--;

     document.querySelector(".score").textContent = score;
     } else{
        document.querySelector(".message").textContent ="🧨 You lost the game";

        document.querySelector(".score").textContent = 0; 
        
    }

    // when guess is too low
    
}else if(guess < secretNumber){
    if(score > 1){
        document.querySelector('.message').textContent = '❎Too Low!';

    score--;
    document.querySelector(".score").textContent = score;

    }else{
        document.querySelector(".message").textContent ="🧨 You lost the game";

        document.querySelector(".score").textContent = 0; 
        
    }
    
}


})*/

document.querySelector(".again").addEventListener("click" , function(){

    secretNumber = Math.trunc(Math.random() * 20) + 1;

    document.querySelector(".score").textContent = 20;
    document.querySelector(".number").textContent = "?"

    // document.querySelector(".message").textContent = "start guessing... "

    displayMessage('start quessing')

    document.querySelector(".quess").value = "";

    document.querySelector(".body").style.backgroundColor = "#222;"
    document.querySelector(".number").style.width = "15rem";
    


})






//               SECOND METHOD

// Refactoring the code to make it dry. (help to avoid code duplication).

const secretNumber = Math.trunc(Math.random() * 20) + 1;

let highscore = 0;
let score = 20;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector(".check").addEventListener('click' , function(){
    // to convert the input; it's a string so you need to convert it. we also did how the input space will be empty when you input a value and click on check

 const guess = Number(document.querySelector('.guess').value);

 console.log(guess , typeof guess);
   
    // When there is no input

 if(!guess){
    // document.querySelector('.message').textContent ='⛔ No Number!';
    displayMessage('⛔ No Number!')
    
    // when player win

 }else if(guess === secretNumber){
    // document.querySelector(".message").textContent ="🎉 Correct Number.";
     displayMessage('🎉 Correct Number.')
    document.querySelector(' .number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = "#60b347";
    
    document.querySelector('.number').style.width = "30rem";

    if(score > highscore){
        highscore = score;
        document.querySelector(".highscore").textContent = highscore;
    }

    // when guess is wrong
 }else if (guess !== secretNumber) {
    if(score > 1) {
        // document.querySelector('.message').textContent = guess > secretNumber ? '💹 Too High!' :'❎Too Low!';
         
        displayMessage( guess > secretNumber ? '💹 Too High!' :'❎Too Low!')

        score --;
        document.querySelector('.score').textContent = score;
    } else {
        // document.querySelector('.message').textContent = '🧨 You lost the game!';
        
        displayMessage('🧨 You lost the game!')
        
        document.querySelector('.score').textContent = 0;
    }
 }
}) 
  


