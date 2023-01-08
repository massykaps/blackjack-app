//* scenario 1//

function deal() {
  // generate two random cards
  const playerHand = hit([]);
  return hit(playerHand);
};

//* scenario 2 //

function hit(playerHand) {
  // generate a random card
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
  const suits = ['hearts', 'spades', 'diamonds', 'clubs'];
  const newCard = {
    rank: ranks[Math.floor(Math.random() * ranks.length)],
    suit: suits[Math.floor(Math.random() * suits.length)]
  };
  return [...playerHand, newCard];
}

//* scenario 3 //

function stand() {
  // do nothing
};


//* scenario 4 //

function getScore(playerHand) {
  // calculate the score of the player's hand
  let score = 0;
  let numAces = 0;
  for (const card of playerHand) {
    if (card.rank === 'ace') {
      numAces += 1;
      score += 11;
    } else if (['jack', 'queen', 'king'].includes(card.rank)) {
      score += 10;
    } else {
      score += parseInt(card.rank, 10);
    }
  }
  // adjust score for aces if necessary
  while (score > 21 && numAces > 0) {
    score -= 10;
    numAces -= 1;
  }
  return score;
}

function isValidHand(playerHand) {
  // check if the player's score is 21 or less
  return getScore(playerHand) <= 21;
};

//*scenario 5 //



function getUpdated(playerHand) {
  // calculate the score of the player's hand
  let score = 0;
  let numAces = 0;
  for (const card of playerHand) {
    if (card.rank === 'ace') {
      numAces += 1;
      score += 11;
    } else if (['jack', 'queen', 'king'].includes(card.rank)) {
      score += 10;
    } else {
      score += parseInt(card.rank, 10);
    }
  }
  // adjust score for aces if necessary
  while (score > 21 && numAces > 0) {
    score -= 10;
    numAces -= 1;
  }
  return score;
}

function isBust(playerHand) {
  // check if the player's score is 22 or more
  return getScore(playerHand) >= 22;
};


//** SCENARIO 6 */


function getScore6(playerHand) {
  // calculate the score of the player's hand
  let score = 0;
  let numAces = 0;
  for (const card of playerHand) {
    if (card.rank === 'ace') {
      numAces += 1;
      score += 11;
    } else if (['jack', 'queen', 'king'].includes(card.rank)) {
      score += 10;
    } else {
      score += parseInt(card.rank, 10);
    }
  }
  // adjust score for aces if necessary
  while (score > 21 && numAces > 0) {
    score -= 10;
    numAces -= 1;
  }
  return score;
};


//** SCENARIO 7 *//

function getScore7(playerHand) {
  // calculate the score of the player's hand
  let score = 0;
  let numAces = 0;
  for (const card of playerHand) {
    if (card.rank === 'ace') {
      numAces += 1;
      score += 11;
    } else if (['jack', 'queen', 'king'].includes(card.rank)) {
      score += 10;
    } else {
      score += parseInt(card.rank, 10);
    }
  }
  // adjust score for aces if necessary
  while (score > 21 && numAces > 0) {
    score -= 10;
    numAces -= 1;
  }
  return score;
};

//** SCENARIO 8 */


function getScore8(playerHand) {
  // calculate the score of the player's hand
  let score = 0;
  let numAces = 0;
  for (const card of playerHand) {
    if (card.rank === 'ace') {
      numAces += 1;
      score += 11;
    } else if (['jack', 'queen', 'king'].includes(card.rank)) {
      score += 10;
    } else {
      score += parseInt(card.rank, 10);
    }
  }
  // adjust score for aces if necessary
  while (score > 21 && numAces > 0) {
    score -= 10;
    numAces -= 1;
  }
  return score;
};
  
  module.exports = {
        deal,
        stand,
        hit,
        getScore,
        isValidHand,
        getUpdated,
        isBust,
        getScore6,
        getScore7,
        getScore8,
      };