import validatePurchaseAmount from '../../src/validators/PurchaseAmountValidator.js';
import { TAGS } from '../../src/constants/message.js';

describe("validatePurchaseAmount() 테스트", () => {

  test.each([
    ["빈 문자열", ""],
    ["공백 문자열", " "],
  ])("금액이 %s일 경우, 입력값이 비어 있어 에러가 발생해야 한다", (_, input) => {
    expect(() => validatePurchaseAmount(input)).toThrow(TAGS.ERROR);
  });

  test.each([
    ["0", "0"],
    ["음수 금액", "-1000"],
    ["소수점이 포함된 금액", "1000.50"],
  ])("금액이 %s일 경우, 유효하지 않은 금액으로 에러가 발생해야 한다", (_, input) => {
    expect(() => validatePurchaseAmount(input)).toThrow(TAGS.ERROR);
  });

  test.each([
    ["문자열이 포함된 값 'abc'", "abc"],
    ["숫자와 한글이 혼합된 값 '1000원'", "1000원"],
  ])("금액이 %s일 경우, 금액 형식에 맞지 않아 에러가 발생해야 한다", (_, input) => {
    expect(() => validatePurchaseAmount(input)).toThrow(TAGS.ERROR);
  });

  test.each([
    ["1000원 단위가 아닌 값 '1500'", "1500"],
    ["1000원 단위가 아닌 값 '2500'", "2500"],
  ])("금액이 %s일 경우, 1000원 단위가 아니어서 에러가 발생해야 한다", (_, input) => {
    expect(() => validatePurchaseAmount(input)).toThrow(TAGS.ERROR);
  });

  test.each([
    ["유효한 금액 1000", "1000"],
    ["유효한 금액 2000", "2000"],
    ["유효한 금액 5000", "5000"],
  ])("%s이 입력된 경우, 예외가 발생하지 않아야 한다", (_, input) => {
    expect(() => validatePurchaseAmount(input)).not.toThrow();
  });
});
