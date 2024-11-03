import Lotto from '../src/Lotto';
import LottoMachineService from '../src/Service/LottoMachineService';

describe('LottoMachineService 테스트', () => {
  test('총 수익률을 계산한다.', () => {
    const purchaseAmount = 8000;
    const totalWinningRank = [0, 0, 0, 0, 1];
    const output = 62.5;

    const lottoMachine = new LottoMachineService();
    const totalReturnRate = lottoMachine.calculateTotalReturnRate(
      purchaseAmount,
      totalWinningRank
    );

    expect(totalReturnRate).toBe(output);
  });
});
