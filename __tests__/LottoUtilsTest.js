import generateLotto from "../src/lottoUtils/generateLotto";
import generateLottoByAmount from "../src/lottoUtils/generateLottoByAmount";
import Lotto from "../src/Lotto";
import matchLottoNumbers from "../src/lottoUtils/matchLottoNumbers";

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
      expectedRank: -1,
    },
    {
      lottoNumbers: [7, 8, 9, 10, 11, 12],
      winningNumbers: [1, 2, 3, 4, 5, 6],
      bonusNumber: 7,
      expectedRank: -1,
    },
  ])(
    "로또 번호 %j와 당첨 번호 %j, 보너스 번호 %i일 때 예상 등수는 %i",
    ({ lottoNumbers, winningNumbers, bonusNumber, expectedRank }) => {
      const lotto = new Lotto(lottoNumbers);
      expect(lotto.winningRank(winningNumbers, bonusNumber)).toBe(expectedRank);
    }
  );
});
