import { checkLotto } from "../src/features/checkLotto.js";

describe("checkLotto 테스트", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("정상적으로 값을 반환하는 지 확인", () => {
    const LOTTO_NUMBERS = [1, 2, 3, 4, 5, 6];
    const WINNING_NUMBERS = [1, 2, 3, 7, 8, 9];
    const BONUS_NUMBER = 10;
    const EXPECTED = 3;

    expect(checkLotto(LOTTO_NUMBERS, WINNING_NUMBERS, BONUS_NUMBER)).toEqual(
      EXPECTED
    );
  });
});
