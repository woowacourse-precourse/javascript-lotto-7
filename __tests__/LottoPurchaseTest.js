import LottoValidator from '../src/domain/LottoValidator.js';
import { ERROR_MESSAGES } from '../src/constants/messages.js';

describe('로또 구매 테스트', () => {
  let lottoValidator;

  beforeEach(() => {
    lottoValidator = new LottoValidator();
  });

  test('구매 금액이 빈 값이 입력되어선 안된다.', () => {
    expect(() => {
      lottoValidator.validatePurchaseAmount('');
    }).toThrow(`${ERROR_MESSAGES.empty}`);
  });

  test.each([['ㅁㄴㅇ'], ['@@'], ['10 000'], ['123abc']])(
    '숫자 외의 값 "%s"이 입력되어선 안된다.',
    (input) => {
      expect(() => {
        lottoValidator.validatePurchaseAmount(input);
      }).toThrow(`${ERROR_MESSAGES.numeric}`);
    },
  );

  test.each([['-10000'], ['0']])(
    '양수가 아닌 값 "%s"이 입력되어선 안된다.',
    (input) => {
      expect(() => {
        lottoValidator.validatePurchaseAmount(input);
      }).toThrow(`${ERROR_MESSAGES.positive}`);
    },
  );

  test.each([
    ['10000', true],
    ['100000000', true],
    ['10500', false],
    ['99999999', false],
  ])(
    '구매 금액 "%s"가 유효성 검사에서 %s 결과를 반환해야 한다.',
    (input, isValid) => {
      if (!isValid) {
        expect(() => {
          lottoValidator.validatePurchaseAmount(input);
        }).toThrow(`${ERROR_MESSAGES.invalid_amount}`);
        return;
      }

      expect(() => {
        lottoValidator.validatePurchaseAmount(input);
      }).not.toThrow();
    },
  );

  test('로또 구입 금액은 100,000,000원을 초과해선 안된다.', () => {
    expect(() => {
      lottoValidator.validatePurchaseAmount('200000000');
    }).toThrow(`${ERROR_MESSAGES.exceed_range}`);
  });
});
