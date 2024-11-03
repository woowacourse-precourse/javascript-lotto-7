export const TEST_NUMBERS = {
  VALID_NUMBERS: [1, 2, 3, 4, 5, 6],
  INVALID_COUNT: [1, 2, 3, 4, 5, 6, 7],
  DUPLICATE_NUMBERS: [1, 2, 3, 4, 5, 5],
  OUT_OF_RANGE_LOW: 0,
  OUT_OF_RANGE_HIGH: 46,
};

export const TEST_INPUTS = {
  VALID_AMOUNT: '1000',
  INVALID_AMOUNT: '1500',
  INVALID_NUMBER: '1000a',
  VALID_WINNING_NUMBERS: '1,2,3,4,5,6',
  INVALID_FORMAT_NUMBERS: '1 2 3 4 5 6',
  INVALID_COUNT_NUMBERS: '1,2,3,4,5',
};

export const TEST_MATCH_RESULTS = {
  FIFTH_RANK: [{ matchCount: 3, hasBonus: false }],
  FOURTH_RANK: [{ matchCount: 4, hasBonus: false }],
  THIRD_RANK: [{ matchCount: 5, hasBonus: false }],
  SECOND_RANK: [{ matchCount: 5, hasBonus: true }],
  FIRST_RANK: [{ matchCount: 6, hasBonus: false }],
  NO_WINS: [
    { matchCount: 2, hasBonus: false },
    { matchCount: 1, hasBonus: false },
    { matchCount: 0, hasBonus: false },
  ],
  MULTIPLE_WINS: [
    { matchCount: 3, hasBonus: false },
    { matchCount: 3, hasBonus: false },
    { matchCount: 4, hasBonus: false },
    { matchCount: 5, hasBonus: true },
  ],
};
