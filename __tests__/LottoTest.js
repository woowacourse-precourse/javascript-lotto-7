import Lotto from '../src/Lotto.js';

import { LOTTO_LENGTH_ERROR_MESSAGE, DUPLICATE_NUMBER_ERROR_MESSAGE, NUMBER_OUT_OF_RANGE_ERROR_MESSAGE } from '../src/constants/message.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(LOTTO_LENGTH_ERROR_MESSAGE);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(DUPLICATE_NUMBER_ERROR_MESSAGE);
  });

  test('로또 번호에 1이상 45이하가 아닌 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow(NUMBER_OUT_OF_RANGE_ERROR_MESSAGE);
  });

  describe('당첨 로또와 사용자 로또 비교하기', () => {
    let lotto;
    beforeEach(() => {
      lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    });

    test('당첨 로또와 사용자 로또의 일치하는 숫자가 5개있으며 보너스 번호는 일치하지 않는다.', () => {
      expect(lotto.getMatchResult([5, 4, 1, 2, 9, 3], 11)).toEqual([5, false]);
    });
    test('당첨 로또와 사용자 로또의 일치하는 숫자가 6개있으며 보너스 번호는 일치하지 않는다.', () => {
      expect(lotto.getMatchResult([6, 5, 4, 1, 2, 3], 11)).toEqual([6, false]);
    });
    test('당첨 로또와 사용자 로또의 일치하는 숫자가 5개있으며 보너스 번호가 일치한다.', () => {
      expect(lotto.getMatchResult([1, 3, 5, 2, 9, 4], 6)).toEqual([5, true]);
    });
  });

  test('출력 형식에 맞게 로또 배열을 변경한다', () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getFormattedNumbers()).toBe('[1, 2, 3, 4, 5, 6]');
  });
});
