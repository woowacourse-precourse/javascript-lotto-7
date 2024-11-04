import Generator from '../src/Generator.js';
import { PURCHASE_ERROR_MESSAGES } from '../src/constants/ERROR_MESSAGES.js';
import { LOTTO } from '../src/constants/LOTTO_CONSTANTS.js';

describe('Generator 클래스 - 구입 금액 검증', () => {
  test('공백이 있는 입력에 대해 에러를 던진다.', () => {
    expect(() => {
      new Generator(' 1000');
    }).toThrow(); // 공백이 포함된 경우 에러 발생
  });

  test('자연수가 아닌 입력에 대해 에러를 던진다.', () => {
    expect(() => {
      new Generator('-1000'); // 음수
    }).toThrow();

    expect(() => {
      new Generator('abc'); // 숫자가 아님
    }).toThrow();
  });

  test('빈 문자열 입력에 대해 에러를 던진다.', () => {
    expect(() => {
      new Generator('');
    }).toThrow();
  });

  test('구입 금액이 1000의 배수가 아니면 에러를 던진다.', () => {
    expect(() => {
      new Generator('1500'); // 1000의 배수가 아님
    }).toThrow(
      PURCHASE_ERROR_MESSAGES.PURCHASE_AMOUNT_MUST_BE_MULTIPLE_OF_1000
    );
  });

  test('유효한 구입 금액이면 에러가 발생하지 않는다.', () => {
    expect(() => {
      new Generator('3000'); // 유효한 금액
    }).not.toThrow();
  });

  test('구입 금액이 유효하면 로또 티켓 수를 계산한다.', () => {
    const generator = new Generator('5000');
    expect(generator.getLottoTickets()).toBe(5); // 구입 금액이 5000원이면 티켓은 5개
  });
});
