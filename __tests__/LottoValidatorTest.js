import LottoValidator from '../src/LottoValidator.js';

describe('Validator 클래스 테스트', () => {
  const validator = new LottoValidator();

  describe('validatePurchaseAmount 메서드 테스트', () => {
    test.each([
      ['', '[ERROR] 구입 금액은 숫자로 입력해 주세요.'],
      ['aaa', '[ERROR] 구입 금액은 숫자로 입력해 주세요.'],
      ['1111', '[ERROR] 구입 금액을 1,000원 단위로 입력해 주세요.'],
      ['500', '[ERROR] 구입 금액을 1,000원 단위로 입력해 주세요.'],
    ])('입력값: %s, 예외 메시지: %s', (input, expectedMessage) => {
      expect(() => {
        validator.validatePurchaseAmount(input);
      }).toThrow(expectedMessage);
    });

    test('구입 금액이 정상적인 1000 단위일 경우 true를 반환한다.', () => {
      expect(validator.validatePurchaseAmount('5000')).toBe(true);
    });
  });

  describe('validateLottoNumber 메서드 테스트', () => {
    test.each([
      ['1,2,3,4,5', '[ERROR] 로또 번호는 6개여야 합니다.'],
      ['1,2,3,4,5,46', '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.'],
      ['1,2,3,4,5,5', '[ERROR] 로또 번호는 중복되지 않은 숫자로 입력해야 합니다.'],
      ['1,2,3,4,5,-1', '[ERROR] 로또 번호는 1부터 45 사이의 숫자여야 합니다.'],
      ['1.2.3.4.5.6', '[ERROR] 당첨 번호는 6개를 쉼표(,)로 구분하여 입력해 주세요.'],
      ['1,2,3,4,5,abc', '[ERROR] 당첨 번호는 6개를 쉼표(,)로 구분하여 입력해 주세요.'],
      ['1,2,3,4', '[ERROR] 로또 번호는 6개여야 합니다.'],
    ])('입력값: %s, 예외 메시지: %s', (input, expectedMessage) => {
      expect(() => {
        validator.validateLottoNumber(input);
      }).toThrow(expectedMessage);
    });

    test('로또 번호가 정상적인 경우 true를 반환한다.', () => {
      expect(validator.validateLottoNumber('1,2,3,4,5,6')).toBe(true);
    });
  });

  describe('validateBonusNumber 메서드 테스트', () => {
    const lottoNumbers = [1, 2, 3, 4, 5, 6];

    test.each([
      ['', '[ERROR] 1 ~ 45 사이의 숫자로 입력해 주세요.'],
      ['0', '[ERROR] 1 ~ 45 사이의 숫자로 입력해 주세요.'],
      ['46', '[ERROR] 1 ~ 45 사이의 숫자로 입력해 주세요.'],
      ['3', '[ERROR] 중복된 번호 입니다.'],
    ])('입력값: %s, 예외 메시지: %s', (input, expectedMessage) => {
      expect(() => {
        validator.validateBonusNumber(lottoNumbers, input);
      }).toThrow(expectedMessage);
    });

    test('정상적인 보너스 번호일 경우 true를 반환한다.', () => {
      expect(validator.validateBonusNumber(lottoNumbers, '7')).toBe(true);
    });
  });
});
