import Lotto from '../src/Lotto.js';
import { ERROR_MESSAGES } from '../src/constants/messages.js';
import LottoValidator from '../src/domain/LottoValidator.js';
import { LOTTO_CONDITION } from '../src/constants/constants.js';

describe('보너스 번호 테스트', () => {
  let lottoValidator;

  beforeEach(() => {
    lottoValidator = new LottoValidator();
  });

  test.each([['ㅁㄴㅇ'], ['@@'], ['10 000'], ['123abc']])(
    '숫자 외의 값 "%s"이 입력되어선 안된다.',
    (input) => {
      expect(() => {
        lottoValidator.validateBonusNumber(input, false);
      }).toThrow(`${ERROR_MESSAGES.numeric}`);
    },
  );

  test.each([
    [5, false],
    [7, true],
    [8, true],
  ])('보너스 번호는 중복되어선 안된다. - %s', (input, isValid) => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    if (!isValid) {
      expect(() => {
        const isDuplicate = lotto.hasBonusNumber(input);
        lottoValidator.validateBonusNumber(input, isDuplicate);
      }).toThrow(`${ERROR_MESSAGES.invalid_lotto_unique}`);
      return;
    }

    expect(() => {
      const isDuplicate = lotto.hasBonusNumber(input);
      lottoValidator.validateBonusNumber(input, isDuplicate);
    }).not.toThrow();
  });

  test.each([
    [1, true],
    [-1, false],
    [0, false],
    [46, false],
  ])(
    `보너스 번호 ${LOTTO_CONDITION.startRange}~${LOTTO_CONDITION.endRange} 사이의 값이다. - %s`,
    (input, isValid) => {
      if (!isValid) {
        expect(() => {
          lottoValidator.validateBonusNumber(input, false);
        }).toThrow(`${ERROR_MESSAGES.invalid_lotto_range}`);
        return;
      }

      expect(() => {
        lottoValidator.validateBonusNumber(input, false);
      }).not.toThrow();
    },
  );
});
