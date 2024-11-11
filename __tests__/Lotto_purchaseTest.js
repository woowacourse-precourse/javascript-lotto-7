import Lotto_purchase from "../src/Lotto_purchase";

describe("로또 구매 클래스 테스트", () => {
  test("로또 구입 금액이 1000원 단위가 아닌 경우 예외가 발생한다.", () => {
    expect(() => {
      new Lotto_purchase([1500]);
    }).toThrow("[ERROR]");
  });

  test("로또 구입 금액을 입력하지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto_purchase([]);
    }).toThrow("[ERROR]");
  });

  test("로또 구입 금액이 0 이면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto_purchase([0]);
    }).toThrow("[ERROR]");
  });

  test("로또 구입 금액이 음수이면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto_purchase([-1000]);
    }).toThrow("[ERROR]");
  });

  test("로또 구입 금액이 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto_purchase(['A']);
    }).toThrow("[ERROR]");
  });
});
