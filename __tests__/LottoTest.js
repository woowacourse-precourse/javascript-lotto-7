import {calcLottoCnt, getLottoCnt, isDivided1000, isIntNumber, isPositiveNumber } from "../src/BuyPrice.js";
import Lotto from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  // TODO: 테스트가 통과하도록 프로덕션 코드 구현
  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  // TODO: 추가 기능 구현에 따른 테스트 코드 작성
  test("구매 금액이 양수가 아니면 예외가 발생한다.", () => {
    expect(()=> isPositiveNumber("1234")).not.toThrow("[ERROR]");
  });

  test("구매 금액이 양수가 아니면 예외가 발생한다.", () => {
    expect(() => isPositiveNumber("00as")).toThrow("[ERROR]");
  });

  test("구매 금액이 양수가 아니면 예외가 발생한다.", () => {
    expect(() => isPositiveNumber("")).toThrow("[ERROR]");
  });

  test("구매 금액이 양수가 아니면 예외가 발생한다.", () => {
    expect(() => isPositiveNumber("-1000")).toThrow("[ERROR]");
  });

  test("구매 금액이 양수가 아니면 예외가 발생한다.", () => {
    expect(() => isPositiveNumber("0")).toThrow("[ERROR]");
  });

  test("구매 금액이 1000으로 나누어 떨어지지 않으면 예외가 발생한다", () => {
    expect(() => isDivided1000("1234")).toThrow("[ERROR]");
  });

  test("구매 금액이 1000으로 나누어 떨어지지 않으면 예외가 발생한다", () => {
    expect(() => isDivided1000("1000")).not.toThrow("[ERROR]");
  });

  test("구매 금액이 정수 범위를 넘어가면 예외가 발생한다.", () => {
    expect(() => isIntNumber("9007199254740994")).toThrow("[ERROR]");
  });

  test("구매 금액이 정수 범위를 넘어가면 예외가 발생한다.", () => {
    expect(() => isIntNumber("9007199254740991")).not.toThrow("[ERROR]");
  });

  test("로또 개수가 맞는지 확인한다.", () => {
    expect(calcLottoCnt("20000")).toBe(20);
  });

  test("로또 개수가 맞는지 확인한다.", () => {
    expect(calcLottoCnt("1000")).toBe(1);
  });

  test("로또 개수가 맞는지 확인한다.", () => {
    expect(calcLottoCnt("10000")).toBe(10);
  });
});
