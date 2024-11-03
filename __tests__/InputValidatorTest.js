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

describe("입력값 유효성 test", () => {
  test.each([["123a", ERROR_MESSAGE.number.notNumber]])(
    "로또 구입 금액에 대한 입력 유효성 검사",
    (price, errorMessage) => {
      expect(() => Validator.isValidPrice(price)).toThrow(
        `[ERROR] ${errorMessage}`
      );
    }
  );
});

describe("구매 금액 입력값 유효성 test", () => {
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
});

describe("보너스 번호 입력값 유효성 test", () => {
  test.each([
    ["", false, ERROR_MESSAGE.string.notNull],
    ["abs", false, ERROR_MESSAGE.number.notNumber],
    ["7", true, ""],
  ])(
    "보너스 번호 입력값 유효성을 검사한다",
    async (bonusBall, result, errorMessage) => {
      if (result) {
        expect(() => Validator.isValidBonusBall(bonusBall)).not.toThrow();
      } else {
        expect(() => Validator.isValidBonusBall(bonusBall)).toThrow(
          `[ERROR] ${errorMessage}`
        );
      }
    }
  );
});
