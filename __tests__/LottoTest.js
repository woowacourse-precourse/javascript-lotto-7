import {
  LOTTO_NUMBER_ERROR,
  NOT_INVALID_INPUT,
} from '../src/constants/errorMessage.js';
import Lotto from '../src/Lotto.js';

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
  test('로또 번호에 숫자가 아닌 값이 있으면 예외가 발생한다.', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 'a']);
    }).toThrow(LOTTO_NUMBER_ERROR.NOT_NUMBER);
  });

  test.each([[[0, 1, 2, 3, 4, 5]], [[1, 2, 3, 4, 5, 46]]])(
    '로또 번호가 1부터 45 사이 이외의 숫자가 있으면 예외가 발생한다.',
    (numbers) => {
      expect(() => {
        new Lotto(numbers);
      }).toThrow(LOTTO_NUMBER_ERROR.NOT_RANGE);
    }
  );

  test.each([null, undefined, 123, 'not an array', { a: 1 }])(
    '로또 클래스에 배열이 아닌 값(%p)이 들어가면 예외가 발생한다.',
    (input) => {
      expect(() => {
        new Lotto(input);
      }).toThrow(NOT_INVALID_INPUT);
    }
  );
});
