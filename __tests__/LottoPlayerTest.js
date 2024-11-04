import LottoPlayer from "../src/LottoPlayer.js";

describe("로또 발행기 테스트", () => {
  test("로또 발행 개수 확인", () => {
    const lottoPlayer = new LottoPlayer();
    lottoPlayer.setNumberOfLottos(5000);
    lottoPlayer.createLottos();

    expect(lottoPlayer.numberOfLottos).toBe(5);
    expect(lottoPlayer.lottos.length).toBe(5);
  });
});

describe("당첨 번호 비교 테스트", () => {
  test("3개의 번호가 일치", () => {
    const lottoPlayer = new LottoPlayer();
    lottoPlayer.winningNumbers = [1, 2, 3, 4, 5, 6];

    const lottoNumbers = [1, 2, 3, 10, 11, 12];
    const matchCount = lottoPlayer.countMatchingNumbers(lottoNumbers);

    expect(matchCount).toBe(3);
  });

  test("6개의 번호가 모두 일치", () => {
    const lottoPlayer = new LottoPlayer();
    lottoPlayer.winningNumbers = [1, 2, 3, 4, 5, 6];

    const lottoNumbers = [1, 2, 3, 4, 5, 6];
    const matchCount = lottoPlayer.countMatchingNumbers(lottoNumbers);

    expect(matchCount).toBe(6);
  });
});

describe("보너스 번호 비교 테스트", () => {
  test("보너스 번호 포함", () => {
    const lottoPlayer = new LottoPlayer();
    lottoPlayer.bonusNumber = 7;

    const lottoNumbers = [1, 2, 3, 4, 5, 7];
    const isBonusMatched = lottoPlayer.isBonusNumberMatched(lottoNumbers);

    expect(isBonusMatched).toBe(true);
  });

  test("보너스 번호 포함X", () => {
    const lottoPlayer = new LottoPlayer();
    lottoPlayer.bonusNumber = 7;

    const lottoNumbers = [1, 2, 3, 4, 5, 6];
    const isBonusMatched = lottoPlayer.isBonusNumberMatched(lottoNumbers);

    expect(isBonusMatched).toBe(false);
  });
});

describe("당첨 결과 저장 테스트", () => {
  test("1등인 경우", () => {
    const lottoPlayer = new LottoPlayer();
    lottoPlayer.updateResultWithRank(6, false);
    expect(lottoPlayer.resultCount[1]).toBe(1);
  });

  test("2등인 경우", () => {
    const lottoPlayer = new LottoPlayer();
    lottoPlayer.updateResultWithRank(5, true);
    expect(lottoPlayer.resultCount[2]).toBe(1);
  });

  test("3등인 경우", () => {
    const lottoPlayer = new LottoPlayer();
    lottoPlayer.updateResultWithRank(5, false);
    expect(lottoPlayer.resultCount[3]).toBe(1);
  });

  test("4등인 경우", () => {
    const lottoPlayer = new LottoPlayer();
    lottoPlayer.updateResultWithRank(4, false);
    expect(lottoPlayer.resultCount[4]).toBe(1);
  });

  test("5등인 경우", () => {
    const lottoPlayer = new LottoPlayer();
    lottoPlayer.updateResultWithRank(3, false);
    expect(lottoPlayer.resultCount[5]).toBe(1);
  });
});

describe("수익률 계산 테스트", () => {
  test("당첨시 수익률 계산", () => {
    const lottoPlayer = new LottoPlayer();
    lottoPlayer.setNumberOfLottos(5000);
    lottoPlayer.prizeAmount = 15000;

    const rateOfReturn = lottoPlayer.caclulateRateOfReturn();
    expect(rateOfReturn).toBe("300.0");
  });

  test("당첨 금액이 없는 경우 수익률 0%", () => {
    const lottoPlayer = new LottoPlayer();
    lottoPlayer.setNumberOfLottos(5000);
    lottoPlayer.prizeAmount = 0;

    const rateOfReturn = lottoPlayer.caclulateRateOfReturn();
    expect(rateOfReturn).toBe("0.0");
  });
});
