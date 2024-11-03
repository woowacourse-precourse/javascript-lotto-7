import LottoService from "../src/services/LottoService";
import Lotto from "../src/model/Lotto";
import generateLandomNumber from "../src/utils/generateLandomNum";

jest.mock("../src/utils/generateLandomNum");

describe("LottoService", () => {
  let lottoService;

  beforeEach(() => {
    lottoService = new LottoService();
  });

  describe("getLottos", () => {
    it("초기에는 빈 배열을 반환해야 한다", () => {
      expect(lottoService.getLottos()).toEqual([]);
    });
  });

  describe("generateLottos", () => {
    it("올바른 수의 로또 번호를 생성해야 한다", () => {
      const count = 5;
      const mockNumbers = [1, 2, 3, 4, 5, 6];

      generateLandomNumber.mockReturnValue(mockNumbers);
      lottoService.generateLottos(count);

      expect(lottoService.getLottos()).toHaveLength(count);
      expect(lottoService.getLottos()[0]).toBeInstanceOf(Lotto);
      expect(lottoService.getLottos()[0].getNumbers()).toEqual(mockNumbers);
    });
  });

  describe("compareLottos", () => {
    it("정확한 일치 카운트를 반환해야 한다", () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      const bonusNumber = 7;

      lottoService.generateLottos(2);
      lottoService.getLottos()[0].getNumbers = jest
        .fn()
        .mockReturnValue([1, 2, 3, 4, 5, 6]); // 6개 일치
      lottoService.getLottos()[1].getNumbers = jest
        .fn()
        .mockReturnValue([1, 2, 3, 4, 5, 7]); // 5개 일치, 보너스 번호 일치

      const result = lottoService.compareLottos(winningNumbers, bonusNumber);

      expect(result).toEqual({
        FIFTH: 0,
        FOURTH: 0,
        THIRD: 0,
        SECOND: 1,
        FIRST: 1,
      });
    });
  });

  describe("calculateProfit", () => {
    it("정확하게 수익을 계산해야 한다", () => {
      const matchCounts = {
        FIFTH: 1,
        FOURTH: 0,
        THIRD: 0,
        SECOND: 0,
        FIRST: 0,
      };
      const amount = 8000;

      const profit = lottoService.calculateProfit(matchCounts, amount);

      expect(profit).toBe("62.5"); // (5000 / 8000) * 100 = 62.5%
    });
  });
});
