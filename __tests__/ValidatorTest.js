import Validator from "../src/Validator/Validator.js";

describe("Validator 클래스 테스트", () => {
  test("입력은 1000원 단위로 들어와야 합니다.", () => {
    const inputMoney = 1542;
    expect(() => {
      Validator.validateMoney(inputMoney);
    }).toThrow(Validator.ERROR_MESSAGES.PURCHASE_MONEY_NOT_FORMAT);
  });

  test("입력은 숫자만 들어와야 합니다.", () => {
    const inputMoney = "하하하하";
    expect(() => {
      Validator.validateMoney(inputMoney);
    }).toThrow(Validator.ERROR_MESSAGES.PURCHASE_MONEY_NOT_NUMBER);
  });

  test("당첨번호는 구분자를 사용해야 합니다.", () => {
    const inputWinningNumber = "1:123::1244:1255";
    expect(() => {
      Validator.validateWinningNumber(inputWinningNumber);
    }).toThrow(Validator.ERROR_MESSAGES.NUMBERS_NOT_DELIMETER);
  });

  test("당첨번호는 1~45 사이의 숫자만 입력 가능합니다.", () => {
    const inputWinningNumber = "1,2,3,4,5,46";
    expect(() => {
      Validator.validateWinningNumber(inputWinningNumber);
    }).toThrow(Validator.ERROR_MESSAGES.NUMBERS_RANGE);
  });

  test("당첨번호는 6개를 입력해주셔야 합니다.", () => {
    const inputWinningNumber1 = "1,2,3,4,5";
    const inputWinningNumber2 = "1,2,3,4,5,6,7";

    expect(() => {
      Validator.validateWinningNumber(inputWinningNumber1);
      Validator.validateWinningNumber(inputWinningNumber2);
    }).toThrow(Validator.ERROR_MESSAGES.NUMBERS_UNITS);
  });

  test("당첨번호는 중복된 입력을 허용하지 않습니다.", () => {
    const duplicatedInput = "1,2,2,3,4,5";

    expect(() => {
      Validator.validateWinningNumber(duplicatedInput);
    }).toThrow(Validator.ERROR_MESSAGES.NUMBERS_DUPLICATED);
  });

  test("보너스번호는 숫자 하나만 입력할 수 있습니다.", () => {
    const bonusNumberInput1 = "45,1";
    const bonusNumberInput2 = "하";

    expect(() => {
      Validator.validateBonusNumber(bonusNumberInput1);
      Validator.validateBonusNumber(bonusNumberInput2);
    }).toThrow(Validator.ERROR_MESSAGES.BONUS_FORMAT);
  });

  test("보너스번호는 1~45 사이의 숫자만 입력할 수 있습니다.", () => {
    const bonusNumberInput = "46";

    expect(() => {
      Validator.validateBonusNumber(bonusNumberInput);
    }).toThrow(Validator.ERROR_MESSAGES.NUMBERS_RANGE);
  });
});
