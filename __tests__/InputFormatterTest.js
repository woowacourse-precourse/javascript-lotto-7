import InputFormatter from "../src/InputFormatter";
import { ERROR_MESSAGES } from "../src/InputFormatter";

describe("InputFormatter 클래스 테스트", () => {
  test("구매 금액이 1000원 단위가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new InputFormatter("1500", "1,2,3,4,5,6", "7");
    }).toThrow("[ERROR]");
  });

  test("구매 금액이 실수일 경우 예외가 발생한다.", () => {
    expect(() => {
      new InputFormatter("1000.5", "1,2,3,4,5,6", "7");
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 6개가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new InputFormatter("3000", "1,2,3,4,5", "7");
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있을 경우 예외가 발생한다.", () => {
    expect(() => {
      new InputFormatter("3000", "1,2,3,3,5,6", "7");
    }).toThrow("[ERROR]");
  });

  test("로또 번호가 1에서 45 사이가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new InputFormatter("3000", "0,2,3,4,5,6", "7");
    }).toThrow("[ERROR]");
    expect(() => {
      new InputFormatter("3000", "1,2,3,4,5,46", "7");
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 로또 번호와 중복될 경우 예외가 발생한다.", () => {
    expect(() => {
      new InputFormatter("3000", "1,2,3,4,5,6", "6");
    }).toThrow("[ERROR]");
  });

  test("보너스 번호가 1에서 45 사이가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new InputFormatter("3000", "1,2,3,4,5,6", "50");
    }).toThrow("[ERROR]");
  });

  test("올바른 입력값이 주어지면 예외가 발생하지 않는다.", () => {
    expect(() => {
      const inputFormatter = new InputFormatter("3000", "1,2,3,4,5,6", "7");
      expect(inputFormatter.purchaseAmount).toBe(3000);
      expect(inputFormatter.winningNumbers).toEqual([1, 2, 3, 4, 5, 6]);
      expect(inputFormatter.bonusNumber).toBe(7);
    }).not.toThrow();
  });

  test("올바른 입력값이 주어졌을 때 포맷된 값을 반환한다.", () => {
    const inputFormatter = new InputFormatter("5000", "8,19,23,40,41,42", "15");

    expect(inputFormatter.purchaseAmount).toBe(5000);
    expect(inputFormatter.winningNumbers).toEqual([8, 19, 23, 40, 41, 42]);
    expect(inputFormatter.bonusNumber).toBe(15);
  });
});
