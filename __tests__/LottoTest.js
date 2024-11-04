import Lotto from "../src/Lotto";
import { describe, test, expect } from "@jest/globals";
import { errorMessage } from "../src/constant/errorMessage.js";

describe("로또 클래스 예외 테스트", () => {
  test("로또 번호의 개수가 6개가 넘어가면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(errorMessage.invalidCountLottoNumbers);
  });

  test("로또 번호에 중복된 숫자가 있으면 예외가 발생한다.", () => {
    expect(() => {
      new Lotto([1, 2, 3, 4, 5, 5]);
    }).toThrow(errorMessage.duplicateLottoNumbers);
  });
});

describe("로또 클래스 테스트", () => {
  test("로또는 1~45 의 숫자 중 랜덤으로 6개를 생성해야 한다.", () => {
    const lotto = new Lotto.create();
    const numbers = lotto.getLotto();

    expect(numbers.length).toBe(6);
    numbers.forEach(number => {
      expect(number).toBeGreaterThanOrEqual(1);
      expect(number).toBeLessThanOrEqual(45);
    })
  });

  test("로또 번호를 오름차순으로 정렬해야 한다.", () => {
    const unSortNumbers = [1, 2, 45, 12, 5, 27];
    const sortedNumbers = [1, 2, 5, 12, 27, 45];
    const lotto = new Lotto(unSortNumbers);

    expect(lotto.getLotto()).toEqual(sortedNumbers);
  });
});
