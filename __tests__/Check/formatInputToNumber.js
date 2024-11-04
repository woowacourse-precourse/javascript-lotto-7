import { ERROR_MESSAGE } from '../../src/View/Error.js';
import Formatter from '../../src/Utills/Formatter.js';
import { formatInputToNumber } from '../../src/Utills/Check/PurchaseMoney.js';

describe('Formatter 클래스 테스트', () => {
  describe('formatNumberWithCommas', () => {
    test('숫자를 쉼표로 구분된 문자열로 변환해야 한다', () => {
      expect(Formatter.formatNumberWithCommas(1000)).toBe('1,000');
      expect(Formatter.formatNumberWithCommas(1000000)).toBe('1,000,000');
      expect(Formatter.formatNumberWithCommas(1234567890)).toBe(
        '1,234,567,890'
      );
    });
  });

  describe('isLocaleFormattedNumber', () => {
    test('쉼표로 올바르게 구분된 숫자 문자열일 경우 true를 반환해야 한다', () => {
      expect(Formatter.isLocaleFormattedNumber('1,000')).toBe(true);
      expect(Formatter.isLocaleFormattedNumber('10,000')).toBe(true);
      expect(Formatter.isLocaleFormattedNumber('1,000,000')).toBe(true);
    });

    test('숫자가 쉼표로 올바르게 구분되지 않은 경우 false를 반환해야 한다', () => {
      expect(Formatter.isLocaleFormattedNumber('1000')).toBe(false); // 쉼표 없음
      expect(Formatter.isLocaleFormattedNumber('1,00')).toBe(false); // 잘못된 쉼표 위치
      expect(Formatter.isLocaleFormattedNumber('1,0000')).toBe(false); // 잘못된 쉼표 위치
      expect(Formatter.isLocaleFormattedNumber('10,00,00')).toBe(false); // 잘못된 쉼표 위치
    });
  });

  describe('formatLocaleStringToNumber', () => {
    test('쉼표로 구분된 숫자 문자열을 정수형 숫자로 변환해야 한다', () => {
      expect(Formatter.formatLocaleStringToNumber('1,000')).toBe(1000);
      expect(Formatter.formatLocaleStringToNumber('1,000,000')).toBe(1000000);
      expect(Formatter.formatLocaleStringToNumber('12,345,678')).toBe(12345678);
    });

    test('쉼표가 없는 숫자 문자열을 변환할 경우 숫자 값을 반환해야 한다', () => {
      expect(Formatter.formatLocaleStringToNumber('1000')).toBe(1000);
      expect(Formatter.formatLocaleStringToNumber('123456')).toBe(123456);
    });
  });
});

describe('formatInputToNumber 함수 테스트', () => {
  test('올바른 쉼표 형식의 문자열을 숫자로 변환해야 한다', () => {
    expect(formatInputToNumber('1,000')).toBe(1000);
    expect(formatInputToNumber('10,000')).toBe(10000);
    expect(formatInputToNumber('1,000,000')).toBe(1000000);
  });

  test('숫자 문자열을 숫자로 변환해야 한다', () => {
    expect(formatInputToNumber('1000')).toBe(1000);
    expect(formatInputToNumber('200000')).toBe(200000);
  });

  test('올바르지 않은 문자열을 입력하면 예외를 발생시켜야 한다', () => {
    expect(() => formatInputToNumber('abc')).toThrow(
      ERROR_MESSAGE.PURCHASE_MONEY_ERROR_TYPE
    );
    expect(() => formatInputToNumber('1,00')).toThrow(
      ERROR_MESSAGE.PURCHASE_MONEY_ERROR_TYPE
    ); // 잘못된 쉼표 위치
    expect(() => formatInputToNumber('1,000,00')).toThrow(
      ERROR_MESSAGE.PURCHASE_MONEY_ERROR_TYPE
    ); // 잘못된 쉼표 위치
  });
});
