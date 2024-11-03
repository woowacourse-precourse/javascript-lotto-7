export const INPUT_CONFIG = {
  DELIMITER: ',',
};

export const LOTTO_CONFIG = {
  PRICE: 1000,
};

export const RANDOM_CONFIG = {
  START_NUMBER: 1,
  END_NUMBER: 45,
  RANDOM_NUMBER_AMOUNT: 6,
};

export const PRIZE_CONFIG = [
  { description: '', prize: 0 },
  { description: '3개 일치', prize: 5_000 },
  { description: '4개 일치', prize: 50_000 },
  { description: '5개 일치', prize: 1_500_000 },
  { description: '5개 일치, 보너스 볼 일치', prize: 30_000_000 },
  { description: '6개 일치', prize: 2_000_000_000 },
];
