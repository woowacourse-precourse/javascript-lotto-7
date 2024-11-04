import { ERROR_MESSAGES } from "../src/config/constants.js";
import ValidateBonusNumber from "../src/utils/ValidateBonusNumber.js";

describe("로또 보너스 번호 검증 테스트", () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];

  test("보너스 번호가 숫자가 아닐 때 오류를 발생시킨다", () => {
    const invalidBonusNumber = "abc";
    expect(() => {
      ValidateBonusNumber.validate(winningNumbers, invalidBonusNumber);
    }).toThrow(ERROR_MESSAGES.bonusNumberNotANumber);
  });

  test("보너스 번호가 1 미만일 때 오류를 발생시킨다", () => {
    const invalidBonusNumber = "0";
    expect(() => {
      ValidateBonusNumber.validate(winningNumbers, invalidBonusNumber);
    }).toThrow(ERROR_MESSAGES.bonusNumberOutOfRange);
  });

  test("보너스 번호가 45 초과일 때 오류를 발생시킨다", () => {
    const invalidBonusNumber = "46";
    expect(() => {
      ValidateBonusNumber.validate(winningNumbers, invalidBonusNumber);
    }).toThrow(ERROR_MESSAGES.bonusNumberOutOfRange);
  });

  test("보너스 번호가 당첨 번호와 중복될 때 오류를 발생시킨다", () => {
    const duplicateBonusNumber = "5";
    expect(() => {
      ValidateBonusNumber.validate(winningNumbers, duplicateBonusNumber);
    }).toThrow(ERROR_MESSAGES.bonusNumberDuplicate);
  });

  test("유효한 보너스 번호가 통과된다", () => {
    const validBonusNumber = "7";
    expect(() => {
      ValidateBonusNumber.validate(winningNumbers, validBonusNumber);
    }).not.toThrow();
  });
});
