import { ERROR_MESSAGES } from "../src/utils/constants/ErrorMessageConstants.js";
import { LottoNumberValidator } from "../src/utils/validator/LottoNumberValidator.js";

describe("로또 번호 유효성 테스트", () => {
  test("로또 번호가 6개가 아닐 경우 에러 반환", () => {
    expect(() => {
      LottoNumberValidator.validateLength([1, 2, 3, 4, 5]);
    }).toThrow(ERROR_MESSAGES.INVALID_LENGTH);

    expect(() => {
      LottoNumberValidator.validateLength([1, 2, 3, 4, 5, 6, 7]);
    }).toThrow(ERROR_MESSAGES.INVALID_LENGTH);
  });

  test("로또 번호가 1~45 범위가 아닐 경우 에러 반환", () => {
    expect(() => {
      LottoNumberValidator.validateRange([0, 1, 2, 3, 4, 5]);
    }).toThrow(ERROR_MESSAGES.INVALID_RANGE);

    expect(() => {
      LottoNumberValidator.validateRange([1, 2, 3, 4, 5, 46]);
    }).toThrow(ERROR_MESSAGES.INVALID_RANGE);
  });

  test("로또 번호가 중복일 경우 에러 반환", () => {
    expect(() => {
      LottoNumberValidator.validateDuplicated([1, 1, 2, 3, 4, 5]);
    }).toThrow(ERROR_MESSAGES.DUPLICATED_NUMBER);
  });
});
