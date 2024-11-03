import LottoController from "../src/controller/lottoController";

describe("로또 컨트롤러 기능 테스트", () => {
  const LOTTO_EACH_AMOUNT = 1000;

  let lottoController;

  beforeEach(() => {
    lottoController = new LottoController(5000);
  });

  test("로또 구매 갯수와 생성된 로또 배열 확인", () => {
    expect(lottoController.getLottoTotalNumber()).toBe(5);
    expect(lottoController.getAllLottos().length).toBe(5);
  });

  test("로또 getAllLottos, calculateWinningLottos 계산확인", () => {
    const winningLotto = {
      getNumbers: () => [1, 2, 3, 4, 5, 6],
    };
    const bonusNumber = 45;

    lottoController.getAllLottos()[0] = {
      getNumbers: () => [1, 2, 3, 4, 5, 6],
    };
    lottoController.getAllLottos()[1] = {
      getNumbers: () => [1, 2, 3, 4, 5, 45],
    };
    lottoController.getAllLottos()[2] = {
      getNumbers: () => [1, 2, 3, 4, 5, 7],
    };
    lottoController.getAllLottos()[3] = {
      getNumbers: () => [1, 2, 3, 4, 8, 9],
    };
    lottoController.getAllLottos()[4] = {
      getNumbers: () => [1, 2, 3, 10, 11, 12],
    };

    lottoController.calculateWinningLottos(winningLotto, bonusNumber);

    expect(lottoController.getWinningPrizeStatistics()).toEqual([
      1, 1, 1, 1, 1,
    ]);
  });
  test("로또 ProfitRate 계산결과 테스트", () => {
    lottoController.calculateWinningLottos = jest.fn();
    lottoController.getWinningPrizeStatistics = jest.fn(() => [1, 1, 1, 1, 1]);

    const profitRate = lottoController.getProfitRate();
    const totalProfit = lottoController.getTotalProfit();
    const expectedProfitRate = (
      (totalProfit / (5 * LOTTO_EACH_AMOUNT)) *
      100
    ).toFixed(1);

    expect(profitRate).toBe(expectedProfitRate);
  });
});
