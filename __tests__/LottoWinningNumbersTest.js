import { WINNING_NUMBERS } from "../src/constants/validationMessages/winningNumbers.js";
import { validateWinningNumbersPipe } from "../src/validation/validateWinningNumbers/validateWinningNumbersPipe.js";

describe("로또 당첨 번호 테스트", () => {
  test.each([
    ["1/2/3/4/5/6", WINNING_NUMBERS.INVALID_SEPARATOR],
    ["q,w,e", WINNING_NUMBERS.NOT_A_NUMBER],
    ["1,2,3,4,5,1", WINNING_NUMBERS.DUPLICATE_NUMBERS],
    ["1,2,3,4,5,90", WINNING_NUMBERS.OUT_OF_RANGE],
    ["1,2,3", WINNING_NUMBERS.INVALID_COUNT],
    ["1,2,3,4,5,6,7", WINNING_NUMBERS.INVALID_COUNT],
  ])("validateWinningNumbersPipe(%s) throw %s", (input, expected) => {
    expect(() => validateWinningNumbersPipe(input).toThrow(expected));
  });
});
