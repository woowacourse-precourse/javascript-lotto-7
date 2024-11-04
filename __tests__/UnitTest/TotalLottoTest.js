import TotalLotto from '../../src/domains/TotalLotto.js';
import Lotto from '../../src/domains/Lotto.js';
import CONSTANT from '../../src/constants/costant.js';

describe('TotalLotto 클래스 테스트', () => {
  test('입력된 금액에 맞는 개수만큼 로또가 생성된다.', () => {
    const count = 5;
    const totalLotto = new TotalLotto(count);
    const lottoList = totalLotto.getLottos();

    expect(lottoList.length).toBe(count);

    lottoList.forEach((lotto) => {
      expect(lotto).toBeInstanceOf(Lotto);

      expect(lotto.getNumbers().length).toBe(
        CONSTANT.LOTTO_CANSTANT.LOTTO_LENGTH
      );

      lotto.getNumbers().forEach((number) => {
        expect(number).toBeGreaterThanOrEqual(
          CONSTANT.LOTTO_CANSTANT.MIN_LOTTO_NUMBER
        );
        expect(number).toBeLessThanOrEqual(
          CONSTANT.LOTTO_CANSTANT.MAX_LOTTO_NUMBER
        );
      });
    });
  });
});
