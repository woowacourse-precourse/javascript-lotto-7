import { MissionUtils } from "@woowacourse/mission-utils";
import LottoStore from "../src/models/LottoStore.js";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange,
  );
};

describe("로또판매점 클래스 테스트", () => {
  let lottoStore;
  beforeEach(() => {
    lottoStore = new LottoStore();
  });

  describe("buyLotto 메서드", () => {
    test("로또 구입 금액에 해당하는 만큼 로또를 구입한다.", () => {
      expect(lottoStore.buyLotto(2000).length).toBe(2);
    });
  });
  describe("getLottoCount 메서드", () => {
    test("구입한 로또 장수를 반환한다.", () => {
      lottoStore.buyLotto(1500);

      expect(lottoStore.getLottoCount()).toEqual(1);
    });
  });
  describe("getLottos 메서드", () => {
    test("발행한 로또 목록을 반환한다.", () => {
      const RANDOM_NUMBERS = [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]];
      mockRandoms(RANDOM_NUMBERS);
      lottoStore.buyLotto(2500);

      expect(lottoStore.getLottos()).toEqual(RANDOM_NUMBERS);
    });
  });
});
