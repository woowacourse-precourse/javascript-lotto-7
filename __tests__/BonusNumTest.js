import BonusNum from '../src/BonusNum.js';
import { ErrorMessage } from '../src/constants/ErrorMessage.js';

describe('BonusNum 유효성 검사', () => {
  test('유효한 보너스 숫자는 정상적으로 생성된다', () => {
    const mockLottoNums = { getNumbers: jest.fn().mockReturnValue([1, 2, 3, 4, 5, 6]) };
    expect(() => {
      new BonusNum(7, mockLottoNums);
    }).not.toThrow();
  });
  test('로또 당첨번호와 중복되는 보너스 숫자는 오류를 반환한다', () => {
    const mockLottoNums = { getNumbers: jest.fn().mockReturnValue([1, 2, 3, 4, 5, 6]) };
    expect(() => {
      new BonusNum(3, mockLottoNums);
    }).toThrowError(ErrorMessage.EXIST_LOTTONUM);
  });
});

const errorCases = [
  { num: 'a', message: ErrorMessage.NOT_A_NUMBER },
  { num: 1000, message: ErrorMessage.OVER_RANGE },
  { num: '', message: ErrorMessage.EMPTY_INPUT },
  { num: -1, message: ErrorMessage.NEGATIVE_NUM },
];

describe('유효하지 않은 숫자 테스트', () => {
  test.each(errorCases)('숫자 %s이 유효하지 않을 때 %s 에러를 반환한다.', ({ num, message }) => {
    expect(() => {
      new BonusNum(num);
    }).toThrowError(message);
  });
});
