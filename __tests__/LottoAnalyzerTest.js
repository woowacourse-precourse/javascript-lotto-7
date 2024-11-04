import LottoAnalyzer from '../src/LottoAnalyzer.js';

describe('LottoAnalyzer 테스트', () => {
  test('getStatistics() 테스트', () => {
    const winningLotto = [1, 2, 3, 4, 5, 6];
    const bonusNum = 7;
    const money = 8000;

    const buyLottos = [
      [8, 21, 23, 41, 42, 43],
      [3, 5, 11, 16, 32, 38],
      [7, 11, 16, 35, 36, 44],
      [1, 8, 11, 31, 41, 42],
      [13, 14, 16, 38, 42, 45],
      [7, 11, 30, 40, 42, 43],
      [2, 13, 22, 32, 38, 45],
      [1, 3, 5, 14, 22, 45],
    ].map((numbers) => ({ getNumbers: jest.fn().mockReturnValue(numbers) }));

    const expects = '당첨 통계\n'
      + '---\n'
      + '3개 일치 (5,000원) - 1개\n'
      + '4개 일치 (50,000원) - 0개\n'
      + '5개 일치 (1,500,000원) - 0개\n'
      + '5개 일치, 보너스 볼 일치 (30,000,000원) - 0개\n'
      + '6개 일치 (2,000,000,000원) - 0개\n'
      + '총 수익률은 62.5%입니다.';

    const lottoAnalyzer = new LottoAnalyzer(
      winningLotto,
      buyLottos,
      bonusNum,
      money
    );

    lottoAnalyzer.run();
    expect(lottoAnalyzer.getStatistics()).toStrictEqual(expects);
  });
});
