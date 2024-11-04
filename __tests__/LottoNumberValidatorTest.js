import LottoNumberValidator from '../src/utils/LottoNumberValidator.js';
import { LOTTO_ERRORS } from '../src/constants/constants.js';

describe('LottoNumberValidator', () => {
  test('유효한 범위 내의 숫자 (1~45)에서는 에러가 발생하지 않는다', () => {
    expect(() => {
      LottoNumberValidator.validateLottoNumberRange(1);
      LottoNumberValidator.validateLottoNumberRange(45);
    }).not.toThrow();
  });

  test.each([
    [0, LOTTO_ERRORS.LOTTO_INVALID_NUMBER_RANGE],
    [46, LOTTO_ERRORS.LOTTO_INVALID_NUMBER_RANGE],
  ])(
    '유효하지 않은 범위의 숫자 %i 입력 시 에러 메시지 "%s"가 발생한다',
    (number, expectedError) => {
      expect(() => {
        LottoNumberValidator.validateLottoNumberRange(number);
      }).toThrow(expectedError);
    },
  );
});
