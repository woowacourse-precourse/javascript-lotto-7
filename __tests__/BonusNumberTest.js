import { BonusNumber } from "../src/lotto/index.js";
import { LOTTO_MESSAGES } from "../src/constants/index.js";

describe("로또 클래스 테스트", () => {
  const { INVALID_NON_POSITIVE_INTEGER, DUPLICATE_BONUS_NUMBER, INVALID_RANGE_NUMBER } = LOTTO_MESSAGES;
  test.each([
    { number: 0, errorMessage: INVALID_NON_POSITIVE_INTEGER, description: "양수가 아닌 경우" },
    { number: 1.1, errorMessage: INVALID_NON_POSITIVE_INTEGER, description: "정수가 아닌 경우" },
    { number: 6, errorMessage: DUPLICATE_BONUS_NUMBER, description: "당첨 번호와 겹치는 경우" },
    { number: 46, errorMessage: INVALID_RANGE_NUMBER, description: "로또 번호 범위 밖의 숫자인 경우" },
  ])("new BonusNumber(number)를 실행하면 에러 메세지와 함께 에러가 발생한다.", ({ number, errorMessage }) => {
    expect(() => new BonusNumber(number, [1, 2, 3, 4, 5, 6])).toThrow(errorMessage);
  });
});
