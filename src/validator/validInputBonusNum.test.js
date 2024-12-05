import { validInputBonusNum } from "./validInputBonusNum";

describe("validInputBonusNum 테스트", () => {
  test("입력된 보너스 번호가 비어 있는 경우 예외가 발생한다.", () => {
    const prizeNumbers = [1, 2, 3, 4, 5, 6];
    const inputBonusNumber = "";

    const result = validInputBonusNum(prizeNumbers, inputBonusNumber);
    expect(result).toBe(false);
  });

  test("입력된 보너스 번호가 양수인 경우 예외가 발생하지 않는다.", () => {
    const prizeNumbers = [1, 2, 3, 4, 5, 6];
    const inputBonusNumber = 7;

    const result = validInputBonusNum(prizeNumbers, inputBonusNumber);
    expect(result).toBe(true);
  });

  test("입력된 보너스 번호가 최대 자릿수를 초과한 경우 예외가 발생한다.", () => {
    const prizeNumbers = [1, 2, 3, 4, 5, 6];
    const inputBonusNumber = 123;

    const result = validInputBonusNum(prizeNumbers, inputBonusNumber);
    expect(result).toBe(false);
  });

  test("입력된 보너스 번호가 1에서 45 범위 이외인 경우 예외가 발생한다.", () => {
    const prizeNumbers = [1, 2, 3, 4, 5, 6];
    const inputBonusNumber = 50;

    const result = validInputBonusNum(prizeNumbers, inputBonusNumber);
    expect(result).toBe(false);
  });

  test("입력된 보너스 번호가 유효한 경우 예외가 발생하지 않는다.", () => {
    const prizeNumbers = [1, 2, 3, 4, 5, 6];
    const inputBonusNumber = 7;

    const result = validInputBonusNum(prizeNumbers, inputBonusNumber);
    expect(result).toBe(true);
  });
});
