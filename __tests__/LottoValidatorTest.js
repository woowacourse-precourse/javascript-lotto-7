import LottoValidator from "../src/LottoValidator.js";
import { ERROR_MESSAGES } from "../src/constants.js";

describe("LottoValidator 클래스 테스트", () => {
  test("구입 금액이 1,000원 단위가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      LottoValidator.validateAmount(1500);
    }).toThrow(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
  });

  test("구입 금액이 0 이하인 경우 예외가 발생한다.", () => {
    expect(() => {
      LottoValidator.validateAmount(0);
    }).toThrow(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);

    expect(() => {
      LottoValidator.validateAmount(-1000);
    }).toThrow(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
  });

  test("구입 금액이 숫자가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      LottoValidator.validateAmount("abc");
    }).toThrow(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);

    expect(() => {
      LottoValidator.validateAmount(null);
    }).toThrow(ERROR_MESSAGES.INVALID_PURCHASE_AMOUNT);
  });

  test("구입 금액이 유효한 경우 예외가 발생하지 않는다.", () => {
    expect(() => {
      LottoValidator.validateAmount(1000);
    }).not.toThrow();

    expect(() => {
      LottoValidator.validateAmount(2000);
    }).not.toThrow();
  });

  test("보너스 번호가 숫자가 아닐 경우 예외가 발생한다.", () => {
    expect(() => {
      LottoValidator.checkBonusNumberType("a");
    }).toThrow(ERROR_MESSAGES.INVALID_BONUS_NUMBER_TYPE);
  });

  test("보너스 번호가 유효한 범위를 벗어날 경우 예외가 발생한다.", () => {
    expect(() => {
      LottoValidator.checkBonusNumberRange(0);
    }).toThrow(ERROR_MESSAGES.INVALID_BONUS_NUMBER_RANGE);

    expect(() => {
      LottoValidator.checkBonusNumberRange(46);
    }).toThrow(ERROR_MESSAGES.INVALID_BONUS_NUMBER_RANGE);
  });

  test("보너스 번호가 당첨 번호와 중복될 경우 예외가 발생한다.", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    expect(() => {
      LottoValidator.checkBonusNumberDuplication(3, winningNumbers);
    }).toThrow(ERROR_MESSAGES.DUPLICATE_BONUS_NUMBER);
  });

  test("보너스 번호가 1에서 45 사이의 유효한 번호이고 당첨 번호와 중복되지 않으면 예외가 발생하지 않는다.", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    expect(() => {
      LottoValidator.validateBonusNumber(7, winningNumbers);
    }).not.toThrow();
  });
});
