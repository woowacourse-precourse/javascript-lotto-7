import WinningNumbers from "../src/models/WinningNumbers.js";
import Validator from "../src/utils/Validator.js";

jest.mock("../src/utils/Validator.js");

describe("WinningNumbers 클래스", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("유효한 번호와 보너스 번호로 WinningNumbers를 생성해야 합니다.", () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const bonusNumber = 7;

    Validator.validateLottoNumbers.mockImplementation(() => {});
    Validator.validateBonusNumber.mockImplementation(() => {});

    const winningNumbers = new WinningNumbers(numbers, bonusNumber);

    expect(winningNumbers.getNumbers()).toEqual(numbers);
    expect(winningNumbers.getBonusNumber()).toBe(bonusNumber);

    expect(Validator.validateLottoNumbers).toHaveBeenCalledWith(numbers);
    expect(Validator.validateBonusNumber).toHaveBeenCalledWith(
      bonusNumber,
      numbers
    );
  });

  test("유효하지 않은 로또 번호에 대해 오류를 발생시켜야 합니다.", () => {
    const invalidNumbers = [1, 2, 3, 4, 5, 7];
    const bonusNumber = 8;

    Validator.validateLottoNumbers.mockImplementation(() => {
      throw new Error("[ERROR] ");
    });

    expect(() => new WinningNumbers(invalidNumbers, bonusNumber)).toThrow(
      "[ERROR]"
    );
    expect(Validator.validateLottoNumbers).toHaveBeenCalledWith(invalidNumbers);
  });

  test("유효하지 않은 보너스 번호에 대해 오류를 발생시켜야 합니다.", () => {
    const numbers = [1, 2, 3, 4, 5, 6];
    const invalidBonusNumber = 1;

    Validator.validateLottoNumbers.mockImplementation(() => {});
    Validator.validateBonusNumber.mockImplementation(() => {
      throw new Error("[ERROR]");
    });

    expect(() => new WinningNumbers(numbers, invalidBonusNumber)).toThrow(
      "[ERROR]"
    );
    expect(Validator.validateBonusNumber).toHaveBeenCalledWith(
      invalidBonusNumber,
      numbers
    );
  });
});
