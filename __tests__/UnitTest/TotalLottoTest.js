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
      //각 instance가 Lotto instance인지 확인
      expect(lotto).toBeInstanceOf(Lotto);

      //각 로또가 6개의 번호가 맞는지 확인
      expect(lotto.getNumbers().length).toBe(
        CONSTANT.LOTTO_CANSTANT.LOTTO_LENGTH
      );

      //최대 최소 범위 안의 숫자인지 확인
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
