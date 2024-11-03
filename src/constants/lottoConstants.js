const LOTTO_NUMBER_COUNT = 6;
const LOTTO_NUMBER_RANGE = { MIN: 1, MAX: 45 }; // 로또 번호 범위
const LOTTO_PRICE_UNIT = 1000;

const WINNING_RESULT = [
  {
    count: 3,
    bonus: false,
    price: "5,000",
  },
  {
    count: 4,
    bonus: false,
    price: "50,000",
  },
  {
    count: 5,
    bonus: false,
    price: "1,500,000",
  },
  {
    count: 5,
    bonus: true,
    price: "30,000,000",
  },
  {
    count: 6,
    bonus: false,
    price: "2,000,000,000",
  },
];

export {
  LOTTO_NUMBER_COUNT,
  LOTTO_NUMBER_RANGE,
  LOTTO_PRICE_UNIT,
  WINNING_RESULT,
};
