import { ERROR } from "../src/config/config.js";
import { checkDuplicates } from "../src/features/checkDuplicates.js";

describe("checkDuplicates 테스트", () => {
  test("당첨 번호 안에 보너스 숫자가 중복될 때 에러를 발생시키는 지 확인", () => {
    const WINNING_NUMBERS = [1, 2, 3, 4, 5, 6];
    const BONUS_NUMBER = 3;

    expect(() => checkDuplicates(WINNING_NUMBERS, BONUS_NUMBER)).toThrow(
      ERROR.DUPLICATE_NUMBER
    );
  });

  test("당첨 번호 안에 보너스 숫자가 없을 때 에러를 발생시키지 않는 지 확인", () => {
    const WINNING_NUMBERS = [1, 2, 3, 4, 5, 6];
    const BONUS_NUMBER = 7;

    expect(() => checkDuplicates(WINNING_NUMBERS, BONUS_NUMBER)).not.toThrow();
  });
});
