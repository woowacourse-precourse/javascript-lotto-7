import { MoneyValidation } from '../../../src/shared/validation/index.js';
import { ERROR_MESSAGE, LOTTO } from '../../../src/shared/constants/constants.js';

describe('MoneyValidation 테스트', () => {
  test.each([
    {
      name: '빈 문자열 입력 시 에러 발생',
      input: { command: '' },
      expectedError: ERROR_MESSAGE.INVALID_EMPTY_INPUT,
    },
    {
      name: '공백 문자열 입력 시 에러 발생',
      input: { command: '   ' },
      expectedError: ERROR_MESSAGE.INVALID_EMPTY_INPUT,
    },
    {
      name: 'undefined 입력 시 에러 발생',
      input: { command: undefined },
      expectedError: ERROR_MESSAGE.INVALID_EMPTY_INPUT,
    },
    {
      name: '문자열 입력 시 에러 발생',
      input: { command: 'abc' },
      expectedError: ERROR_MESSAGE.INVALID_MONEY_INPUT,
    },
    {
      name: '음수 입력 시 에러 발생',
      input: { command: '-1000' },
      expectedError: ERROR_MESSAGE.INVALID_BIGGER_THAN_ZERO,
    },
    {
      name: '0원 입력 시 에러 발생',
      input: { command: '0' },
      expectedError: ERROR_MESSAGE.INVALID_BIGGER_THAN_ZERO,
    },
    {
      name: '1000원 단위가 아닌 금액 입력 시 에러 발생',
      input: { command: '1500' },
      expectedError: ERROR_MESSAGE.INVALID_AMOUNT,
    },
    {
      name: '소수점이 포함된 금액 입력 시 에러 발생',
      input: { command: '1000.5' },
      expectedError: ERROR_MESSAGE.INVALID_AMOUNT,
    },
  ])('$name', ({ input, expectedError }) => {
    expect(() => {
      MoneyValidation(input);
    }).toThrow(expectedError);
  });

  test.each([
    {
      name: '최소 단위 금액',
      input: { command: '1000' },
      expected: 1000,
    },
    {
      name: '여러 장 구매 금액',
      input: { command: '5000' },
      expected: 5000,
    },
    {
      name: '공백이 포함된 유효한 금액',
      input: { command: ' 1000 ' },
      expected: 1000,
    },
    {
      name: '큰 금액',
      input: { command: '100000' },
      expected: 100000,
    },
  ])('$name 입력이 성공한다', ({ input, expected }) => {
    const result = MoneyValidation(input);

    expect(result).toBe(expected);
    expect(result % LOTTO.PRICE).toBe(0); // 1000원 단위 검증
    expect(result).toBeGreaterThan(0); // 양수 검증
    expect(Number.isInteger(result)).toBeTruthy(); // 정수 검증
  });

  test('입력된 command가 변경되지 않는다', () => {
    const input = { command: '1000' };
    const result = MoneyValidation(input);

    expect(input.command).toBe('1000');
    expect(result).toBe(1000);
  });

  test('반환값이 숫자 타입이다', () => {
    const input = { command: '1000' };
    const result = MoneyValidation(input);

    expect(typeof result).toBe('number');
  });
});
