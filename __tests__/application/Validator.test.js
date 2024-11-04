import Validator from "../../src/application/utils/Validator.js";
import { APPLICATION_ERRORS } from "../../src/constant/Error.js";

describe("Validator 유틸 테스트", () => {
  let validator;

  beforeEach(() => {
    validator = new Validator();
  });

  test("빈 입력값이면 에러가 발생한다", () => {
    // given
    const emptyInputs = ["", null];

    // then
    emptyInputs.forEach((input) => {
      expect(() => validator.validate(input))
        .toThrow(APPLICATION_ERRORS.EMPTY);
    });
  });

  test("숫자가 아닌 입력값이면 에러가 발생한다", () => {
    // given
    const notNumbers = ["abc", "1a"];

    // then
    notNumbers.forEach((input) => {
      expect(() => validator.validate(input))
        .toThrow(APPLICATION_ERRORS.NOT_A_NUMBER);
    });
  });

  test("정수가 아닌 입력값이면 에러가 발생한다", () => {
    // given
    const notIntegers = ["1.5", "2.3"];

    // then
    notIntegers.forEach((input) => {
      expect(() => validator.validate(input))
        .toThrow(APPLICATION_ERRORS.NOT_INTEGER);
    });
  });

  test("0 이하의 숫자면 에러가 발생한다", () => {
    // given
    const notPositives = ["0", "-1"];

    // then
    notPositives.forEach((input) => {
      expect(() => validator.validate(input))
        .toThrow(APPLICATION_ERRORS.NOT_POSITIVE);
    });
  });

  test("유효한 입력값은 검증을 통과한다", () => {
    // given
    const validInputs = ["1", "42"];

    // then
    validInputs.forEach((input) => {
      expect(() => validator.validate(input)).not.toThrow();
    });
  });
});
