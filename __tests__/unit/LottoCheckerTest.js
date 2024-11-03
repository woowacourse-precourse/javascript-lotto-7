import LottoChecker from '../../src/model/LottoChecker.js';

describe("getMatchResults() 테스트", () => {
  let lottoChecker;

  beforeEach(() => {
    const winningNumbers = "1,2,3,4,5,6";
    lottoChecker = new LottoChecker(winningNumbers);
    lottoChecker.setBonusNumber("7");
  });

  test("각 로또 번호의 일치 개수와 보너스 번호 일치 여부를 반환해야 한다", () => {
    const lottoNumbersList = [
      [1, 2, 3, 8, 9, 10], // 3개 번호 일치, 보너스 번호 불일치
      [1, 2, 3, 4, 5, 6],  // 6개 번호 일치, 보너스 번호 불일치
      [1, 2, 3, 4, 5, 7],  // 5개 번호 일치, 보너스 번호 일치
      [8, 9, 10, 11, 12, 13] // 0개 번호 일치, 보너스 번호 불일치
    ];

    const results = lottoChecker.getMatchResults(lottoNumbersList);

    const expectedResults = [
      { matchCount: 3, isBonusMatched: false },
      { matchCount: 6, isBonusMatched: false },
      { matchCount: 5, isBonusMatched: true },
      { matchCount: 0, isBonusMatched: false }
    ];

    expect(results).toEqual(expectedResults);
  });
});
