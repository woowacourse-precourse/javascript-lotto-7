import { BONUS_ERROR_MESSAGE } from "../src/utils/Message.js";
import ValidInput from "../src/utils/ValidInput.js";

describe("보너스 번호 유효성 테스트", () => {
  let valid;

  beforeEach(() => {
    valid = new ValidInput();
  })

  test("보너스 번호 중에 중복된 번호가 있을 경우 예외가 발생한다.", () => {
    expect(() =>{
        valid.BonusCheck([1,2,3,4,5,6], "5");
    }).toThrow(BONUS_ERROR_MESSAGE.DUPLICATION);
  });
  test("보너스 번호가 빈칸일 경우 예외가 발생한다.", () => {
    expect(() =>{
        valid.BonusCheck([1,2,3,4,5,6], "");
    }).toThrow(BONUS_ERROR_MESSAGE.EMPTY);
  });
  test("보너스 번호 중에 1부터 45가 아닐경우 예외가 발생한다.", () => {
    expect(() =>{
        valid.BonusCheck([1,2,3,4,5,6], "46");
    }).toThrow(BONUS_ERROR_MESSAGE.OUT_OF_RANGE);
  });
  test("보너스 번호 중에 숫자가 아닌 경우 예외가 발생한다.", () => {
    expect(() =>{
        valid.BonusCheck([1,2,3,4,5,6], "a");
    }).toThrow(BONUS_ERROR_MESSAGE.ISNAN);
  });
});