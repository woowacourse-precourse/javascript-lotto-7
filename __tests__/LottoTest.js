import Lotto from '../src/Lotto';
import { ERROR_MESSAGES } from '../src/datas/error.js';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGES.LOTTO_COUNT);
  });

  test('로또 당첨 번호의 개수가 6개보다 작다면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5]);
    }).toThrow(ERROR_MESSAGES.LOTTO_COUNT);
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(ERROR_MESSAGES.DUPLICATE_NUMBERS);
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
  test('로또 당첨 번호는 1~45 범위 내의 숫자여야 한다.', () => {
    expect(() => {
      new Lotto([0, 1, 2, 3, 4, 5]);
    }).toThrow(ERROR_MESSAGES.INVALID_WINNING_NUMBERS);

    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 46]);
    }).toThrow(ERROR_MESSAGES.INVALID_WINNING_NUMBERS);
  });

  test('로또 당첨 번호들은 서로 중복될 수 없다.', () => {
    expect(() => {
      new Lotto([1, 1, 3, 4, 5, 6]);
    }).toThrow(ERROR_MESSAGES.DUPLICATE_NUMBERS);
  });
});
