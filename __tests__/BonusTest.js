import Bonus from "../src/Bonus.js";
import { ERROR_MESSAGE } from "../src/constants/message.js";

describe("보너스 번호 테스트", () => {
  test("보너스 번호가 숫자가 아닐경우", () => {
    expect(() => {
      new Bonus("굿");
    }).toThrow(ERROR_MESSAGE.non_numeric_bonus);
  });

  test("보너스 번호 테스트", () => {
    const bonus = new Bonus("5", [1, 2, 3, 4, 6, 7]);
    const bonusNumber = bonus.getBonusNumber();
    expect(bonusNumber).toBe(5);
  });

  test("보너스 번호가 1부터 45의 숫자가 아닐경우 ", () => {
    expect(() => {
      new Bonus("46");
    }).toThrow(ERROR_MESSAGE.out_of_range_bonus);
  });

  test("보너스 번호가 로또 번호와 중복된 경우 ", () => {
    expect(() => {
      new Bonus("6", [1, 2, 3, 4, 5, 6]);
    }).toThrow(ERROR_MESSAGE.duplicate_bonus);
  });
});
