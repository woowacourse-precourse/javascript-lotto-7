import generateLotto from "../src/lottoUtils/generateLotto";
import generateLottoByAmount from "../src/lottoUtils/generateLottoByAmount";
import Lotto from "../src/Lotto";
import matchLottoNumbers from "../src/lottoUtils/matchLottoNumbers";
import getLottoResults from "../src/lottoUtils/getLottoResults";
import calculateReturnRate from "../src/lottoUtils/calculateReturnRate";

describe("lotto utils 함수 테스트", () => {
  test("로또 생성 및 반환", () => {
    const lotto = generateLotto();
    expect(lotto).toBeInstanceOf(Lotto);
  });

  test("구매 금액에 따른 로또 생성", () => {
    const lottos = generateLottoByAmount(5035);
    expect(lottos.length).toBe(5);
  });

  test("로또 숫자 오름차순 정렬인지 확인", () => {
    const lottos = new Lotto([3, 2, 1, 6, 5, 4]);
    expect(lottos.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("matchlottoNumbers 함수 테스트", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    const winningNumbers = [1, 2, 3, 4, 5, 7];
    expect(matchLottoNumbers(lotto.getNumbers(), winningNumbers)).toBe(5);
  });

  test.each([
    {
      lottoNumbers: [1, 2, 3, 4, 5, 6],
      winningNumbers: [1, 2, 3, 4, 5, 7],
      bonusNumber: 6,
      expectedRank: 2,
    },
    {
      lottoNumbers: [1, 2, 3, 4, 5, 6],
      winningNumbers: [1, 2, 3, 4, 5, 6],
      bonusNumber: 7,
      expectedRank: 1,
    },
    {
      lottoNumbers: [1, 2, 3, 4, 8, 9],
      winningNumbers: [1, 2, 3, 4, 5, 6],
      bonusNumber: 7,
      expectedRank: 4,
    },
    {
      lottoNumbers: [1, 2, 3, 10, 11, 12],
      winningNumbers: [1, 2, 3, 4, 5, 6],
      bonusNumber: 7,
      expectedRank: 5,
    },
    {
      lottoNumbers: [1, 2, 13, 14, 15, 16],
      winningNumbers: [1, 2, 3, 4, 5, 6],
      bonusNumber: 7,
      expectedRank: 0,
    },
    {
      lottoNumbers: [7, 8, 9, 10, 11, 12],
      winningNumbers: [1, 2, 3, 4, 5, 6],
      bonusNumber: 7,
      expectedRank: 0,
    },
  ])(
    "로또 번호 %j와 당첨 번호 %j, 보너스 번호 %i일 때 예상 등수는 %i",
    ({ lottoNumbers, winningNumbers, bonusNumber, expectedRank }) => {
      const lotto = new Lotto(lottoNumbers);
      expect(lotto.winningRank(winningNumbers, bonusNumber)).toBe(expectedRank);
    }
  );

  test("로또 결과 객체 반환", () => {
    const lottos = [
      new Lotto([1, 2, 3, 4, 5, 6]),
      new Lotto([1, 2, 3, 4, 5, 7]),
      new Lotto([1, 2, 3, 4, 8, 9]),
      new Lotto([1, 2, 3, 10, 11, 12]),
      new Lotto([1, 2, 13, 14, 15, 16]),
      new Lotto([7, 8, 9, 10, 11, 12]),
    ];
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;
    lottos[0].winningRank = jest.fn(() => 1);
    lottos[1].winningRank = jest.fn(() => 2);
    lottos[2].winningRank = jest.fn(() => 3);
    lottos[3].winningRank = jest.fn(() => 4);
    lottos[4].winningRank = jest.fn(() => 5);
    lottos[5].winningRank = jest.fn(() => 0);
    const lottoResults = getLottoResults(lottos, winningNumbers, bonusNumber);
    expect(lottoResults).toEqual({
      0: { prize: 0, count: 1 },
      1: { prize: 2000000000, count: 1 },
      2: { prize: 30000000, count: 1 },
      3: { prize: 1500000, count: 1 },
      4: { prize: 50000, count: 1 },
      5: { prize: 5000, count: 1 },
    });
  });

  test("수익률 계산", () => {
    const purchaseAmount = 10000;
    const lottoResults = {
      0: { prize: 0, count: 1 },
      1: { prize: 2000000000, count: 0 },
      2: { prize: 30000000, count: 1 },
      3: { prize: 1500000, count: 2 },
      4: { prize: 50000, count: 3 },
      5: { prize: 5000, count: 4 },
    };
    const expectedReturnRate = 3317;
    const returnRate = calculateReturnRate(purchaseAmount, lottoResults);

    expect(returnRate).toBe(expectedReturnRate);
  });
});
