import { MissionUtils } from "@woowacourse/mission-utils";
import LottoStore from "../src/LottoStore.js";

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce(
    (acc, number) => acc.mockReturnValueOnce(number),
    MissionUtils.Random.pickUniqueNumbersInRange,
  );
};

describe("로또판매점 클래스 테스트", () => {
  describe("buyLotto 메서드", () => {
    test("로또 구입 금액에 해당하는 만큼 로또를 구입한다.", () => {
      const lottoStore = new LottoStore(2000);
      expect(lottoStore.buyLotto(2000)).toBe(2);
    });
  });
  describe("createLotto 메서드", () => {
    test("로또 장수만큼 1~45 사이의 숫자 6개를 뽑아 로또를 생성한다.", () => {
      const RANDOM_NUMBERS = [[1, 2, 3, 4, 5, 6], [7, 8, 9, 10, 11, 12]];
      const lottoStore = new LottoStore(2000);
      mockRandoms(RANDOM_NUMBERS);

      expect(lottoStore.createLotto()).toEqual(RANDOM_NUMBERS);
    });
  });
  describe("getLottoCount 메서드", () => {
    test("구입한 로또 장수를 반환한다.", () => {
      const lottoStore = new LottoStore(1500);

      expect(lottoStore.getLottoCount()).toEqual(1);
    });
  });
});
