import { lottoInputErrorTestCase, lottoErrorTestCase } from '../src/constant/lottoTestCase.js';
import { validateNumbers } from '../src/Validator.js';

describe('로또 입력 테스트', () => {
  test.each(lottoInputErrorTestCase)(
    '$description 예외가 발생한다.',
    ({ numbers, errorMessage }) => {
      expect(() => validateNumbers(numbers)).toThrow(errorMessage);
    }
  );
});
