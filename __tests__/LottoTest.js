import Lotto from '../src/Lotto.js';
import { LOTTO_TEST_MESSAGES } from '../src/constants/testMessages.js';

describe(LOTTO_TEST_MESSAGES.LOTTO_CLASS_TEST, () => {
  test(LOTTO_TEST_MESSAGES.EXCEED_NUMBER_COUNT, () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  test(LOTTO_TEST_MESSAGES.DUPLICATE_NUMBER, () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  test(LOTTO_TEST_MESSAGES.COUNT_MATCHING_NUMBERS, () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.countMatchingNumbers([1, 2, 3, 7, 8, 9])).toBe(3);
    expect(lotto.countMatchingNumbers([4, 5, 6, 7, 8, 9])).toBe(3);
    expect(lotto.countMatchingNumbers([7, 8, 9, 10, 11, 12])).toBe(0);
  });

  test(LOTTO_TEST_MESSAGES.CHECK_BONUS_NUMBER, () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.containsBonusNumber(1)).toBe(true);
    expect(lotto.containsBonusNumber(7)).toBe(false);
  });
});
