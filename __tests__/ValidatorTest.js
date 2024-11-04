import { lottoValidator } from "../src/validator.js";

describe("Validator 클래스 테스트", () => {
  test("구입 가격이 1000으로 나누어 떨어지지 않으면 예외 발생", () => {
    expect(() => {
      lottoValidator.validatePurchasePrice(1500);
    }).toThrow(
      "[ERROR] : 로또 구입 가격은 1000으로 나누어 떨어지는 0보다 큰 정수로 입력해주세요."
    );

    expect(() => {
      lottoValidator.validatePurchasePrice(999);
    }).toThrow(
      "[ERROR] : 로또 구입 가격은 1000으로 나누어 떨어지는 0보다 큰 정수로 입력해주세요."
    );
  });

  test("당첨 번호 개수가 6개가 아니면 예외 발생", () => {
    expect(() => {
      lottoValidator.validateWinningNumberList([1, 2, 3, 4, 5]);
    }).toThrow("[ERROR] : 당첨 번호는 6개 입력해주세요.");
  });

  test("당첨 번호가 유효하지 않으면 예외 발생", () => {
    expect(() => {
      lottoValidator.validateWinningNumberList([1, 2, -3, 4, 46, 6]);
    }).toThrow("[ERROR] : 당첨 번호는 1~45 사이의 정수로 입력해주세요.");
  });

  test("중복된 당첨 번호가 있으면 예외 발생", () => {
    expect(() => {
      lottoValidator.validateWinningNumberList([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR] : 당첨 번호는 중복된 숫자를 입력할 수 없습니다.");
  });

  test("보너스 번호가 유효하지 않으면 예외 발생", () => {
    expect(() => {
      lottoValidator.validateBonusNumber([1, 2, 3, 4, 5, 6], 6);
    }).toThrow("[ERROR] : 보너스 숫자는 당첨 숫자와 중복될 수 없어요");
  });
});
