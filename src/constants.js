export const LOTTERY_PRIZE = [
  { match: 3, reward: 5000, desc: "3개 일치", count: 0 },
  { match: 4, reward: 50000, desc: "4개 일치", count: 0 },
  { match: 5, hasBonus: false, reward: 1500000, desc: "5개 일치", count: 0 },
  {
    match: 5,
    hasBonus: true,
    reward: 30000000,
    desc: "5개 일치, 보너스 볼 일치",
    count: 0,
  },
  { match: 6, reward: 2000000000, desc: "6개 일치", count: 0 },
];

export const MIN_LOTTERY_NUM = 1;
export const MAX_LOTTERY_NUM = 45;
export const LOTTERY_NUMBER_COUNT = 6;
export const PRICE_PER_LOTTO = 1000;
