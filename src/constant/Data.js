const LOTTO_DATA = Object.freeze({
  minNum: 1,
  maxNum: 45,
  lottoLength: 6,
  lottoPrice: 1000,
});

const PRIZE_NAME = Object.freeze({
  first: "prizeFirst",
  second: "prizeSecond",
  third: "prizeThird",
  fourth: "prizeFourth",
  fifth: "prizeFifth",
});

const PRIZE_CHECK = Object.freeze({
  [PRIZE_NAME.first]: 6,
  [PRIZE_NAME.second]: 5,
  [PRIZE_NAME.third]: 5,
  [PRIZE_NAME.fourth]: 4,
  [PRIZE_NAME.fifth]: 3,
});

const PRIZE_AMOUNT = Object.freeze({
  [PRIZE_NAME.first]: 2000000000,
  [PRIZE_NAME.second]: 30000000,
  [PRIZE_NAME.third]: 1500000,
  [PRIZE_NAME.fourth]: 50000,
  [PRIZE_NAME.fifth]: 5000,
});

export { LOTTO_DATA, PRIZE_NAME, PRIZE_CHECK, PRIZE_AMOUNT };
