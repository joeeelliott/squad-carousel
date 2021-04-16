// Below is a cleaned up, more readble and efficient version of the script.js code

// we have changed our object into an array of objects - can iterate through it directly without having to create new array variables. Also removed the names for each object as we can iterate through using index. 
let footballers = [
  {
    src: "images/pogba.jpg",
    name: "Paul Pogba",
    position: "Central Midfielder",
    bio: "Paul Pogba needs no introduction to Manchester United fans, having learned his trade at the club before blossoming into a world-class midfielder at Juventus. 197 appearances. 38 goals."
  },
  {
    src: "images/telles.jpg",
    name: "Alex Telles",
    position: "Left Back",
    bio: "In Alex Telles, Manchester United recruited a hugely experienced player who had already demonstrated his ability as a left-back in some of European football’s most competitive leagues. 19 appearances. 0 goals.",
  },
  {
    src: "images/bruno.jpg",
    name: "Bruno Fernandes",
    position: "Attacking Midfielder",
    bio: "Bruno completed his move to Old Trafford in January 2020 and was named the Sir Matt Busby Player of the Year for the season, despite playing just half of the campaign. 70 appearances. 36 goals."
  },
  {
    src: "images/cavani.jpg",
    name: "Edinson Cavani",
    position: "Striker",
    bio: "One of the most prolific strikers in European and international football during the 21st century, Uruguayan forward Edinson Cavani has a rich goalscoring pedigree. 29 appearances. 8 goals."
  },
  {
    src: "images/maguire.jpg",
    name: "Harry Maguire",
    position: "Centre Back",
    bio: "Always a colossal presence at the back, Harry Maguire has risen through the leagues to establish himself as one of the most reliable centre-backs in the game. 102 appearances. 5 goals."
  }
];

// fetch HTML elements the same
const image = document.querySelector('.image');
const name = document.querySelector('.name');
const position = document.querySelector('.position');
const bio = document.querySelector('.bio');

const previousBtn = document.querySelector('.previous');
const nextBtn = document.querySelector('.next');
const randomBtn = document.querySelector('.random');

//set starting item. This is equivalent to our playerIndex. currentItem makes more sense here 
let currentItem = 0;

//load initial item. This loads the first set of items in the window when the page loads, as currentItem is initially set to 0.
window.addEventListener("DOMContentLoaded", function(){
  showPerson(currentItem);  // this function defined below
});

// show person based on item. this function makes it re-usable for us
function showPerson(person){
  const item = footballers[person];  // we pass the value of currentItem into the footballers array which tells the computer which index in the array to save to variable item. 
  image.src = item.src;         // set the elements accordingly 
  name.textContent = item.name;
  position.textContent = item.position;
  bio.textContent = item.bio; 
}

// show next person
nextBtn.addEventListener('click', function(){
  currentItem ++;
  if(currentItem === footballers.length){
    currentItem = 0; 
  }
  showPerson(currentItem);
});

// show previous person
previousBtn.addEventListener('click', function(){
  currentItem --;
  if(currentItem < 0){
    currentItem = footballers.length - 1; 
  }
  showPerson(currentItem);
});

// the for loop is in place in case the randomNumber is repeated, which will cause us to have to double or maybe triple click to change values depending on how many times the randomNumber randomly repeats itself. if its the same, reassign the value to another randomNumber. if its not the same, continue. 
randomBtn.addEventListener('click', function(){
  let randomNumber = Math.floor(Math.random() * footballers.length);
  for(let i = 0; i < 10; i++){
    if(currentItem === randomNumber){
      randomNumber = Math.floor(Math.random() * footballers.length);
      if(currentItem !== randomNumber){
        ;
      }
    }
  } 
  currentItem = randomNumber;
  showPerson(currentItem);
});