import inputValidator from "../src/inputValidator";

describe("구입금액 입력 유효성 테스트", () => {
  test("빈 이름 입력 시 예외", () => {
    expect(() => inputValidator.checkPurchaseAmount(null)).toThrow(
      "[ERROR] 입력이 비어있습니다."
    );
    expect(() => inputValidator.checkPurchaseAmount("  ")).toThrow(
      "[ERROR] 입력이 비어있습니다."
    );
  });

  test("숫자가 아닌 문자 입력 시 예외", () => {
    expect(() => inputValidator.checkPurchaseAmount("hello")).toThrow(
      "[ERROR] 숫자가 아닌 문자가 있습니다."
    );
    expect(() => inputValidator.checkPurchaseAmount("5000won")).toThrow(
      "[ERROR] 숫자가 아닌 문자가 있습니다."
    );
  });

  test("소수 입력 시 예외", () => {
    expect(() => inputValidator.checkPurchaseAmount("5000.5")).toThrow(
      "[ERROR] 정수가 아닌 숫자입니다."
    );
  });

  test("양수가 아닌 수 입력 시 예외", () => {
    expect(() => inputValidator.checkPurchaseAmount("-5000")).toThrow(
      "[ERROR] 0 또는 음수 입력은 불가합니다."
    );
    expect(() => inputValidator.checkPurchaseAmount("0")).toThrow(
      "[ERROR] 0 또는 음수 입력은 불가합니다."
    );
  });

  test("1000원 단위 입력이 아닐 시 예외", () => {
    expect(() => inputValidator.checkPurchaseAmount("11110")).toThrow(
      "[ERROR] 입력이 1000원 단위가 아닙니다."
    );
  });

  test("유효한 숫자인 경우", () => {
    expect(inputValidator.checkPurchaseAmount("5000")).toBe(5000);
    expect(inputValidator.checkPurchaseAmount("11000")).toBe(11000);
  });
});

describe("당첨 번호 입력 유효성 테스트", () => {
  test("빈 입력 시 예외", () => {
    expect(() => inputValidator.checkWinningNumbers("")).toThrow(
      "[ERROR] 입력이 비어있습니다."
    );
  });

  test("6개의 번호가 아닐 시 예외", () => {
    expect(() => inputValidator.checkWinningNumbers("1,2,3,6")).toThrow(
      "[ERROR] 로또 번호는 6개여야 합니다."
    );
  });

  test("숫자가 아닌 문자 포함 시 예외", () => {
    expect(() => inputValidator.checkWinningNumbers("1,2,a,3,4,5")).toThrow(
      "[ERROR] 숫자가 아닌 문자가 있습니다."
    );
  });

  test("양수가 아닌 숫자 포함 시 예외", () => {
    expect(() => inputValidator.checkWinningNumbers("1,2,-7,3,4,5")).toThrow(
      "[ERROR] 0 또는 음수 입력은 불가합니다."
    );
  });

  test("정수가 아닌 숫자 포함 시 예외", () => {
    expect(() => inputValidator.checkWinningNumbers("1,2,7.5,3,4,5")).toThrow(
      "[ERROR] 정수가 아닌 숫자입니다."
    );
  });

  test("1~45 범위를 벗어난 숫자 포함 시 예외", () => {
    expect(() => inputValidator.checkWinningNumbers("1,2,50,11,12,16")).toThrow(
      "[ERROR] 1에서 45 사이의 번호가 아닙니다."
    );
  });

  test("중복된 숫자 포함 시 예외", () => {
    expect(() => inputValidator.checkWinningNumbers("1,2,3,3,5,6")).toThrow(
      "[ERROR] 중복된 당첨 번호가 있습니다."
    );
  });

  test("유효한 번호 입력", () => {
    expect(inputValidator.checkWinningNumbers("1,2,3,4,5,6")).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });
});

describe("보너스 번호 입력 유효성 테스트", () => {
  const winningNumbers = [1, 2, 3, 4, 5, 6];

  test("빈 입력 시 예외", () => {
    expect(() => inputValidator.checkBonusNumber("", winningNumbers)).toThrow(
      "[ERROR] 입력이 비어있습니다."
    );
  });

  test("숫자가 아닌 문자 포함 시 예외", () => {
    expect(() => inputValidator.checkBonusNumber("a", winningNumbers)).toThrow(
      "[ERROR] 숫자가 아닌 문자가 있습니다."
    );
  });

  test("소수 입력 시 예외", () => {
    expect(() =>
      inputValidator.checkBonusNumber("5.5", winningNumbers)
    ).toThrow("[ERROR] 정수가 아닌 숫자입니다.");
  });

  test("음수 입력 시 예외", () => {
    expect(() => inputValidator.checkBonusNumber("-7", winningNumbers)).toThrow(
      "[ERROR] 0 또는 음수 입력은 불가합니다."
    );
  });

  test("1~45 범위를 벗어난 숫자 포함 시 예외", () => {
    expect(() => inputValidator.checkBonusNumber("50", winningNumbers)).toThrow(
      "[ERROR] 1에서 45 사이의 번호가 아닙니다."
    );
  });

  test("당첨 번호와 중복된 숫자 포함 시 예외", () => {
    expect(() => inputValidator.checkBonusNumber("6", winningNumbers)).toThrow(
      "[ERROR] 중복된 당첨 번호가 있습니다."
    );
  });

  test("유효한 번호 입력", () => {
    expect(inputValidator.checkBonusNumber("11", winningNumbers)).toBe(11);
  });
});
