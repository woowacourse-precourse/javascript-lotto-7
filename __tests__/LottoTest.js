import Lotto from '../src/Lotto.js';
import { ErrorMessage } from '../src/constants/ErrorMessage.js';

describe('유효한 배열 테스트', () => {
  test('1~45 범위 내의 중복 없는 숫자 배열은 정상적으로 처리된다', () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
  });
});

const errorCases = [
  { array: [1, 2, 3, 4, 5, 6, 7], message: ErrorMessage.NOT_6_NUMS },
  { array: [1, 2, 3, 4, , 5], message: ErrorMessage.NOT_6_NUMS },
  { array: [], message: ErrorMessage.NOT_6_NUMS },
  { array: [1, 2, 3, 4, 5, 5], message: ErrorMessage.DUPLICATED_NUM },
  { array: [1, 2, 3, 4, 5, 46], message: ErrorMessage.OVER_RANGE },
  { array: [1, 2, 3, 4, 5, 'a'], message: ErrorMessage.NOT_A_NUMBER },
];

describe('유효하지 않은 배열 테스트', () => {
  test.each(errorCases)('배열 %o이 유효하지 않을 때 %s 에러를 반환한다.', ({ array, message }) => {
    expect(() => {
      new Lotto(array);
    }).toThrowError(message);
  });
});
