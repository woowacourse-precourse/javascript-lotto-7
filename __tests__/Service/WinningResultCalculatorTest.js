import Lotto from '../../src/Domain/Lotto';
import WinningResultCalculatorService from '../../src/Service/WinningResultCalculatorService';

describe('WinningResultCalculatorService 테스트', () => {
  test('당첨 내역을 계산한다.', () => {
    const winningNumbers = [8, 21, 23, 41, 42, 43];
    const bonusNumber = 7;
    const lottos = [
      new Lotto([8, 21, 23, 41, 42, 43]),
      new Lotto([8, 21, 23, 41, 42, 7]),
      new Lotto([8, 21, 23, 41, 1, 2]),
    ];

    const winningResultCalculatorService = new WinningResultCalculatorService();
    const totalWinningRank =
      winningResultCalculatorService.calculateWinningResults(
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

    const winningResultCalculatorService = new WinningResultCalculatorService();
    const winningRank = winningResultCalculatorService.calculateWinningResult(
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

    const winningResultCalculatorService = new WinningResultCalculatorService();
    const winningRank = winningResultCalculatorService.calculateWinningResult(
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

    const winningResultCalculatorService = new WinningResultCalculatorService();
    const winningRank = winningResultCalculatorService.calculateWinningResult(
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

    const winningResultCalculatorService = new WinningResultCalculatorService();
    const winningRank = winningResultCalculatorService.calculateWinningResult(
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

    const winningResultCalculatorService = new WinningResultCalculatorService();
    const winningRank = winningResultCalculatorService.calculateWinningResult(
      winningNumbers,
      bonusNumber,
      lottoNumbers
    );

    expect(winningRank).toBe(5);
  });
});
