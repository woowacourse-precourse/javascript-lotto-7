import { ERROR_MESSAGES } from "../src/constants/ErrorMessages.js";
import validators from "../src/utils/Validators.js";

describe("Validators 테스트", () => {
  test("금액 입력이 숫자가 아니거나 0 이하일 경우 예외 발생", () => {
    expect(() => validators.checkMoneyInput("notANumber")).toThrow(
      ERROR_MESSAGES.INVALID_MONEY_INPUT
    );
    expect(() => validators.checkMoneyInput(-100)).toThrow(
      ERROR_MESSAGES.INVALID_MONEY_INPUT
    );
    expect(() => validators.checkMoneyInput(0)).toThrow(
      ERROR_MESSAGES.INVALID_MONEY_INPUT
    );
  });

  test("최소 금액이 1000 이하일 경우 예외 발생", () => {
    expect(() => validators.checkMinMoneyInput(500)).toThrow(
      ERROR_MESSAGES.MIN_MONEY_INPUT
    );
    expect(() => validators.checkMinMoneyInput(1000)).toThrow(
      ERROR_MESSAGES.MIN_MONEY_INPUT
    );
  });

  test("로또 번호의 개수가 6개가 아닐 경우 예외 발생", () => {
    expect(() => validators.checkLottoLength([1, 2, 3])).toThrow(
      ERROR_MESSAGES.NUMBER_OF_INPUT
    );
    expect(() => validators.checkLottoLength([1, 2, 3, 4, 5, 6, 7])).toThrow(
      ERROR_MESSAGES.NUMBER_OF_INPUT
    );
  });

  test("금액이 1000으로 나누어 떨어지지 않으면 예외 발생", () => {
    expect(() => validators.checkDivisible(1500)).toThrow(
      ERROR_MESSAGES.INDIVISIBLE_MONEY_INPUT
    );
  });

  test("금액이 100,000,000을 초과하면 예외 발생", () => {
    expect(() => validators.checkLimitMoney(100_000_001)).toThrow(
      ERROR_MESSAGES.LIMIT_MONEY_INPUT
    );
  });

  test("로또 번호가 6개가 아니면 예외 발생", () => {
    expect(() => validators.checkNumberOfLotto([1, 2, 3])).toThrow(
      ERROR_MESSAGES.NUMBER_OF_INPUT
    );
    expect(() => validators.checkNumberOfLotto([1, 2, 3, 4, 5, 6, 7])).toThrow(
      ERROR_MESSAGES.NUMBER_OF_INPUT
    );
  });

  test("입력 값이 숫자가 아니면 예외 발생", () => {
    expect(() => validators.checkNumber("notANumber")).toThrow(
      ERROR_MESSAGES.INVALID_NUMBER_INPUT
    );
  });

  test("숫자가 1~45 범위 밖이면 예외 발생", () => {
    expect(() => validators.checkRangeOfNumber(0)).toThrow(
      ERROR_MESSAGES.OUT_OF_RANGE_NUMBER_INPUT
    );
    expect(() => validators.checkRangeOfNumber(46)).toThrow(
      ERROR_MESSAGES.OUT_OF_RANGE_NUMBER_INPUT
    );
  });

  test("중복된 번호가 있으면 예외 발생", () => {
    expect(() => validators.checkDuplicateNumber([1, 2, 3, 3, 4, 5])).toThrow(
      ERROR_MESSAGES.DUPLICATE_NUMBER_INPUT
    );
  });

  test("보너스 번호가 로또 번호에 포함되면 예외 발생", () => {
    expect(() => validators.checkBonusNumber(7, [1, 2, 3, 4, 5, 7])).toThrow(
      ERROR_MESSAGES.INVALID_BONUS_NUMBER_INPUT
    );
  });
});
