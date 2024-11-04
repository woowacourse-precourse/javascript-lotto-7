import { validInputPrice } from "./validInputPrice";
import { ERR_MESSAGE_NUMBERS } from "../constants/errorMessages.js";

describe("validInputPrice 테스트", () => {
  test("입력된 가격이 비어 있는 경우 예외가 발생한다.", () => {
    const inputPrice = "";

    const result = validInputPrice(inputPrice);
    expect(result).toBe(false);
  });

  test("입력된 가격이 양수인 경우 예외가 발생하지 않는다.", () => {
    const inputPrice = 10000;

    const result = validInputPrice(inputPrice);
    expect(result).toBe(true);
  });

  test("입력된 가격이 최대 자릿수를 초과한 경우 예외가 발생한다.", () => {
    const inputPrice = 1234567;

    const result = validInputPrice(inputPrice);
    expect(result).toBe(false);
    expect(console.error).toHaveBeenCalledWith(ERR_MESSAGE_NUMBERS.LIMIT_LENGTH_PRICE_NUMBER);
  });

  test("입력된 가격이 1000에서 100000 범위 이외인 경우 예외가 발생한다.", () => {
    const inputPrice = 999;

    const result = validInputPrice(inputPrice);
    expect(result).toBe(false);
    expect(console.error).toHaveBeenCalledWith(ERR_MESSAGE_NUMBERS.LIMIT_RANGE_PRICE_NUMBER);
  });

  test("입력된 가격이 1000의 단위가 아닌 경우 예외가 발생한다.", () => {
    const inputPrice = 1500;

    const result = validInputPrice(inputPrice);
    expect(result).toBe(false);
  });

  test("입력된 가격이 유효한 경우 예외가 발생하지 않는다.", () => {
    const inputPrice = 50000;

    const result = validInputPrice(inputPrice);
    expect(result).toBe(true);
  });
});
