import LottoPrice from '../src/LottoPrice.js';
import { ErrorMessage } from '../src/constants/ErrorMessage';

describe('유효한 로또 금액 테스트', () => {
  test('조건에 맞는 금액을 입력하면 정상적으로 처리된다.', () => {
    const validAmount = 1000;
    expect(() => {
      new LottoPrice(validAmount);
    }).not.toThrow();
  });
});

const errorCases = [
  { number: '', message: ErrorMessage.EMPTY_INPUT },
  { number: '1500', message: ErrorMessage.NOT_MULTIPLE_OF_1000 },
  { number: '1000a', message: ErrorMessage.NOT_A_NUMBER },
  { number: '5000000', message: ErrorMessage.TOO_BIG_PRICE },
  { number: '0', message: ErrorMessage.ZERO_PRICE },
  { number: '-1', message: ErrorMessage.NEGATIVE_NUM },
];

describe('유효하지 않은 로또 금액 테스트', () => {
  test.each(errorCases)(
    '입력값 %s이 유효하지 않을 때 %s 에러를 반환한다.',
    ({ number, message }) => {
      expect(() => {
        new LottoPrice(number);
      }).toThrowError(message);
    },
  );
});
