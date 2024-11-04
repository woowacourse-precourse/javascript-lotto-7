const PRIZE = {
  1: '2,000,000,000',
  2: '30,000,000',
  3: '1,500,000',
  4: '50,000',
  5: '5,000',
};

const LOTTO = Object.freeze({
  ...PRIZE,
  MIN_LOTTO_NUMBER: 1,
  MAX_LOTTO_NUMBER: 45,
  LOTTO_PRICE: 1000,
  BONUS_NUMBER_COUNT: 1,
  LOTTO_NUMBER_COUNT: 6,
  WINNING_NUMBER_DELIMETER: ',',
});

export default LOTTO;
