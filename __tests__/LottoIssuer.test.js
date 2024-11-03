import LottoIssuer from '../src/Model/LottoIssuer.js';

describe('LottoIssuer 클래스 테스트', () => {
  describe('validate() 메서드 테스트', () => {
    test('구입 금액이 0보다 크고 1000원 단위일 경우 구입한 로또 개수를 반환한다.', () => {
      expect(LottoIssuer.validate('3000')).toBe(3);
    });

    test('구입 금액이 0보다 크지만 1000원 단위가 아닐 경우 예외가 발생한다.', () => {
      expect(() => LottoIssuer.validate('3500')).toThrow('[ERROR]');
    });

    test('구입 금액이 0보다 작고 1000원 단위일 경우 예외가 발생한다.', () => {
      expect(() => LottoIssuer.validate('-3000')).toThrow('[ERROR]');
    });

    test('구입 금액이 0일 경우 예외가 발생한다.', () => {
      expect(() => LottoIssuer.validate('0')).toThrow('[ERROR]');
    });

    test('구입 금액이 소수일 경우 예외가 발생한다.', () => {
      expect(() => LottoIssuer.validate('1000.5')).toThrow('[ERROR]');
    });

    test('구입 금액이 숫자가 아닌 문자열일 경우 예외가 발생한다.', () => {
      expect(() => LottoIssuer.validate('abc')).toThrow('[ERROR]');
    });
  });

  describe('issue() 메서드 테스트', () => {
    test('issue() 메서드는 구입 금액에 해당하는 수량의 로또를 발행한다.', () => {
      const issuer = new LottoIssuer('3000');
      const issuedLottos = issuer.issue();

      expect(issuedLottos).toHaveLength(3);
    });
  });
});
