import Lotto from "../src/Lotto.js";
import ERROR_MESSAGES from "../src/util/messages/error-message.js";

describe("로또 클래스 테스트", () => {
  test.each([
    {input: '', errorMessage: ERROR_MESSAGES.LOTTO.EMPTY},
    {input: '1,2,3,4,5,6,7', errorMessage: ERROR_MESSAGES.LOTTO.WRONG_LENGTH},
    {input: '1,2,3,4,5,5', errorMessage: ERROR_MESSAGES.LOTTO.DUPLICATED},
    {input: '1,2,3,4,5,55', errorMessage: ERROR_MESSAGES.LOTTO.WRONG_NUMBER},
    {input: '1,2,3,4,5,a', errorMessage: ERROR_MESSAGES.LOTTO.WRONG_TYPE},
  ])('예외 테스트: %o', ({input, errorMessage}) => {
    expect(() => {
      new Lotto(input);
    }).toThrow(errorMessage);
  });
});
