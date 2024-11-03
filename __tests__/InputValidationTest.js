import { LOTTO_CONFIG, RANDOM_CONFIG, INPUT_CONFIG } from '../src/constant/config';
import { lottoAmountValidator, lottoNumbersValidator, lottoBonusNumberValidator } from '../src/util/validation';

describe('lottoAmountValidator 유효성 검사', () => {
  describe('isPriceInteger 메서드', () => {
    test.each([
      [5000, { success: true, message: '' }],
      [-1000, { success: false, message: '구매 금액이 유효하지 않습니다.' }],
      ['abc', { success: false, message: '구매 금액이 유효하지 않습니다.' }],
    ])('입력 값 %p일 때, %p 반환', (input, expected) => {
      expect(lottoAmountValidator.isPriceInteger(input)).toEqual(expected);
    });
  });

  describe('isPriceDivideByUnit 메서드', () => {
    test.each([
      [3000, { success: true, message: '' }],
      [2500, { success: false, message: `구매 금액은 ${LOTTO_CONFIG.PRICE}원 단위로 입력해주세요.` }],
      ['abc', { success: false, message: `구매 금액은 ${LOTTO_CONFIG.PRICE}원 단위로 입력해주세요.` }],
    ])('입력 값 %p일 때, %p 반환', (input, expected) => {
      expect(lottoAmountValidator.isPriceDivideByUnit(input)).toEqual(expected);
    });
  });
});

describe('lottoNumbersValidator 유효성 검사', () => {
  describe('isLottoNumbersSplitByDelimiter 메서드', () => {
    test.each([
      ['1,2,3,4,5,6', { success: true, message: '' }],
      ['123456', { success: false, message: `당첨 번호는 ${INPUT_CONFIG.DELIMITER} 기준으로 구분해주세요` }],
    ])('입력 값 %p일 때, %p 반환', (input, expected) => {
      expect(lottoNumbersValidator.isLottoNumbersSplitByDelimiter(input)).toEqual(expected);
    });
  });

  describe('isLottoNumbersValidLength 메서드', () => {
    test.each([
      ['1,2,3,4,5,6', { success: true, message: '' }],
      ['1,2,3,4,5', { success: false, message: `${RANDOM_CONFIG.RANDOM_NUMBER_AMOUNT}개의 당첨번호를 입력해주세요.` }],
      [
        '1,2,3,4,5,6,7',
        { success: false, message: `${RANDOM_CONFIG.RANDOM_NUMBER_AMOUNT}개의 당첨번호를 입력해주세요.` },
      ],
    ])('입력 값 %p일 때, %p 반환', (input, expected) => {
      expect(lottoNumbersValidator.isLottoNumbersValidLength(input)).toEqual(expected);
    });
  });

  describe('isLottoNumbersInRange 메서드', () => {
    test.each([
      ['1,2,3,4,5,6', { success: true, message: '' }],
      [
        '0,2,3,4,5,6',
        {
          success: false,
          message: `당첨 번호는 ${RANDOM_CONFIG.START_NUMBER} ~ ${RANDOM_CONFIG.END_NUMBER} 사이의 값으로 입력해주세요.`,
        },
      ],
      [
        '1,2,3,4,5,46',
        {
          success: false,
          message: `당첨 번호는 ${RANDOM_CONFIG.START_NUMBER} ~ ${RANDOM_CONFIG.END_NUMBER} 사이의 값으로 입력해주세요.`,
        },
      ],
    ])('입력 값 %p일 때, %p 반환', (input, expected) => {
      expect(lottoNumbersValidator.isLottoNumbersInRange(input)).toEqual(expected);
    });
  });

  describe('isLottoNumbersDuplicated 메서드', () => {
    test.each([
      ['1,2,3,4,5,6', { success: true, message: '' }],
      ['1,2,3,4,5,5', { success: false, message: '당첨 번호는 중복될 수 없습니다.' }],
    ])('입력 값 %p일 때, %p 반환', (input, expected) => {
      expect(lottoNumbersValidator.isLottoNumbersDuplicated(input)).toEqual(expected);
    });
  });
});

describe('lottoBonusNumberValidator 유효성 검사', () => {
  describe('isLottoBonusNumberValid 메서드', () => {
    test.each([
      ['5', { success: true, message: '' }],
      ['-1', { success: false, message: '보너스 번호가 유효하지 않습니다.' }],
      ['abc', { success: false, message: '보너스 번호가 유효하지 않습니다.' }],
    ])('입력 값 %p일 때, %p 반환', (input, expected) => {
      expect(lottoBonusNumberValidator.isLottoBonusNumberValid(input)).toEqual(expected);
    });
  });

  describe('isLottoBonusNumberInRange 메서드', () => {
    test.each([
      ['5', { success: true, message: '' }],
      [
        '0',
        {
          success: false,
          message: `당첨 번호는 ${RANDOM_CONFIG.START_NUMBER} ~ ${RANDOM_CONFIG.END_NUMBER} 사이의 값으로 입력해주세요.`,
        },
      ],
      [
        '46',
        {
          success: false,
          message: `당첨 번호는 ${RANDOM_CONFIG.START_NUMBER} ~ ${RANDOM_CONFIG.END_NUMBER} 사이의 값으로 입력해주세요.`,
        },
      ],
    ])('입력 값 %p일 때, %p 반환', (input, expected) => {
      expect(lottoBonusNumberValidator.isLottoBonusNumberInRange(input)).toEqual(expected);
    });
  });

  describe('isLottoBonusNumberDuplicated 메서드', () => {
    test.each([
      ['7', [1, 2, 3, 4, 5, 6], { success: true, message: '' }],
      ['5', [1, 2, 3, 4, 5, 6], { success: false, message: '보너스 번호는 로또 당첨 번호와 중복될 수 없습니다.' }],
    ])('보너스 번호 %p와 로또 번호 %p일 때, %p 반환', (input, lottoNumbers, expected) => {
      expect(lottoBonusNumberValidator.isLottoBonusNumberDuplicated(input, lottoNumbers)).toEqual(expected);
    });
  });
});
