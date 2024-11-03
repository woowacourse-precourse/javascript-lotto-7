import LottoMachine from "../../src/models/LottoMachine";
import RandomGenerator from "../../src/models/RandomGenerator";

describe("LottoMachine 클래스 테스트", () => {
  beforeAll(() => {
    RandomGenerator.generate = jest.fn();
  });

  beforeEach(() => {
    jest.clearAllMocks();
    RandomGenerator.generate.mockReturnValue([1, 2, 3, 4, 5, 6]);
  });

  describe("로또 생성 테스트", () => {
    test("구매 금액만큼의 로또가 발행되어야 한다", () => {
      // given
      const purchaseMoney = 3000;
      const lottoCount = purchaseMoney / 1000;
      const lottoMachine = new LottoMachine(purchaseMoney);

      // when
      const lottoHistory = lottoMachine.generateLotto();

      // then
      expect(RandomGenerator.generate).toHaveBeenCalledTimes(lottoCount);
      expect(lottoHistory.getPurchaseHistory().lottos).toHaveLength(lottoCount);
    });

    test("생성된 로또는 구매 기록에 저장되어야 한다", () => {
      // given
      const purchaseMoney = 3000;
      const lottoCnt = purchaseMoney / 1000;
      const lottoMachine = new LottoMachine(purchaseMoney);

      // when
      const lottoHistory = lottoMachine.generateLotto();

      // then
      const { lottoCount, lottos } = lottoHistory.getPurchaseHistory();
      expect(lottoCount).toBe(lottoCnt);
      expect(lottos).toHaveLength(lottoCnt);
    });
  });

  describe("예외 상황 테스트", () => {
    test("RandomGenerator가 잘못된 번호를 생성하면 예외가 발생해야 한다", () => {
      // given
      const purchaseMoney = 1000;
      const lottoMachine = new LottoMachine(purchaseMoney);
      RandomGenerator.generate.mockReturnValue([1, 2, 3, 4, 5]); // 잘못된 번호 생성

      // when & then
      expect(() => lottoMachine.generateLotto()).toThrow("[ERROR]");
    });
  });
});
