import LottoGenerator from '../src/classes/LottoGenerator';

describe('로또 생성 클래스 테스트', () => {
  describe('구입 금액 테스트', () => {
    test('구입 금액이 음수인 경우 예외가 발생한다.', () => {
      expect(() => {
        new LottoGenerator(-1000);
      }).toThrow('[ERROR]');
    });

    test('구입 금액이 0인 경우 예외가 발생한다.', () => {
      expect(() => {
        new LottoGenerator(0);
      }).toThrow('[ERROR]');
    });

    test('구입 금액이 문자열인 경우 예외가 발생한다.', () => {
      expect(() => {
        new LottoGenerator('1000');
      }).toThrow('[ERROR]');
    });

    test('구입 금액이 1000원 단위가 아닌 경우 예외가 발생한다.', () => {
      expect(() => {
        new LottoGenerator(2500);
      }).toThrow('[ERROR]');
    });

    test('올바른 구입 금액을 입력한 경우', () => {
      const lottoGenerator = new LottoGenerator(2000);
      expect(lottoGenerator.purchasePrice).toBe(2000);
    });

    test('구입 금액에 맞는 개수의 로또 생성', () => {
      const lottoGenerator = new LottoGenerator(3000);
      expect(lottoGenerator.lottoCount).toBe(3);
    });
  });
});
