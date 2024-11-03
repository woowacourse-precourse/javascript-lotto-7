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

const repeatException = async (input) => {};

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
    async (input) => {
      const logSpy = getLogSpy();

      const INPUT_NUMBERS_TO_END = ["1000"];
      mockQuestions([...input, ...INPUT_NUMBERS_TO_END]);
      const result = await InputHandler.getPrice();

      expect(result).toBe("1000");
      expect(logSpy).toHaveBeenCalledTimes(input.length);
    }
  );
});
