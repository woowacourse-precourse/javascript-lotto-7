import { WINNER_ERROR_MESSAGE } from "../src/utils/Message.js";
import ValidInput from "../src/utils/ValidInput.js";

describe("당첨 번호 유효성 테스트", () => {
  let valid;

  beforeEach(() => {
    valid = new ValidInput();
  })

  test("당첨 번호가 6개가 아닐시 예외가 발생한다.", () => {
    expect(() =>{
        valid.WinnerCheck([1,2,3,4,5]);
    }).toThrow(WINNER_ERROR_MESSAGE.LENGTH_SIX);
  });
  test("당첨 번호 중에 중복된 번호가 있을 경우 예외가 발생한다.", () => {
    expect(() =>{
        valid.WinnerCheck([1,2,3,4,5,5]);
    }).toThrow(WINNER_ERROR_MESSAGE.DUPLICATION);
  });
  test("당첨 번호 중에 빈칸이 있을 경우 예외가 발생한다.", () => {
    expect(() =>{
        valid.WinnerCheck([1,2,3,4,"",5]);
    }).toThrow(WINNER_ERROR_MESSAGE.EMPTY);
  });
  test("당첨 번호 중에 1부터 45가 아닐경우 예외가 발생한다.", () => {
    expect(() =>{
        valid.WinnerCheck([0,2,3,4,5,46]);
    }).toThrow(WINNER_ERROR_MESSAGE.OUT_OF_RANGE);
  });
  test("당첨 번호 중에 숫자가 아닌 경우 예외가 발생한다.", () => {
    expect(() =>{
        valid.WinnerCheck([1,2,3,4,5,"a"]);
    }).toThrow(WINNER_ERROR_MESSAGE.ISNAN);
  });
});