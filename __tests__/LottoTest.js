/* eslint-disable no-new */
import Lotto from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow("[ERROR]");
  });

  const notNumbers = [
    [1, 2, 3, 4, 5, "hi"],
    [1, 2, 3, 4, 5, ":"],
    [10, 12, 23, 34, 45, ""],
  ];
  test.each(notNumbers)("로또 번호에 숫자가 아닌 값이 들어오면 예외가 발생한다.", (numbers) => {
    expect(() => {
      new Lotto(numbers);
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 정수가 아닌 값이 들어오면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 10.3]);
    }).toThrow("[ERROR]");
  });

  const outOfRangeNumbers = [
    [1, 2, 3, 4, 60],
    [0, 4, 10, 18, 30, 45],
    [1, -3, 26, 43, 28, 30],
  ];
  test.each(outOfRangeNumbers)("로또 번호가 1~45 범위를 벗어나면 예외가 발생한다.", (numbers) => {
    expect(() => {
      new Lotto(numbers);
    }).toThrow("[ERROR]");
  });
});
