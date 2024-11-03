import Bonus from "../src/Bonus.js";
import ERROR_MESSAGES from "../src/util/messages/error-message.js";

describe("보너스 클래스 테스트", () => {
  test("보너스 생성 테스트", () => {
    // given
    const inputBonus = "7";
    const lottoNumbers = "1,2,3,4,5,6";

    // when
    const bonus = new Bonus(inputBonus, lottoNumbers);

    // then
    expect(bonus.value).toBe("7");
  });

  test.each([
    { input: "", errorMessage: ERROR_MESSAGES.BONUS.EMPTY },
    { input: "46", errorMessage: ERROR_MESSAGES.BONUS.WRONG_NUMBER },
    { input: "a", errorMessage: ERROR_MESSAGES.BONUS.NOT_NUMBER },
    { input: "1.1", errorMessage: ERROR_MESSAGES.BONUS.WRONG_FLOAT },
    { input: "1", errorMessage: ERROR_MESSAGES.BONUS.DUPLICATED },
  ])("예외 테스트: %o", ({ input, errorMessage }) => {
    const lottoNumbers = "1,2,3,4,5,6";
    expect(() => {
      new Bonus(input, lottoNumbers);
    }).toThrow(errorMessage);
  });
});
