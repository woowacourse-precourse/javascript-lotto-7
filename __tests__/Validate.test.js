import { validateInputMoney } from '../src/utils/validate.js';
import { ERROR_MESSAGE } from '../src/constant/index.js';

describe('validateInputMoney() 검증 테스트', () => {
  const SUCCESS_CASES = ['1000', '2000', '9000', '111000'];
  test.each(SUCCESS_CASES)(`성공 테스트`, (input) => {
    expect(() => validateInputMoney(input)).not.toThrow();
  });

  const FAILED_CASES = [
    ['', ERROR_MESSAGE.EMPTY],
    [undefined, ERROR_MESSAGE.EMPTY],
    [null, ERROR_MESSAGE.EMPTY],
    ['1111', ERROR_MESSAGE.NOT_DIVIDED_NUMBER],
    ['1a1a', ERROR_MESSAGE.NOT_A_NUMBER],
    ['1000+1000', ERROR_MESSAGE.NOT_A_NUMBER],
  ];
  test.each(FAILED_CASES)(`실패 테스트`, (input, errorMessage) => {
    expect(() => validateInputMoney(input)).toThrow(errorMessage);
  });
});
