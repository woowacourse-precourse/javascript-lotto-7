import Bonus from "../src/Bonus.js";
import { Errors } from "../src/constants.js";

describe("보너스 클래스 테스트", () => {
  test("보너스 번호가 정수가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Bonus("a", [1, 2, 3, 4, 5, 6]);
    }).toThrow(Errors.bonusNumber.NOT_INTEGER_NUMBER);
  });

  test("보너스 번호가 당첨 번호와 중복될 경우 예외가 발생한다.", () => {
    expect(() => {
      new Bonus(1, [1, 2, 3, 4, 5, 6]);
    }).toThrow(Errors.bonusNumber.NOT_UNIQUE_NUMBER);
  });

  test("보너스 번호는 정수이며 당첨 번호와 중복되지 않아야한다.", () => {
    expect(() => {
      new Bonus(7, [1, 2, 3, 4, 5, 6]);
    }).not.toThrow();
  });
});
