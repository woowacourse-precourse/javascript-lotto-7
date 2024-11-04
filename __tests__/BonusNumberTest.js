import App from "../src/App.js";
import Lotto from "../src/Lotto.js";
import ERRORS from "../src/constants/Errors.js";

describe("보너스 번호 검증 테스트", () => {
  let app;
  let winningLotto;

  beforeEach(() => {
    app = new App();
    winningLotto = new Lotto([1, 2, 3, 4, 5, 6]);
  });

  test("당첨 번호와 중복되는 보너스 번호를 입력하면 에러가 발생한다", () => {
    // given
    const duplicateNumbers = [1, 2, 3, 4, 5, 6];

    // when & then
    duplicateNumbers.forEach((number) => {
      expect(() => {
        app.validateBonusNumber(number, winningLotto);
      }).toThrow(ERRORS.NOT_BONUS_NUMBER);
    });
  });

  test("1부터 45 사이의 숫자가 아닌 경우 에러가 발생한다", () => {
    // given
    const invalidNumbers = [-1, 0, 46, 100];

    // when & then
    invalidNumbers.forEach((number) => {
      expect(() => {
        app.validateBonusNumber(number, winningLotto);
      }).toThrow(ERRORS.NOT_1_TO_45);
    });
  });

  test("정수가 아닌 숫자를 입력하면 에러가 발생한다", () => {
    // given
    const notIntegerNumbers = [1.5, 2.7, 44.9];

    // when & then
    notIntegerNumbers.forEach((number) => {
      expect(() => {
        app.validateBonusNumber(number, winningLotto);
      }).toThrow(ERRORS.NOT_1_TO_45);
    });
  });

  test("숫자가 아닌 값을 입력하면 에러가 발생한다", () => {
    // given
    const invalidInputs = ["a", "7번", null, undefined, NaN];

    // when & then
    invalidInputs.forEach((input) => {
      expect(() => {
        app.validateBonusNumber(input, winningLotto);
      }).toThrow(ERRORS.NOT_1_TO_45);
    });
  });

  test("유효한 보너스 번호를 입력하면 에러가 발생하지 않는다", () => {
    // given
    const validNumbers = [7, 15, 25, 35, 45];

    // when & then
    validNumbers.forEach((number) => {
      expect(() => {
        app.validateBonusNumber(number, winningLotto);
      }).not.toThrow();
    });
  });

  test("다른 당첨 번호 조합에서도 보너스 번호 검증이 정상 동작한다", () => {
    // given
    const differentWinningLotto = new Lotto([7, 15, 25, 35, 40, 45]);
    const validBonusNumbers = [1, 2, 3, 4, 5, 6];

    // when & then
    validBonusNumbers.forEach((number) => {
      expect(() => {
        app.validateBonusNumber(number, differentWinningLotto);
      }).not.toThrow();
    });
  });
});
