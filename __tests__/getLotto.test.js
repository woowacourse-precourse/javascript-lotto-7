import { getLotto } from "../src/features/getLotto.js";
import Lotto from "../src/Lotto.js";
import { Random } from "@woowacourse/mission-utils";

jest.mock("@woowacourse/mission-utils", () => ({
  Random: {
    pickUniqueNumbersInRange: jest.fn(),
  },
}));

describe("getLotto 테스트", () => {
  test("정상적으로 값을 반환하는 지 확인", () => {
    Random.pickUniqueNumbersInRange.mockReturnValue([1, 2, 3, 4, 5, 6]);
    const lotto = getLotto();
    expect(lotto).toBeInstanceOf(Lotto);
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("생성된 번호가 6개인지 확인", () => {
    Random.pickUniqueNumbersInRange.mockReturnValue([1, 2, 3, 4, 5, 6]);
    const lotto = getLotto();
    const numbers = lotto.getNumbers();

    expect(numbers.length).toBe(6);
  });
});
