import Lotto from '../src/model/Lotto';
import { ERROR_MESSAGES } from '../src/constant/constants';

describe('로또 클래스 테스트', () => {
  test('로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow('[ERROR]');
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test('로또 번호에 중복된 숫자가 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow('[ERROR]');
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
  test('로또 번호의 개수가 6개 미만이면 예외가 발생한다.', () => {
    const NUMBERS = [1, 2, 3, 4, 5];
    expect(() => {
      new Lotto(NUMBERS);
    }).toThrow('[ERROR]');
  });

  test('로또 번호 중 숫자가 아닌 값이 있다면 예외가 발생한다.', () => {
    const NUMBERS = ['*'];

    expect(() => {
      new Lotto(NUMBERS);
    }).toThrow(ERROR_MESSAGES.LOTTO.NOT_A_NUMBER);
  });

  test('로또 번호가 1부터 45 사이의 숫자가 아니라면 예외가 발생한다.', () => {
    const NUMBERS = [1, 2, 3, 4, 5, 77];

    expect(() => {
      new Lotto(NUMBERS);
    }).toThrow('[ERROR]');
  });
});
