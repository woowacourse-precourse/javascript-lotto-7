import { validInputPrizeNum } from "./validInputPrizeNum";
import Lotto from "../Lotto";

jest.mock("../Lotto");

describe("validInputPrizeNum 테스트", () => {
  beforeEach(() => {
    Lotto.mockClear();
  });

  test("로또 번호에 중복된 숫자가 있는 경우 예외가 발생한다.", () => {
    const inputPrizeNumbers = [1, 2, 3, 4, 5, 5];
    Lotto.mockImplementation(() => {
      throw new Error("[ERROR] 로또 번호에 중복된 값이 존재합니다. 다시 입력해주세요.");
    });

    const result = validInputPrizeNum(inputPrizeNumbers);
    expect(result).toBe(false);
    expect(console.error).toHaveBeenCalledWith("[ERROR] 로또 번호에 중복된 값이 존재합니다. 다시 입력해주세요.");
  });

  test("로또 번호가 6개가 아닌 경우 예외가 발생한다.", () => {
    const inputPrizeNumbers = [1, 2, 3, 4, 5];
    Lotto.mockImplementation(() => {
      throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
    });

    const result = validInputPrizeNum(inputPrizeNumbers);
    expect(result).toBe(false);
    expect(console.error).toHaveBeenCalledWith("[ERROR] 로또 번호는 6개여야 합니다.");
  });

  test("로또 번호가 6개이고 중복되지 않은 경우 예외가 발생하지 않는다.", () => {
    const inputPrizeNumbers = [1, 2, 3, 4, 5, 6];
    Lotto.mockImplementation(() => {
      return {
        isDuplicate: () => true,
      };
    });

    const result = validInputPrizeNum(inputPrizeNumbers);
    expect(result).toBe(true);
  });
});
