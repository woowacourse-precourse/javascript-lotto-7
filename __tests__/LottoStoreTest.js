import LottoStore from "../src/models/LottoStore.js";
import { LOTTO } from "../src/constants/Constants.js";
import { MissionUtils } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils", () => ({
  MissionUtils: {
    Random: {
      pickUniqueNumbersInRange: jest.fn(() => [1, 2, 3, 4, 5, 6]),
    },
  },
}));

describe("LottoStore 클래스", () => {
  let lottoStore;

  beforeEach(() => {
    lottoStore = new LottoStore();
  });

  test("제공된 돈에 따라 로또 티켓을 구매해야 합니다.", () => {
    MissionUtils.Random.pickUniqueNumbersInRange.mockReturnValueOnce([
      1, 2, 3, 4, 5, 6,
    ]);

    lottoStore.purchaseLotto(LOTTO.PRICE_PER_TICKET * 3);
    const tickets = lottoStore.getLottoTickets();

    expect(tickets).toHaveLength(3);
    expect(tickets[0].getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });
});
