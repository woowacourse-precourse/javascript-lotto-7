import { BonusNumberValidator } from "../src/utils/validator/BonusNumberValidator.js";
import { ERROR_MESSAGES } from "../src/utils/constants/ErrorMessageConstants.js";

describe("보너스 번호 검증 테스트", () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];

  test("보너스 번호가 당첨 번호와 중복될 경우 에러 반환", () => {
    expect(() => {
      BonusNumberValidator.validateBonusNumber(1, winningNumbers);
    }).toThrow(ERROR_MESSAGES.INVALID_BONUS_NUMBER);
  });

  test("보너스 번호가 숫자가 아닐 경우 에러 반환", () => {
    expect(() => {
      BonusNumberValidator.validateBonusNumber("7", winningNumbers);
    }).toThrow(ERROR_MESSAGES.INVALID_NUMBER_FORMAT);
  });

  test("보너스 번호가 45를 초과할 경우 에러 반환", () => {
    expect(() => {
      BonusNumberValidator.validateBonusNumber(46, winningNumbers);
    }).toThrow(ERROR_MESSAGES.INVALID_RANGE);
  });

  test("보너스 번호가 양수가 아닐 경우 에러 반환", () => {
    expect(() => {
      BonusNumberValidator.validateBonusNumber(-1, winningNumbers);
    }).toThrow(ERROR_MESSAGES.INVALID_POSITIVE_NUMBER);
  });
});
