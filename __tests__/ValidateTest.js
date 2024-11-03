import validateWinningNumbers from "../src/validate/validateWinningNumbers";
import validateNumber from "../src/validate/validateNumber";
describe("검증 테스트", () => {
  test("숫자가 6개가 아닐 때 예외가 발생한다.", () => {
    expect(() => {
      validateWinningNumbers([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR] 6개의 숫자를 입력해 주세요.");
  });

  test("중복된 숫자가 있을 때 예외가 발생한다.", () => {
    expect(() => {
      validateWinningNumbers([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] 중복되지 않은 숫자를 입력해 주세요.");
  });

  test("숫자가 아닌 값이 입력되면 예외가 발생한다.", () => {
    expect(() => {
      validateNumber("a");
    }).toThrow("[ERROR] 숫자를 입력해 주세요.");
  });

  test("1~45 사이의 숫자가 아닌 값이 입력되면 예외가 발생한다.", () => {
    expect(() => {
      validateNumber(46);
    }).toThrow("[ERROR] 1~45 사이의 숫자를 입력해 주세요.");
  });

  test("정수가 아닌 값이 입력되면 예외가 발생한다.", () => {
    expect(() => {
      validateNumber(1.5);
    }).toThrow("[ERROR] 정수를 입력해 주세요.");
  });
  test("올바른 숫자가 입력되면 예외가 발생하지 않는다.", () => {
    expect(() => {
      validateNumber(1);
    }).not.toThrow();
  });
});
