import { MissionUtils } from "@woowacourse/mission-utils";
import LottoMachine from "../src/Model/LottoMachine.js";

describe("LottoMachine 클래스 테스트", () => {
  let lottoMachine;
  let winningLottoData;
  const randoms = [
    [8, 21, 23, 41, 42, 43],
    [3, 5, 11, 16, 32, 38],
    [1, 2, 3, 4, 36, 44],
    [1, 2, 3, 4, 5, 42],
    [1, 2, 3, 4, 5, 7],
    [1, 2, 3, 4, 5, 6],
  ];

  const mockRandoms = (numbers) => {
    MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
    numbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickUniqueNumbersInRange);
  };

  beforeEach(() => {
    lottoMachine = new LottoMachine();
    winningLottoData = { winningNumbers: [1, 2, 3, 4, 5, 6], bonusNumber: 7 };
  });

  test("1000원 단위의 금액을 입력하면 발급 가능한 복권횟수를 반환한다.", () => {
    const numOfLottos = lottoMachine.enterMoney(10000);
    const numOfLottos2 = lottoMachine.enterMoney(204000);
    expect(numOfLottos).toBe(10);
    expect(numOfLottos2).toBe(204);
  });

  test("투입한 금액에 맞춰 PurchasedLotto 객체들을 생성한다.", () => {
    mockRandoms(randoms);
    const numOfLottos = lottoMachine.enterMoney(6000);
    const lottos = lottoMachine.createLottos(numOfLottos);

    const result = lottos.map((lotto) => lotto.getNumbers());

    expect(result).toEqual(randoms);
  });

  test("지정된 WinningNumbers와 BonusNumber을 사용하여 WinningLotto 객체를 생성한다", () => {
    const result = lottoMachine.createWinningLottos(
      winningLottoData.winningNumbers,
      winningLottoData.bonusNumber
    );

    expect(result.getNumbers()).toEqual(winningLottoData.winningNumbers);
    expect(result.getBonusNumber()).toEqual(winningLottoData.bonusNumber);
  });

  test("구입한 로또의 수익률을 계산하여 반환한다.", () => {
    mockRandoms(randoms);
    const numOfLottos = lottoMachine.enterMoney(6000);
    const lottos = lottoMachine.createLottos(numOfLottos);
    const winningLotto = lottoMachine.createWinningLottos(
      winningLottoData.winningNumbers,
      winningLottoData.bonusNumber
    );

    const rateOfReturn = lottoMachine.calculateEarningRate(
      lottos,
      winningLotto,
      numOfLottos
    );

    expect(Number(rateOfReturn)).toBe(338591.7);
  });
});
