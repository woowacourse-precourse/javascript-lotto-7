import Bonus from "../src/Bonus";
import { BONUS_ERROR_MESSAGE } from "../src/constants";

describe("Bonus 클래스 테스트", () => {
  test("빈 문자열 입력 시 예외가 발생한다.", () => {
    expect(() => {
      new Bonus("");
    }).toThrow(BONUS_ERROR_MESSAGE.IS_EMPTY);
  });

  test("숫자 외의 다른 타입을 입력 시 예외가 발생한다.", () => {
    expect(() => {
      new Bonus("a");
    }).toThrow(BONUS_ERROR_MESSAGE.IS_NOT_NUMBER);
  });

  test("정수가 아닌 숫자 입력 시 예외가 발생한다.", () => {
    expect(() => {
      new Bonus("1.5");
    }).toThrow(BONUS_ERROR_MESSAGE.IS_NOT_INTEGER);
  });

  test("범위 밖의 숫자 입력 시 예외가 발생한다.", () => {
    expect(() => {
      new Bonus("0");
    }).toThrow(BONUS_ERROR_MESSAGE.OUT_OF_RANGE);
    
    expect(() => {
      new Bonus("50");
    }).toThrow(BONUS_ERROR_MESSAGE.OUT_OF_RANGE);
  });
});