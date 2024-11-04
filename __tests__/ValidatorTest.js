import Validator from "../src/utils/Validator.js";
import { ERROR_MESSAGES } from "../src/constants/Constants.js";

describe("Validator 클래스", () => {
  describe("validatePurchaseMoney", () => {
    test("유효한 구입 금액에 대해 오류가 발생하지 않아야 한다.", () => {
      expect(() => Validator.validatePurchaseMoney(10000)).not.toThrow();
    });

    test("빈 입력에 대해 오류가 발생해야 한다.", () => {
      expect(() => Validator.validatePurchaseMoney()).toThrow(
        ERROR_MESSAGES.EMPTY_INPUT
      );
    });

    test("숫자가 아닌 입력에 대해 오류가 발생해야 한다.", () => {
      expect(() => Validator.validatePurchaseMoney("test")).toThrow(
        ERROR_MESSAGES.INVALID_MONEY_NUMBER
      );
    });

    test("티켓 가격 미만의 금액에 대해 오류가 발생해야 한다.", () => {
      expect(() => Validator.validatePurchaseMoney(500)).toThrow(
        ERROR_MESSAGES.INVALID_MONEY_MINIMUM
      );
    });

    test("티켓 가격의 배수가 아닌 금액에 대해 오류가 발생해야 한다.", () => {
      expect(() => Validator.validatePurchaseMoney(1500)).toThrow(
        ERROR_MESSAGES.INVALID_MONEY_UNIT
      );
    });
  });

  describe("validateLottoNumbers", () => {
    test("유효한 로또 번호에 대해 오류가 발생하지 않아야 한다.", () => {
      const validNumbers = [1, 2, 3, 4, 5, 6];
      expect(() => Validator.validateLottoNumbers(validNumbers)).not.toThrow();
    });

    test("번호 개수가 잘못된 경우 오류가 발생해야 한다.", () => {
      const invalidCount = [1, 2, 3];
      expect(() => Validator.validateLottoNumbers(invalidCount)).toThrow(
        ERROR_MESSAGES.INVALID_WINNING_NUMBERS_COUNT
      );
    });

    test("중복된 번호가 있는 경우 오류가 발생해야 한다.", () => {
      const duplicates = [1, 2, 3, 4, 5, 5];
      expect(() => Validator.validateLottoNumbers(duplicates)).toThrow(
        ERROR_MESSAGES.WINNING_NUMBER_DUPLICATE
      );
    });

    test("범위를 벗어난 번호가 있는 경우 오류가 발생해야 한다.", () => {
      const outOfRange = [0, 2, 3, 4, 5, 6];
      expect(() => Validator.validateLottoNumbers(outOfRange)).toThrow(
        ERROR_MESSAGES.WINNING_NUMBER_OUT_OF_RANGE
      );
    });

    describe("validateSeparator", () => {
      test("구분자가 잘못된 경우 오류가 발생해야 한다.", () => {
        const invalidSeparator = "1.2,3,4,5";
        expect(() => Validator.validateSeparator(invalidSeparator)).toThrow(
          ERROR_MESSAGES.INVALID_WINNING_SEPARATOR
        );
      });
    });
  });

  describe("validateBonusNumber", () => {
    test("유효한 보너스 번호에 대해 오류가 발생하지 않아야 한다.", () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      expect(() =>
        Validator.validateBonusNumber(7, winningNumbers)
      ).not.toThrow();
    });

    test("범위를 벗어난 보너스 번호에 대해 오류가 발생해야 한다.", () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      expect(() => Validator.validateBonusNumber(0, winningNumbers)).toThrow(
        ERROR_MESSAGES.BONUS_NUMBER_OUT_OF_RANGE
      );
    });

    test("당첨 번호와 중복된 보너스 번호에 대해 오류가 발생해야 한다.", () => {
      const winningNumbers = [1, 2, 3, 4, 5, 6];
      expect(() => Validator.validateBonusNumber(1, winningNumbers)).toThrow(
        ERROR_MESSAGES.BONUS_NUMBER_DUPLICATE
      );
    });
  });
});
