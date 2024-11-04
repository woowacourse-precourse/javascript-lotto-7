import Lotto from "../src/models/Lotto.js";
import Validator from "../src/utils/Validator.js";
import errorMessages from "../src/constants/errorMessages.js";

describe("Lotto 클래스", () => {
  test("유효한 로또 생성", () => {
    const lotto = new Lotto([1, 2, 3, 4, 5, 6]);
    expect(lotto.getNumbers()).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test("번호 개수로 인한 유효하지 않은 로또 생성", () => {
    expect(() => new Lotto([1, 2, 3])).toThrow(
      errorMessages.INVALID_NUMBERS_LENGTH
    );
  });

  test("번호 범위로 인한 유효하지 않은 로또 생성", () => {
    expect(() => new Lotto([0, 1, 2, 3, 4, 5])).toThrow(
      errorMessages.INVALID_NUMBERS_RANGE
    );
    expect(() => new Lotto([1, 2, 3, 4, 5, 46])).toThrow(
      errorMessages.INVALID_NUMBERS_RANGE
    );
  });

  test("중복 번호로 인한 유효하지 않은 로또 생성", () => {
    expect(() => new Lotto([1, 2, 3, 4, 5, 5])).toThrow(
      errorMessages.INVALID_DUPLICATE_NUMBER
    );
  });
});
