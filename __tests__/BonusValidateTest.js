import { ERROR_MESSAGE } from "../src/constants/Constants";
import Validator from "../src/util/Validator";

describe("보너스 번호 유효성 테스트", () => {
  const validator = new Validator();

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
