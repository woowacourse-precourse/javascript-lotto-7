import {
  validateLottoBuyPrice,
  validateLottoAnswerNumbers,
  validateLottoBonusNumber,
} from '../src/validation/validateFunctions.js';

describe('validateFunctions 테스트', () => {
  describe('validateLottoBuyPrice 테스트', () => {
    test.each([
      ['1000  ', false], // 공백 포함
      ['', false], // 빈 문자열
      ['1000a', false], // 정수가 아닌 값
      ['500', false], // 1000 미만의 양수
      ['1500', false], // 1000의 배수가 아님
      ['1500.5', false], // 정수가 아님
      ['1501', false], // 1000의 배수가 아님
      ['1000', true], // 유효한 로또 구매 금액
      ['2000', true], // 유효한 로또 구매 금액
    ])("입력 값 '%s'에 대한 결과는 %s 여야 한다.", (input, expected) => {
      expect(validateLottoBuyPrice(input)).toBe(expected);
    });
  });

  describe('validateLottoAnswerNumbers 테스트', () => {
    test.each([
      ['1,2,3,4,5,6 ', false], // 공백 포함
      ['', false], // 빈 문자열
      ['1,2,3', false], // 올바른 형식으로 입력되지 않음
      ['1,2,3,4,a,6', false], // 숫자가 아닌 값
      ['1,2,3,4,5,46', false], // 범위를 초과하는 숫자
      ['1,2,3,4,5,5', false], // 중복된 숫자
      ['1,2,3,4,5,6', true], // 유효한 로또 번호
    ])("입력 값 '%s'에 대한 결과는 %s 여야 한다.", (input, expected) => {
      expect(validateLottoAnswerNumbers(input)).toBe(expected);
    });
  });

  describe('validateLottoBonusNumber 테스트', () => {
    test.each([
      ['7 ', [1, 2, 3, 4, 5, 6], false], // 공백 포함
      ['', [1, 2, 3, 4, 5, 6], false], // 빈 문자열
      ['a', [1, 2, 3, 4, 5, 6], false], // 숫자가 아닌 값
      ['46', [1, 2, 3, 4, 5, 6], false], // 범위를 초과하는 숫자
      ['1', [1, 2, 3, 4, 5, 6], false], // 보너스 숫자가 이미 포함됨
      ['7', [1, 2, 3, 4, 5, 6], true], // 유효한 보너스 번호
    ])(
      "입력 값 '%s'와 답안 번호 %s에 대한 결과는 %s 여야 한다.",
      (input, answerNumbers, expected) => {
        expect(validateLottoBonusNumber(input, answerNumbers)).toBe(expected);
      },
    );
  });
});
