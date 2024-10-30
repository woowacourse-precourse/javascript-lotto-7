import {
  ERROR_MESSAGE,
  LOTTO_NUMBER_LENGTH,
  PRICE_RANGE,
  RANGE,
} from '../src/constant/constants.js';
import {
  checkDuplicateBonusNumber,
  checkDuplicateWinningNumbers,
  checkIntegerWinningNumbers,
  checkLengthWinningNumbers,
  checkMaxPrice,
  checkMinPrice,
  checkNumberPrice,
  checkRangeWinningNumbers,
  checkUnitPrice,
} from '../src/util/validationUtil.js';

function errorTest({ title, callback, input1, input2, message }) {
  test(title, () => {
    expect(() => callback(input1, input2)).toThrow(message);
  });
}

describe('구입 금액 유효성 검사 단위 테스트', () => {
  errorTest({
    title: '구입 금액이 숫자가 아닌 경우',
    callback: checkNumberPrice,
    input1: 'ab',
    message: ERROR_MESSAGE.NUMBER_PRICE,
  });

  errorTest({
    title: `구입 금액이 ${PRICE_RANGE.MIN.toLocaleString('ko-KR')}원 미만인 경우`,
    callback: checkMinPrice,
    input1: 900,
    message: ERROR_MESSAGE.MIN_PRICE,
  });

  errorTest({
    title: `구입 금액이 ${PRICE_RANGE.MAX.toLocaleString('ko-KR')}원 이상인 경우`,
    callback: checkMaxPrice,
    input1: 1100000,
    message: ERROR_MESSAGE.MAX_PRICE,
  });

  errorTest({
    title: `구입 금액이  ${PRICE_RANGE.MIN.toLocaleString('ko-KR')}원 단위가 아닌 경우`,
    callback: checkUnitPrice,
    input1: 2100,
    message: ERROR_MESSAGE.UNIT_PRICE,
  });
});

describe('당첨 번호 유효성 검사 단위 테스트', () => {
  errorTest({
    title: `당첨 번호 배열의 길이가 ${LOTTO_NUMBER_LENGTH}이 아닌 경우`,
    callback: checkLengthWinningNumbers,
    input1: [1, 2, 3, 4, 5, 6, 7],
    message: ERROR_MESSAGE.LENGTH_WINNING_NUMBERS,
  });

  errorTest({
    title: '당첨 번호에 중복된 값이 있는 경우',
    callback: checkDuplicateWinningNumbers,
    input1: [1, 1, 3, 4, 5, 6],
    message: ERROR_MESSAGE.DUPLICATE_WINNIG_NUMBERS,
  });

  errorTest({
    title: '당첨 번호 숫자가 정수가 아닌 경우',
    callback: checkIntegerWinningNumbers,
    input1: [1, 5, 7.5, 'ab', 10, 34],
    message: ERROR_MESSAGE.INTEGER_WINNING_NUMBERS,
  });

  errorTest({
    title: `당첨 번호 숫자가 ${RANGE.MIN}~${RANGE.MAX} 사이 숫자가 아닌 경우`,
    callback: checkRangeWinningNumbers,
    input1: [1, 2, 3, 4, 5, 1000],
    message: ERROR_MESSAGE.RANGE_WINNING_NUMBERS,
  });
});

describe('보너스 번호 유효성 검사 단위 테스트', () => {
  errorTest({
    title: '보너스 번호와 당첨 번호에 중복된 값이 있는 경우',
    callback: checkDuplicateBonusNumber,
    input1: [1, 2, 3, 4, 5, 6],
    input2: 6,
    message: ERROR_MESSAGE.DUPLICATE_BONUS_NUMBERS,
  });

  errorTest({
    title: '보너스 번호가 정수가 아닌 경우',
    callback: checkIntegerWinningNumbers,
    input1: 10.5,
    message: ERROR_MESSAGE.INTEGER_BONUS_NUMBERS,
  });

  errorTest({
    title: `보너스 번호가 ${RANGE.MIN}~${RANGE.MAX} 사이 숫자가 아닌 경우`,
    callback: checkRangeWinningNumbers,
    input1: 1000,
    message: ERROR_MESSAGE.RANGE_BONUS_NUMBERS,
  });
});
