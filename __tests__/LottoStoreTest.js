import { Random } from "@woowacourse/mission-utils";
import { LottoStore } from "../src/lotto/index.js";

describe("구입 금액으로 몇 개의 로또를 살 수 있는지 테스트", () => {
  test.each([
    { price: 1000, expected: 1, description: "1000 / 1000 = 1" },
    { price: 5000, expected: 5, description: "5000 / 1000 = 5" },
    { price: 10000, expected: 10, description: "10000 / 1000 = 10" },
  ])("getLottoPurchaseCount(number)를 실행하면 expected한 결과가 나온다.", ({ price, expected }) => {
    expect(LottoStore.getLottoPurchaseCount(price)).toBe(expected);
  });
});

const mockRandoms = (numbers) => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.reduce((acc, number) => acc.mockReturnValueOnce(number), Random.pickUniqueNumbersInRange);
};

describe("로또 발급받기 테스트", () => {
  const numbers = [
    [1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12],
  ];
  mockRandoms(numbers);

  test("2개 발급", () => {
    expect(LottoStore.generateLottoNumbers(2)).toEqual(numbers);
  });

  test("0개 발급", () => {
    expect(LottoStore.generateLottoNumbers(0)).toEqual([]);
  });
});
