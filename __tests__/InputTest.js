import { AMOUNT_ERROR_MESSAGE } from "../src/utils/Message";
import ValidInput from "../src/utils/ValidInput";

describe("Amount 입력 유효성 테스트", () => {
  let valid;

  beforeEach(() => {
    valid = new ValidInput();
  })

  test("Amount 입력시 빈칸일 경우 예외가 발생한다.", () => {
    expect(() =>{
        valid.AmountCheck("");
    }).toThrow(AMOUNT_ERROR_MESSAGE.EMPTY);
  });
  test("Amount 입력시 숫자가 아닐경우 예외가 발생한다.", () => {
    expect(() =>{
        valid.AmountCheck("1000j");
    }).toThrow(AMOUNT_ERROR_MESSAGE.ISNAN);
  });
  test("Amount 입력시 1000 단위가 아닐경우 예외가 발생한다.", () => {
    expect(() =>{
        valid.AmountCheck("1001");
    }).toThrow(AMOUNT_ERROR_MESSAGE.MUST_BE_1000);
  });
});