const gameContainer = document.getElementById("card");
const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
];
const cardPickList = [...COLORS, ...COLORS];
//this cardpicklist doubles the array this way aint gotta
//double type same items
const cardCount = cardPickList.length;
//this const will be used later func
let score = 0;
let chosenCard = null;
let endOfTurn = false;
let activeCard = null;//take out???
const reset = document.querySelector('.reset');
let scoreboard = document.querySelector('.scoreboard');

card.addEventListener('click', function() {
  score++;
  
  scoreboard.textContent = `Cards clicked: ${score}`;
  console.log(score);
});//for the score count



function buildCard(color) {
  const card = document.createElement('div');
//adding class of card to the new divs created
  card.classList.add('card');
  card.setAttribute('data-color', color); 
  card.setAttribute('data-revealed', 'false');//this is saying cards have not been revealed yet
  
  card.addEventListener("click", () => {
    const revealed = card.getAttribute('data-revealed');

    if (endOfTurn || revealed === true
      || card === activeCard
  
    ) {
    return;//this prevents user from choosing extra cards
  }
  card.style.backgroundColor = color;
  
  if(!activeCard) {
    activeCard = card;
    //this is saying user is mid turn
    return;
    //code exits awaiting their choice
  }
    const colorMatch = activeCard.getAttribute('data-color');
    
    if(colorMatch === color) {
      card.setAttribute('data-revealed', 'true');
       //now user cant click on previous matched colors
       activeCard.setAttribute('data-revealed', 'true');

       activeCard = null;
       endOfTurn = false;
      //have to add these again for every new scenario like user not matching cards
      //or user does find a match always have to reset the 'turns'
      if(count === cardCount.length) {
        alert("Congrats! You win hit reset to play again!");
      } 
      return; //exit game
    }endOfTurn = true;
    
    //if code gets this far users turn is over
  setTimeout(() => {
    activeCard.style.backgroundColor = null;
    card.style.backgroundColor = null;
    //bellow need to add a new turn otherwise can't choose more than once
    endOfTurn = false;
    activeCard = null;
  }, 1000);
  //during timeout its resetting the two 'turns'
});
    card.style.height = "75px";
  return card;
}

//this function below to make the cards
for(let i = 0; i < cardCount; i++) {
  //the below randindex is to show a random color under card
  const randIndex = Math.floor(Math.random() * cardPickList.length);
  //color is the color being chosen randomly from array
  const color = cardPickList[randIndex];
  //the splice will only allow the same color picked 2x the 1 means to remove single elmnt
  const card = buildCard(color);
  //card is using the func made to make the div itself an add all it attributes
  cardPickList.splice(randIndex, 1);
  //this is adding our new card to
  gameContainer.appendChild(card);
}
