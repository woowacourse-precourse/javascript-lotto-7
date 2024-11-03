import {
  bonusNumberErrorTestCase,
  bonusNumberSuccessTestCase,
} from '../src/constant/bonusNumberTestCase.js';
import { validateBonusNumber } from '../src/Validator.js';

describe('보너스 번호 입력 테스트', () => {
  test.each(bonusNumberErrorTestCase)(
    '$description 예외가 발생한다.',
    ({ bonusNumber, errorMessage }) => {
      expect(() => validateBonusNumber(bonusNumber)).toThrow(errorMessage);
    }
  );

  test.each(bonusNumberSuccessTestCase)(
    '$description $expected를 반환한다.',
    async ({ bonusNumber, expected }) => {
      expect(validateBonusNumber(bonusNumber)).toEqual(expected);
    }
  );
});
