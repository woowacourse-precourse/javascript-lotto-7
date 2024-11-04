import lottoGenerator from '../../src/Lotto/lottoGenerator.js';
import Lotto from '../../src/Lotto/Lotto.js';
import LOTTO_CONFIG from '../../src/constants/lottoConfig.js';


describe('Lotto Generator 테스트', () => {
  test('Lotto 객체가 올바른 개수만큼 생성되는지 확인', () => {
    const purchaseAmount = 5;
    const lottoList = lottoGenerator(purchaseAmount);

    expect(lottoList).toHaveLength(purchaseAmount);
    lottoList.forEach(lotto => {
      expect(lotto).toBeInstanceOf(Lotto);
    });
  });
});
