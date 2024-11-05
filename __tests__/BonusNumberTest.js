import BonusNumberValidator from "../src/validator/BonusNumberValidator";
import ErrorMessages from "../src/constant/ErrorMessage";

describe("보너스 번호 입력 테스트", () => {

    test("보너스 번호가 당첨 번호와 중복인 경우", () => {
        const bonusNumberValidator = new BonusNumberValidator();
        const winningNumber = [1, 2, 3, 4, 5, 6];
        expect(() => bonusNumberValidator.validateBonusNumber(6, winningNumber)).toThrow(ErrorMessages.BONUS_NUMBER_DUPLICATE);
    });

    test("보너스 번호에 숫자가 아닌 문자가 포함된 경우", () => {
        const bonusNumberValidator = new BonusNumberValidator();
        expect(() => bonusNumberValidator.validateBonusNumber("@")).toThrow(ErrorMessages.BONUS_NUMBER_RANGE);
    });

    test("보너스 번호가 1~45가 아닌 경우", () => {
        const bonusNumberValidator = new BonusNumberValidator();
        expect(() => bonusNumberValidator.validateBonusNumber(77)).toThrow(ErrorMessages.BONUS_NUMBER_RANGE);
    });

    test("보너스 번호가 공백인 경우", () => {
        const bonusNumberValidator = new BonusNumberValidator();
        expect(() => bonusNumberValidator.validateBonusNumber(" ")).toThrow(ErrorMessages.BONUS_NUMBER_RANGE);
    });

    test("보너스 번호 입력이 정상인 경우", () => {
        const bonusNumberValidator = new BonusNumberValidator();
        const winningNumber = [1, 2, 3, 4, 5, 6];
        const result = bonusNumberValidator.validateBonusNumber(7, winningNumber);
        expect(result).toEqual(7);
    });
});