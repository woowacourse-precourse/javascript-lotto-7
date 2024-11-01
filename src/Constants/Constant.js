const LOTTO_PRICE_UNIT = 1000;

const PURCHASE_MONEY_INITIAL_VALUE = 0;

const LOTTO_NUMBER_STANDARD = {
  min: 1,
  max: 45,
  length: 6,
  separator: ',',
};

const firstPrize = {
  rank: '1',
  match: '6',
  reward: 2000000000,
};

const secondPrize = {
  rank: '2',
  match: '5',
  reward: 30000000,
};

const thirdPrize = {
  rank: '3',
  match: '5',
  reward: 1500000,
};

const fourthPrize = {
  rank: '4',
  match: '4',
  reward: 50000,
};

const fifthPrize = {
  rank: '5',
  match: '3',
  reward: 5000,
};

const losing_ticket = {
  rank: '0',
  match: '0',
  reward: '0',
};

const PRIZE = [
  losing_ticket,
  firstPrize,
  secondPrize,
  thirdPrize,
  fourthPrize,
  fifthPrize,
];

export {
  LOTTO_NUMBER_STANDARD,
  LOTTO_PRICE_UNIT,
  PURCHASE_MONEY_INITIAL_VALUE,
  PRIZE,
};
