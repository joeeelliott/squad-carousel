//create an object that holds our different reviews
let footballers = {
    pogba: {
      src: "images/pogba.jpg",
      name: "Paul Pogba",
      position: "Central Midfielder",
      bio: "Paul Pogba needs no introduction to Manchester United fans, having learned his trade at the club before blossoming into a world-class midfielder at Juventus. 197 appearances. 38 goals."
    },
    telles: {
      src: "images/telles.jpg",
      name: "Alex Telles",
      position: "Left Back",
      bio: "In Alex Telles, Manchester United recruited a hugely experienced player who had already demonstrated his ability as a left-back in some of European football’s most competitive leagues. 19 appearances. 0 goals.",
    },
    bruno: {
      src: "images/bruno.jpg",
      name: "Bruno Fernandes",
      position: "Attacking Midfielder",
      bio: "Bruno completed his move to Old Trafford in January 2020 and was named the Sir Matt Busby Player of the Year for the season, despite playing just half of the campaign. 70 appearances. 36 goals.",
    },
    cavani: {
      src: "images/cavani.jpg",
      name: "Edinson Cavani",
      position: "Striker",
      bio: "One of the most prolific strikers in European and international football during the 21st century, Uruguayan forward Edinson Cavani has a rich goalscoring pedigree. 29 appearances. 8 goals.",
    },
    maguire: {
      src: "images/maguire.jpg",
      name: "Harry Maguire",
      position: "Centre Back",
      bio: "Always a colossal presence at the back, Harry Maguire has risen through the leagues to establish himself as one of the most reliable centre-backs in the game. 102 appearances. 5 goals."
    }
}

const image = document.querySelector('.image');
const name = document.querySelector('.name');
const position = document.querySelector('.position');
const bio = document.querySelector('.bio');

const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const randomBtn = document.querySelector('.random');

let playerIndex = 0; // variable created to mirror our playersArray index and effectively act as the array's index counter when setting the values in our HTML element variables (image, name, position, bio). We need the value to incremement/decrease every time next()/previous() is called so we have to store it's original value outside of the function so that inside the function the varying value can be stored accordingly each call.

// two variables for our random function. randomNumber can start at 0 as that will lways be Pogba on refresh which is our 0 index in playersArray. We need to set this so that previousNumber is not undefined on the functions first call. 
let randomNumber = 0;   
let previousNumber; 

let srcArray = [];
let nameArray = [];
let positionArray = [];
let bioArray = [];
let playersArray = [];

// for..in loop to iterate through an objects properties - regular for loops can't iterate over objects. iterate through our object and in each outer property (footballer: pogba, telles, etc.) push their individual properties into an array that we can use in a for loop later. NOTE: set in global scope to use in multiple functions. 
for(let footballer in footballers){
  srcArray.push(footballers[footballer].src);
  nameArray.push(footballers[footballer].name);
  positionArray.push(footballers[footballer].position);
  bioArray.push(footballers[footballer].bio);
  playersArray.push(footballer);  //array of the outer properties
}

// set our initial player details on screen - the 0th index of each array
image.src = srcArray[playerIndex]; 
name.innerHTML = nameArray[playerIndex];
position.innerHTML = positionArray[playerIndex];
bio.innerHTML = bioArray[playerIndex];


//create a function that displays the next players info
function next(){
  // iterate through the players (Object outer properties) array
  for(let i = 0; i < playersArray.length; i++){
    if(playerIndex === playersArray.length - 1){  // if we get to the end of our playersArray, then reassign playerIndex to 0 so the next click resets back to the starting property values. 
      playerIndex = -1;
    }
    playerIndex ++;  
  //set our HTML element HTML and attributes to the next value (playerIndex counter) in our property arrays
    image.src = srcArray[playerIndex]; 
    name.innerHTML = nameArray[playerIndex];
    position.innerHTML = positionArray[playerIndex];
    bio.innerHTML = bioArray[playerIndex];

    break;  // break after one loop otherwise on one call it would just loop through all the arrays to the final values which would print on screen. this doesn't affect our playerIndex counter whatsoever as we defined that in the global scope.
    
  }
}

//create a function that displays the previous players info
function previous(){
  for(let i = playersArray.length; i >= 0; i--){
    if(playerIndex === 0){  
      playerIndex = playersArray.length;
    }
    
    playerIndex --;  
  
    image.src = srcArray[playerIndex]; 
    name.innerHTML = nameArray[playerIndex];
    position.innerHTML = positionArray[playerIndex];
    bio.innerHTML = bioArray[playerIndex];
    break;  
  }  
}

//create a function that randomly changes the innerHTML to any one of the players
function random(){
  previousNumber = randomNumber;    // stores the last randomNumber

  // the following loop prevents our randomNumber repeating itself and causing the same values to appear in our elements, which in turn causes the need to double click to get a new randomNumber.   if prev === new random, create a new random, if it doesn't equal anymore then return and carry on with function. The loop lets us check again whether it still is the same number, loop thru 10 times as the chance of it being the same 10 in a row is very unlikely. 
  randomNumber = Math.floor(Math.random() * playersArray.length);
  for(let i = 0; i < 10; i++){  
    if(previousNumber === randomNumber || playerIndex === randomNumber){   
      randomNumber = Math.floor(Math.random() * playersArray.length);
      if(previousNumber !== randomNumber && randomNumber !== playerIndex){
        ;
      }
    }
  }

  image.src = srcArray[randomNumber]; 
  name.innerHTML = nameArray[randomNumber];
  position.innerHTML = positionArray[randomNumber];
  bio.innerHTML = bioArray[randomNumber];

  playerIndex = randomNumber;   // this saves the current index of the player in the playersArray (via the mirroring playerIndex variable) so that when we press the next/previous after the random button, the browser knows where we are upto in the array, otherwise it resets back to the 0 values. 
}


//addEventListeners to the prev/next buttons

nextBtn.addEventListener('click', next);
previousBtn.addEventListener('click', previous)
randomBtn.addEventListener('click', random);