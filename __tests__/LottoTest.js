import Lotto from "../src/Lotto";

import {
  MIN_RANGE,
  MAX_RANGE,
  LOTTO_NUMBERS_COUNT,
} from "../src/Static/const.js";

describe("로또 클래스 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto(
        Array.from({ length: LOTTO_NUMBERS_COUNT + 1 }, (_, i) => i + 1)
      );
    }).toThrow("[ERROR]");
  });

  test("로또 번호의 개수가 6개보다 작으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto(
        Array.from({ length: LOTTO_NUMBERS_COUNT - 1 }, (_, i) => i + 1)
      );
    }).toThrow("[ERROR]");
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto(Array(LOTTO_NUMBERS_COUNT).fill(1));
    }).toThrow("[ERROR]");
  });

  test.each([
    [MIN_RANGE - 1, 2, 3, 4, 5, 6],
    [1, 2, 3, 4, 5, MAX_RANGE + 1],
  ])("로또 번호가 1~45 사이의 숫자가 아니면 예외가 발생한다.", (input) => {
    expect(() => {
      new Lotto(input);
    }).toThrow("[ERROR]");
  });
});
