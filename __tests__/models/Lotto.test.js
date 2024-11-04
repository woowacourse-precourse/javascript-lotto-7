import Lotto from '../../src/model/Lotto.js';
import { ERROR_MESSAGES } from '../../src/constants/messages.js';

describe('Lotto 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGES.INVALID_COUNT);

    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow(ERROR_MESSAGES.INVALID_COUNT);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGES.DUPLICATED_WINNING_NUMBER);
  });

  test('로또 번호가 1 ~ 45 범위를 초과하면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow(ERROR_MESSAGES.INVALID_WINNING_NUMBER);
  });

  test('로또 번호에 숫자가 아닌 값이 포함되면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 'A']);
    }).toThrow(ERROR_MESSAGES.INVALID_NUMBER);

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, null]);
    }).toThrow(ERROR_MESSAGES.INVALID_NUMBER);
  });

  test('로또 번호가 오름차순으로 정렬되어 생성된다.', () => {
    const lotto = new Lotto([3, 2, 1, 6, 5, 4]);
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
