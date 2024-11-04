import { Console } from "@woowacourse/mission-utils";
import App from "../src/App.js";
import { ERROR_MESSAGE } from "../src/constants/errorMessages.js";
import { HELPER_MESSAGE } from "../src/constants/helperMessages";
import { Validator } from "../src/features/validator/Validator.js";
import { InputHandler } from "../src/utils/InputHandler.js";
import {
  forEach,
  getErrorSpy,
  getLogSpy,
  mockQuestions,
} from "../src/utils/testUtils.js";

describe("입력값 유효성 test", () => {});

describe("구매 금액 입력값 유효성 test", () => {
  test.each([
    ["123a", ERROR_MESSAGE.number.notNumber],
    ["-10000", ERROR_MESSAGE.number.notPositive],
    ["20000.20", ERROR_MESSAGE.number.notInteger],
    ["10000000", ERROR_MESSAGE.number.tooLarge],
  ])("로또 구입 금액에 대한 입력 유효성 검사", (price, errorMessage) => {
    expect(() => Validator.isValidPrice(price)).toThrow(
      `[ERROR] ${errorMessage}`
    );
  });

  test.each([
    ["1200", false],
    ["1000", true],
    ["14000", true],
  ])(
    "금액 입력값이 1000원 단위가 아니라면 에러 반환",
    async (price, result) => {
      if (result) {
        expect(() => Validator.isValidPrice(price)).not.toThrow();
      } else {
        expect(() => Validator.isValidPrice(price)).toThrow(
          `[ERROR] ${ERROR_MESSAGE.lotto.invalidUnit}`
        );
      }
    }
  );

  test.each([[["123a", "aaaa"]], [["123a"]], [["123a", "aaaa", "bbbb"]]])(
    "문자열이 입력으로 들어온 경우 정상적인 값이 들어올 때까지 반복",
    async (prices) => {
      const logSpy = getLogSpy();

      const INPUT_NUMBERS_TO_END = ["1000"];
      mockQuestions([...prices, ...INPUT_NUMBERS_TO_END]);
      const result = await InputHandler.getPrice();

      expect(result).toBe(1000);
      expect(logSpy).toHaveBeenCalledTimes(prices.length);
    }
  );
});

describe("당첨번호 입력값 유효성 test", () => {
  test.each([
    ["1,2,3,4"],
    ["1,2,3,4,5", "1,2,3"],
    ["1,2,3,4,5", "1,2,3,4,5,6,7,8", "1,2,3"],
  ])(
    "문자열이 6개의 숫자로 구성되지 않으면 최대 10번까지 사용자로부터 입력을 다시 받는다",
    async (winnerNumbers) => {
      const logSpy = getLogSpy();

      const INPUT_NUMBERS_TO_END = ["5,6,7,8,9,10"];
      mockQuestions([...winnerNumbers, ...INPUT_NUMBERS_TO_END]);
      const result = await InputHandler.getWinningNumbers();

      expect(result).toStrictEqual([5, 6, 7, 8, 9, 10]);
      expect(logSpy).toHaveBeenCalledTimes(winnerNumbers.length);
    }
  );

  test.each([
    [[1, 2, 3, 4, 5], ERROR_MESSAGE.lotto.invalidCount],
    [[1, 2, 3, 3, 4, 5], ERROR_MESSAGE.lotto.isDuplicated],
    [[1, 2, 3, 4, 5, "aa"], ERROR_MESSAGE.number.notNumber],
    [[1, 2, 3, 4, 5, -10], ERROR_MESSAGE.number.notPositive],
    [[1, 2, 3, 4, 5, 6.6], ERROR_MESSAGE.number.notInteger],
  ])("당첨번호 입력값에 대한 입력 유효성 검사", (price, errorMessage) => {
    expect(() => Validator.isValidWinningLotto(price)).toThrow(
      `[ERROR] ${errorMessage}`
    );
  });

  test.each([
    [[1, 2, 3, 4, 5, 45], true],
    [[1, 2, 3, 4, 44, 45], true],
    [[1, 2, 3, 3, 5, 46], false],
    [[1, 2, 3, 3, 5, 0], false],
    [[1, 2, 3, 3, 5, 1000], false],
  ])("당첨번호의 값이 범위가 1~45 사이 값인지 확인한다", (price, result) => {
    if (result) {
      expect(() => Validator.isValidWinningLotto(price)).not.toThrow();
    } else {
      expect(() => Validator.isValidWinningLotto(price)).toThrow(`[ERROR]`);
    }
  });
});

describe("보너스 번호 입력값 유효성 test", () => {
  test.each([
    ["", ERROR_MESSAGE.string.notNull],
    ["abs", ERROR_MESSAGE.number.notNumber],
    ["-7", ERROR_MESSAGE.number.notPositive],
    ["0", ERROR_MESSAGE.number.notZero],
    ["6.6", ERROR_MESSAGE.number.notInteger],
  ])("보너스 번호 입력값 유효성을 검사한다", (price, errorMessage) => {
    expect(() => Validator.isValidBonusBall(price)).toThrow(
      `[ERROR] ${errorMessage}`
    );
  });

  test.each([
    [1, true],
    [45, true],
    [46, false],
    [1000, false],
  ])("보너스 번호의 값의 범위가 1~45 사이 값인지 확인한다", (price, result) => {
    if (result) {
      expect(() => Validator.isValidBonusBall(price)).not.toThrow();
    } else {
      expect(() => Validator.isValidBonusBall(price)).toThrow(`[ERROR]`);
    }
  });

  test("문자열이 6개의 숫자로 구성되지 않으면 최대 10번까지 사용자로부터 입력을 다시 받는다", async () => {
    const logSpy = getLogSpy();
    const BONUS_BALLS = ["1", "2", "3", "4", "5", "6", "7"];
    const WINNER_LOTTO = [1, 2, 3, 4, 5, 6];
    mockQuestions([...BONUS_BALLS]);
    const result = await InputHandler.getBonusBall(WINNER_LOTTO);

    expect(result).toBe(7);
    expect(logSpy).toHaveBeenCalledTimes(6);
  });
});
