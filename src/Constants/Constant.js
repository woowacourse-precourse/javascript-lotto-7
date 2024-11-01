const LOTTO_PRICE_UNIT = 1000;

const PURCHASE_MONEY_INITIAL_VALUE = 0;

const LOTTO_NUMBER_STANDARD = {
  min: 1,
  max: 45,
  length: 6,
  separator: ',',
};

const firstWinner = {
  rank: '1',
  match: '6',
  reward: 2000000000,
};

const secondWinner = {
  rank: '2',
  match: '5',
  reward: 30000000,
};

const thirdWinner = {
  rank: '3',
  match: '5',
  reward: 1500000,
};

const fourthWinner = {
  rank: '4',
  match: '4',
  reward: 50000,
};

const fifthWinner = {
  rank: '5',
  match: '3',
  reward: 5000,
};

const losing_ticket = {
  rank: '0',
  match: '0',
  reward: '0',
};

const WINNER = [
  losing_ticket,
  firstWinner,
  secondWinner,
  thirdWinner,
  fourthWinner,
  fifthWinner,
];

export {
  LOTTO_NUMBER_STANDARD,
  LOTTO_PRICE_UNIT,
  PURCHASE_MONEY_INITIAL_VALUE,
  WINNER,
};
