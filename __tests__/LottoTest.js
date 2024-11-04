import Lotto from "../src/Lotto.js";

describe("로또 클래스 테스트", () => {
  test.each([
    { numbers: [1, 2, 3, 4, 5, 6, 7], error: "[ERROR]", description: "로또 번호 개수 - 6 초과" },
    { numbers: [1, 2, 3, 4, 5], error: "[ERROR]", description: "로또 번호 개수 - 6 미만" },
    { numbers: [1, 2, 3, 4, 5, 5], error: "[ERROR]", description: "로또 번호 - 번호내 중복" },
    { numbers: [1, 2, 3, 4, 5, 0], error: "[ERROR]", description: "로또 번호 - 범위 외 숫자 (0)" },
    { numbers: [1, 2, 3, 4, 5, 46], error: "[ERROR]", description: "로또 번호 - 범위 외 숫자 (46)" },
    { numbers: [1, 2, 3, 4, 5, 2.5], error: "[ERROR]", description: "로또 번호 - 자연수 아님" },
  ])("$description", ({ numbers, error }) => {
    expectInvalidLotto(numbers, error);
  });

  test("올바른 결과 출력", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);

    checkLottoResult(lotto, { win: [1, 2, 9, 10, 11, 12], bonus: 7 }, "None");
    checkLottoResult(lotto, { win: [1, 2, 3, 4, 5, 7], bonus: 6 }, "5개 일치, 보너스 볼 일치 (30,000,000원)");
    checkLottoResult(lotto, { win: [1, 2, 3, 4, 5, 6], bonus: 7 }, "6개 일치 (2,000,000,000원)");
  });
});

function expectInvalidLotto(numbers, expectedError) {
  expect(() => {
    new Lotto(numbers);
  }).toThrow(expectedError);
}

function checkLottoResult(lotto, winningNumbers, expectedResult) {
  lotto.checkResult(winningNumbers);
  expect(lotto.result).toBe(expectedResult);
}
