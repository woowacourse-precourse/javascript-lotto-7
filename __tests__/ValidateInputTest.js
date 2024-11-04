import ValidateInput from "../src/utils/ValidateInput.js";

describe("입력 유효성 검사 테스트", () => {
  const assertThrows = (fn, expectedMessage) => {
    expect(fn).toThrow(expectedMessage);
  };

  // 에러 메시지 상수 정의
  const ERROR_MESSAGES = {
    NATURAL_NUMBER: (subject) => `[ERROR] ${subject} 자연수로 입력해주세요.\n`,
    OUT_OF_RANGE: (subject) => `[ERROR] ${subject} 1부터 45사이의 값을 입력해주세요.\n`,
    MIN_PRICE: "[ERROR] 구입금액은 최소 1000원부터 입력해주세요.\n",
    PRICE_UNIT: "[ERROR] 구입금액은 1,000원 단위로 입력해주세요.\n",
    WINNING_NUMBER_COUNT: "[ERROR] 당첨 번호는 쉼표(,)로 구분하여 6개 입력해주세요.\n",
    DUPLICATE_NUMBER: "[ERROR] 번호들 중 중복된 값이 존재합니다. 서로 다른 값들로만 다시 입력하세요.\n",
    BONUS_NUMBER_DUPLICATE: "[ERROR] 당첨 번호들 중 보너스 번호와 중복된 값이 존재합니다. 다시 입력하세요.\n",
  };

  // 구입 금액
  describe("구입 금액", () => {
    test.each([["A"], ["1.2"], ["1/2"], ["one thousand"], ["-1000"]])("자연수 아님: %s", (input) => {
      assertThrows(() => ValidateInput.validatePrice(input), ERROR_MESSAGES.NATURAL_NUMBER("구입 금액은"));
    });

    test("금액 부족", () => {
      assertThrows(() => ValidateInput.validatePrice(500), ERROR_MESSAGES.MIN_PRICE);
    });

    test("1000원 단위 아님", () => {
      assertThrows(() => ValidateInput.validatePrice(2500), ERROR_MESSAGES.PRICE_UNIT);
    });
  });

  // 당첨번호
  describe("당첨번호", () => {
    test.each([[[1, 2, 3, 4]], [[1, 2, 3, 4, 5, 6, 7]]])("부족한 입력 / 초과된 입력: %j", (input) => {
      assertThrows(() => ValidateInput.validateWinningNumber(input), ERROR_MESSAGES.WINNING_NUMBER_COUNT);
    });

    test("당첨 번호 내의 중복 값", () => {
      assertThrows(() => ValidateInput.validateWinningNumber([1, 2, 3, 4, 5, 5]), ERROR_MESSAGES.DUPLICATE_NUMBER);
    });

    test.each([
      [[1, 2, 3, 4, 5, "a"]],
      [[1, 2, 3, 4, 5, 7.1]],
      [[-1, 2, 3, 4, 5, 6]],
      [["one", "two", "three", "four", "five", "six"]],
    ])("자연수 아닌 경우: %j", (input) => {
      assertThrows(() => ValidateInput.validateWinningNumber(input), ERROR_MESSAGES.NATURAL_NUMBER("당첨 번호는"));
    });

    test("1 ~ 45외의 값", () => {
      assertThrows(
        () => ValidateInput.validateWinningNumber([1, 2, 3, 4, 5, 46]),
        ERROR_MESSAGES.OUT_OF_RANGE("당첨 번호는")
      );
    });
  });

  // 보너스 번호
  describe("보너스 번호", () => {
    test("당첨번호와 중복", () => {
      assertThrows(() => ValidateInput.validateBonusNumber(7, [1, 7, 8, 9, 10]), ERROR_MESSAGES.BONUS_NUMBER_DUPLICATE);
    });

    test.each([["a"], [7.1], [-1], ["one"], [1 / 2]])("자연수 아님: %s", (input) => {
      assertThrows(() => ValidateInput.validateBonusNumber(input), ERROR_MESSAGES.NATURAL_NUMBER("보너스 번호는"));
    });

    test("1 ~ 45외의 값", () => {
      assertThrows(() => ValidateInput.validateBonusNumber(46), ERROR_MESSAGES.OUT_OF_RANGE("보너스 번호는"));
    });
  });
});
