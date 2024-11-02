import Lotto from '../src/Lotto';
import LottoMachineService from '../src/Service/LottoMachineService';

describe('LottoMachineService 테스트', () => {
  test('당첨 내역을 계산한다.', () => {
    const winningNumbers = [8, 21, 23, 41, 42, 43];
    const bonusNumber = 7;
    const lottos = [
      new Lotto([8, 21, 23, 41, 42, 43]),
      new Lotto([8, 21, 23, 41, 42, 7]),
      new Lotto([8, 21, 23, 41, 1, 2]),
    ];

    const lottoMachine = new LottoMachineService();
    const totalWinningRank = lottoMachine.calculateWinningResults(
      winningNumbers,
      bonusNumber,
      lottos
    );

    expect(totalWinningRank[0]).toBe(1);
    expect(totalWinningRank[1]).toBe(1);
    expect(totalWinningRank[2]).toBe(0);
    expect(totalWinningRank[3]).toBe(1);
    expect(totalWinningRank[4]).toBe(0);
  });

  test('6개 번호 일치', () => {
    const winningNumbers = [8, 21, 23, 41, 42, 43];
    const bonusNumber = 7;
    const lottoNumbers = [8, 21, 23, 41, 42, 43];

    const lottoMachine = new LottoMachineService();
    const winningRank = lottoMachine.calculateWinningResult(
      winningNumbers,
      bonusNumber,
      lottoNumbers
    );

    expect(winningRank).toBe(1);
  });

  test('5개 번호 + 보너스 번호 일치', () => {
    const winningNumbers = [8, 21, 23, 41, 42, 43];
    const bonusNumber = 7;
    const lottoNumbers = [8, 21, 23, 41, 42, 7];

    const lottoMachine = new LottoMachineService();
    const winningRank = lottoMachine.calculateWinningResult(
      winningNumbers,
      bonusNumber,
      lottoNumbers
    );

    expect(winningRank).toBe(2);
  });

  test('5개 번호 일치', () => {
    const winningNumbers = [8, 21, 23, 41, 42, 43];
    const bonusNumber = 7;
    const lottoNumbers = [8, 21, 23, 41, 42, 2];

    const lottoMachine = new LottoMachineService();
    const winningRank = lottoMachine.calculateWinningResult(
      winningNumbers,
      bonusNumber,
      lottoNumbers
    );

    expect(winningRank).toBe(3);
  });

  test('4개 번호 일치', () => {
    const winningNumbers = [8, 21, 23, 41, 42, 43];
    const bonusNumber = 7;
    const lottoNumbers = [8, 21, 23, 41, 1, 2];

    const lottoMachine = new LottoMachineService();
    const winningRank = lottoMachine.calculateWinningResult(
      winningNumbers,
      bonusNumber,
      lottoNumbers
    );

    expect(winningRank).toBe(4);
  });

  test('3개 번호 일치', () => {
    const winningNumbers = [8, 21, 23, 41, 42, 43];
    const bonusNumber = 7;
    const lottoNumbers = [8, 21, 23, 1, 2, 3];

    const lottoMachine = new LottoMachineService();
    const winningRank = lottoMachine.calculateWinningResult(
      winningNumbers,
      bonusNumber,
      lottoNumbers
    );

    expect(winningRank).toBe(5);
  });

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
