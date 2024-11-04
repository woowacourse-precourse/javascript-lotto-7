import Lotto from "../src/model/Lotto";
import ERROR_MESSAGE from "../src/constants/error.js";

describe("Lotto 클래스 테스트", () => {
  describe("생성자 검증", () => {
    test.each([
      {
        description: "로또 번호의 개수가 6개가 넘어갈 때",
        input: [1, 2, 3, 4, 5, 6, 7],
        expectedError: ERROR_MESSAGE.WINNING_NUMBER_DUP,
      },
      {
        description: "로또 번호의 개수가 6개가 아닐 때",
        input: [1, 2, 3, 4, 5],
        expectedError: ERROR_MESSAGE.WINNING_NUMBER_DUP,
      },
      {
        description: "로또 번호에 중복된 숫자가 있을 때",
        input: [1, 2, 3, 4, 8, 8],
        expectedError: ERROR_MESSAGE.WINNING_NUMBER_DUP,
      },
      {
        description: "로또 번호가 1보다 작을 때",
        input: [0, 2, 1, 4, 5, 6],
        expectedError: ERROR_MESSAGE.WINNING_NUMBER_RANGE,
      },
      {
        description: "로또 번호가 45보다 클 때",
        input: [1, 2, 3, 4, 5, 46],
        expectedError: ERROR_MESSAGE.WINNING_NUMBER_RANGE,
      },
    ])("예외 발생: $description", ({ input, expectedError }) => {
      expect(() => new Lotto(input)).toThrow(expectedError);
    });
  });
});
