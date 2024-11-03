import {
  lottoInputErrorTestCase,
  lottoInputSuccessTestCase,
} from '../src/constant/testCases/lottoTestCase.js';
import { validateNumbers } from '../src/Validator.js';

describe('로또 입력 테스트', () => {
  test.each(lottoInputErrorTestCase)(
    '$description 예외가 발생한다.',
    ({ numbers, errorMessage }) => {
      expect(() => validateNumbers(numbers)).toThrow(errorMessage);
    }
  );

  test.each(lottoInputSuccessTestCase)(
    '$description $expected를 반환한다.',
    async ({ numbers, expected }) => {
      expect(validateNumbers(numbers)).toEqual(expected);
    }
  );
});
