import { ERROR_MESSAGE } from '../../src/View/Error.js';
import Formatter from '../../src/Utills/Formatter.js';
import { formatInputToNumber } from '../../src/Utills/Check/PurchaseMoney.js';

describe('Formatter 클래스 테스트', () => {
  describe('formatNumberWithCommas', () => {
    test.each([
      [1000, '1,000'],
      [1000000, '1,000,000'],
      [1234567890, '1,234,567,890'],
    ])('숫자 %i를 쉼표로 구분된 문자열로 변환해야 한다', (input, expected) => {
      expect(Formatter.formatNumberWithCommas(input)).toBe(expected);
    });
  });

  describe('isLocaleFormattedNumber', () => {
    test.each([
      ['1,000', true],
      ['10,000', true],
      ['1,000,000', true],
      ['1000', false], // 쉼표 없음
      ['1,00', false], // 잘못된 쉼표 위치
      ['1,0000', false], // 잘못된 쉼표 위치
      ['10,00,00', false], // 잘못된 쉼표 위치
    ])(
      '입력 %s에 대해 올바른 쉼표 형식인지 확인해야 한다',
      (input, expected) => {
        expect(Formatter.isLocaleFormattedNumber(input)).toBe(expected);
      }
    );
  });

  describe('formatLocaleStringToNumber', () => {
    test.each([
      ['1,000', 1000],
      ['1,000,000', 1000000],
      ['12,345,678', 12345678],
      ['1000', 1000],
      ['123456', 123456],
    ])('입력 %s를 정수형 숫자 %i로 변환해야 한다', (input, expected) => {
      expect(Formatter.formatLocaleStringToNumber(input)).toBe(expected);
    });
  });
});

describe('formatInputToNumber 함수 테스트', () => {
  test.each([
    ['1,000', 1000],
    ['10,000', 10000],
    ['1,000,000', 1000000],
    ['1000', 1000],
    ['200000', 200000],
  ])('올바른 입력 %s는 숫자 %i로 변환해야 한다', (input, expected) => {
    expect(formatInputToNumber(input)).toBe(expected);
  });

  test.each([
    ['abc', ERROR_MESSAGE.PURCHASE_MONEY_ERROR_TYPE],
    ['1,00', ERROR_MESSAGE.PURCHASE_MONEY_ERROR_TYPE], // 잘못된 쉼표 위치
    ['1,000,00', ERROR_MESSAGE.PURCHASE_MONEY_ERROR_TYPE], // 잘못된 쉼표 위치
  ])('입력 %s에 대해 예외를 발생시켜야 한다', (input, expectedError) => {
    expect(() => formatInputToNumber(input)).toThrow(expectedError);
  });
});
