import Lotto_bonus from "../src/Lotto_bonus";

describe("로또 보너스 클래스 테스트", () => {
  test("로또 보너스 번호의 개수가 1개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto_bonus([1, 2]);
    }).toThrow("[ERROR]");
  });

  test("로또 보너스 번호를 입력하지 않으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto_bonus([]);
    }).toThrow("[ERROR]");
  });

  test("로또 보너스 번호가 0 이면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto_bonus([0]);
    }).toThrow("[ERROR]");
  });

  test("로또 보너스 번호가 45 이상이면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto_bonus([46]);
    }).toThrow("[ERROR]");
  });

  test("로또 보너스 번호가 숫자가 아니면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto_bonus(['A']);
    }).toThrow("[ERROR]");
  });
});
