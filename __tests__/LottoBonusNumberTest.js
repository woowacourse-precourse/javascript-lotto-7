import { BONUS_NUMBER } from "../src/constants/validationMessages/bonusNumber.js";
import { validateBonusNumberPipe } from "../src/validation/validateBonusNumber/validateBonusNumberPipe.js";

describe("보너스 넘버 테스트", () => {
  test.each([
    ["90", "1,2,3,4,5,6", BONUS_NUMBER.OUT_OF_RANGE],
    ["a", "1,2,3,4,5,6", BONUS_NUMBER.NOT_A_NUMBER],
    ["1", "1,2,3,4,5,6", BONUS_NUMBER.DUPLICATE_WITH_WINNING],
    ["7,8", "1,2,3,4,5,6", BONUS_NUMBER.INVALID_COUNT],
  ])(
    "validateBonusNumberPipe(%s) throw %s",
    (bonusNumber, winningNumbers, expected) => {
      expect(() =>
        validateBonusNumberPipe(bonusNumber, winningNumbers)
      ).toThrow(expected);
    }
  );
});
