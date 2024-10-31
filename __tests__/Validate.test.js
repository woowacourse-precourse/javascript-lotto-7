import { validateInputMoney, validateLottoNumbers } from '../src/utils/validate.js';
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

describe('validateLottoNumbers() 검증 테스트', () => {
  const SUCCESS_CASES = [
    [1, 2, 3, 4, 5, 6],
    [1, 2, 3, 43, 44, 45],
    [12, 5, 26, 31, 30, 41],
  ];
  test.each(SUCCESS_CASES)(`성공 테스트`, (...input) => {
    expect(() => validateLottoNumbers(input)).not.toThrow();
  });

  const FAILED_CASES = [
    [[1, 2, 3, 4, 5, 6, 7], ERROR_MESSAGE.LOTTO_NUM_LENGTH],
    [[1, 2, 3, 4, 5], ERROR_MESSAGE.LOTTO_NUM_LENGTH],
    [[1, 2, 3, 4, 5, 5], ERROR_MESSAGE.LOTTO_NUM_DUPLICATION],
    [[1, 2, 'a', 4, 5, 45], ERROR_MESSAGE.LOTTO_NUM_TYPE],
    [[1, 2, NaN, 4, 5, 45], ERROR_MESSAGE.LOTTO_NUM_TYPE],
    [[1, 2, 3.5, 4, 5, 45], ERROR_MESSAGE.LOTTO_NUM_INTEGER],
    [[0, 2, 3, 4, 5, 45], ERROR_MESSAGE.LOTTO_NUM_RANGE],
    [[1, 2, 3, 4, 5, 46], ERROR_MESSAGE.LOTTO_NUM_RANGE],
    [[-1, 2, 3, 4, 5, 45], ERROR_MESSAGE.LOTTO_NUM_RANGE],
    [[50, 51, 52, 53, 54, 55], ERROR_MESSAGE.LOTTO_NUM_RANGE],
    [['1', '2', '    3', '4   ', '5', '6'], ERROR_MESSAGE.LOTTO_NUM_TYPE],
  ];
  test.each(FAILED_CASES)(`실패 테스트`, (input, errorMessage) => {
    expect(() => validateLottoNumbers(input)).toThrow(errorMessage);
  });
});
