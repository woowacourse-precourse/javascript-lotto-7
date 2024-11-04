import InputValidator from "../src/InputValidator";

describe("InputValidator 클래스 테스트", () => {
  let inputValidator;

  beforeEach(() => {
    inputValidator = new InputValidator();
  });

  test("보너스 번호가 입력되지 않으면 예외가 발생한다.", () => {
    expect(() => {
      inputValidator.validateBonusNumber("", [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR] 보너스 번호는 입력해야 합니다.");

    expect(() => {
      inputValidator.validateBonusNumber(null, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR] 보너스 번호는 입력해야 합니다.");
  });

  test("보너스 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      inputValidator.validateBonusNumber("a", [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR] 보너스 번호는 숫자여야 합니다.");
  });

  test("보너스 번호가 범위를 벗어나면 예외가 발생한다.", () => {
    expect(() => {
      inputValidator.validateBonusNumber(0, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");

    expect(() => {
      inputValidator.validateBonusNumber(46, [1, 2, 3, 4, 5, 6]);
    }).toThrow("[ERROR] 보너스 번호는 1부터 45 사이의 숫자여야 합니다.");
  });

  test("보너스 번호가 당첨 번호와 중복되면 예외가 발생한다.", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    expect(() => {
      inputValidator.validateBonusNumber(1, winningNumbers);
    }).toThrow("[ERROR] 보너스 번호는 당첨 번호와 중복될 수 없습니다.");
  });

  test("유효한 보너스 번호일 경우 정상적으로 처리된다.", () => {
    const winningNumbers = [1, 2, 3, 4, 5, 6];
    expect(inputValidator.validateBonusNumber(7, winningNumbers)).toBe(true);
    expect(inputValidator.validateBonusNumber(45, winningNumbers)).toBe(true);
  });
});
