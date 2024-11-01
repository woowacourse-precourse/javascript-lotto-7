import Lotto from '../src/Lotto.js';
import ERROR_MESSAGES from '../src/Error/Error.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow(ERROR_MESSAGES.lotteryNumber.NOT_ENOUGH_ELEMENT);

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGES.lotteryNumber.NOT_ENOUGH_ELEMENT);
  });

  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGES.lotteryNumber.DUPLICATED_NUMBER);
  });

  test('로또 번호가 1에서 45 범위를 벗어나면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([0, 2, 3, 4, 5, 6]);
    }).toThrow(ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED);

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow(ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_IN_RANGE_ALLOWED);
  });

  test('로또 번호가 정수가 아니면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, '6']);
    }).toThrow(ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED);

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6.5]);
    }).toThrow(ERROR_MESSAGES.lotteryNumber.ONLY_NUMBER_ALLOWED);
  });

  test('로또 번호 배열이 비어있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([]);
    }).toThrow(ERROR_MESSAGES.lotteryNumber.NOT_ENOUGH_ELEMENT);
  });

  test('올바른 로또 번호가 주어지면 예외가 발생하지 않는다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
  });
});
