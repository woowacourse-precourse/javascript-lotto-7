import { ERROR_MESSAGE } from "../src/constants/Constants";
import Validator from "../src/util/Validator";

const validator = new Validator();

describe("구입금액 유효성 테스트", () => {
  test("구입금액에 숫자가 아닌 문자가 포함될 경우 에러를 출력한다", () => {
    const INPUT_VALUE = "9,000";
    //then
    expect(() => validator.isPriceNumber(INPUT_VALUE)).toThrow(
      ERROR_MESSAGE.PRICE_NUMBER_ERROR
    );
  });

  test("구입금액에 음수가 입력된 경우 에러를 출력한다", () => {
    const INPUT_VALUE = "-8000";
    expect(() => validator.isPricePositive(INPUT_VALUE)).toThrow(
      ERROR_MESSAGE.PRICE_NEGATIVE_ERROR
    );
  });

  test("구입금액이 1000단위가 아닌 경우 에러를 출력한다", () => {
    const INPUT_VALUE = "9001";
    expect(() => validator.isPriceDivisible(INPUT_VALUE)).toThrow(
      ERROR_MESSAGE.PRICE_DIVISIBLE_ERROR
    );
  });
});

describe("보너스 번호 유효성 테스트", () => {
  test("보너스 번호에 숫자가 아닌 문자가 입력된 경우 에러를 출력한다", () => {
    const BONUS_INPUT = ",";
    expect(() => validator.isBonusAsNumber(BONUS_INPUT)).toThrow(
      ERROR_MESSAGE.BONUS_NUMBER_ERROR
    );
  });

  test("로또 당첨 번호 중 보너스 번호와 일치하는 번호가 있는 경우 에러를 출력한다", () => {
    const LOTTO_ANSWER_INPUT = [1, 2, 3, 4, 5, 6];
    const BONUS_INPUT = 4;
    expect(() =>
      validator.isBonusNotInAnswer(BONUS_INPUT, LOTTO_ANSWER_INPUT)
    ).toThrow(ERROR_MESSAGE.BONUS_INANSWER_ERROR);
  });

  test("보너스 번호가 1~45 사이 숫자가 아닐 경우 에러를 출력한다", () => {
    const BONUS_INPUT = 48;
    expect(() => validator.isBonusInRange(BONUS_INPUT)).toThrow(
      ERROR_MESSAGE.BONUS_RANGE_ERROR
    );
  });
});
