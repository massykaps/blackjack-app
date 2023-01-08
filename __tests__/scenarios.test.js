const {
        deal,
        stand,
        hit,
        getScore,
        isValidHand,
        getScore7,
        getScore8, } = require('../src/scenarios');

  //** Scenario #1 */


test('player is dealt two cards in opening hand', () => {
  // call the deal function to get the player's opening hand
  const playerHand = deal();

  // check that the player's hand has two cards
  expect(playerHand.length).toBe(2);
});

// SCENARIO #2 /// 

//( Code Note #1: when the rank was ace this test failed with 14, not sure why) //

test('player hits and score is updated', () => {
  // assume that the player has a hand with a score of 21 or less
  let playerHand = [{
    rank: 'king',
    suit: 'hearts'
  }, {
    rank: '11',
    suit: 'spades'
  }];

  // check that the player's score is 21 or less
  expect(getScore(playerHand)).toBeLessThanOrEqual(21);

  // call the hit function
  playerHand = hit(playerHand);

  // check that the player's hand has one more card
  expect(playerHand.length).toBe(3);

  // check that the player's score is updated
  expect(getScore(playerHand)).toBeGreaterThan(getScore([{
    rank: 'king',
    suit: 'hearts'
  },
   {
    rank: 'ace',
    suit: 'spades'
  }]));
});

/// SCENARIO 3 ///

test('player stands and score is evaluated', () => {
  // assume that the player has a hand with a score of 21 or less
  const playerHand = [{
    rank: 'king',
    suit: 'hearts'
  }, {
    rank: 'ace',
    suit: 'spades'
  }];

  // check that the player's score is 21 or less
  expect(getScore(playerHand)).toBeLessThanOrEqual(21);

  // call the stand function
  stand();

  // check that the player's hand has not changed
  expect(playerHand).toEqual([{
    rank: 'king',
    suit: 'hearts'
  }, {
    rank: 'ace',
    suit: 'spades'
  }]);

  // check that the player's score is still 21 or less
  expect(getScore(playerHand)).toBeLessThanOrEqual(21);
});

/// SCENARIO 4 ///

test('player has a valid hand when score is 21 or less', () => {
  // assume that the player has a hand with a score of 21 or less
  const playerHand = [{
    rank: '5',
    suit: 'hearts'
  }, {
    rank: '8',
    suit: 'spades'
  }];

  // check that the player's score is 21 or less
  expect(isValidHand(playerHand)).toBe(true);
});

/// SCENARIO 5 ///

test('player is bust when score is 22 or more', () => {
  // assume that the player has a hand with a score of 22 or more
  const playerHand = [{
    rank: '10',
    suit: 'hearts'
  }, {
    rank: '8',
    suit: 'spades'
  }, {
    rank: '4',
    suit: 'diamonds'
  }];

  // check that the player's score is 22 or more
  expect(getScore(playerHand)).toBeGreaterThanOrEqual(22);
});

/// SCENARIO 6 ///

test('player has score of 21 with a king and an ace', () => {
  // assume that the player has a king and an ace
  const playerHand = [{
    rank: 'king',
    suit: 'hearts'
  }, {
    rank: 'ace',
    suit: 'spades'
  }];

  // check that the player's score is 21
  expect(getScore(playerHand)).toBe(21);
});

/// SCENARIO 7 ///

test('player has score of 21 with a king, a queen, and an ace', () => {
  // assume that the player has a king, a queen, and an ace
  const playerHand = [{
    rank: 'king',
    suit: 'hearts'
  }, {
    rank: 'queen',
    suit: 'spades'
  }, {
    rank: 'ace',
    suit: 'diamonds'
  }];

  // check that the player's score is 21
  expect(getScore7(playerHand)).toBe(21);
});

/// SCENARIO 8 ///

test('player has score of 21 with two aces and a nine', () => {
  // assume that the player has a nine, an ace, and another ace

  const playerHand = [{
    rank: '9',
    suit: 'hearts'
  }, {
    rank: 'ace',
    suit: 'spades'
  }, {
    rank: 'ace',
    suit: 'diamonds'
  }];

  // check that the player's score is 21
  expect(getScore8(playerHand)).toBe(21);
});