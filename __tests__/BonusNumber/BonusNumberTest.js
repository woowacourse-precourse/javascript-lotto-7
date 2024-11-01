import BonusNumber from "../../src/models/BonusNumber.js";
import BonusNumberError from "../../src/errors/BonusNumberError.js";
import { ERROR_MESSAGE } from "../../src/constants/errorMessages.js";

describe("보너스 번호(BonusNumber) 클래스 테스트", () => {

    const WINNING_NUMBERS = [1, 2, 3, 4, 5, 6];

    test("보너스 번호 정상 기능 테스트", () => {
        const INPUT_BONUS_NUMBER = "7";
        const result = BonusNumber.getBonusNumber(INPUT_BONUS_NUMBER, WINNING_NUMBERS);
        expect(result).toStrictEqual(Number(INPUT_BONUS_NUMBER));
    });

    test("보너스 번호가 숫자가 아닐 경우 예외가 발생한다.", () => {
        const INPUT_BONUS_NUMBER = "one";
        expect(() => {
            new BonusNumber(INPUT_BONUS_NUMBER, WINNING_NUMBERS);
        }).toThrow(new BonusNumberError(ERROR_MESSAGE.bonus_number_is_numeric));
    });

    test("보너스 번호가 음수일 경우 예외가 발생한다.", () => {
        const INPUT_BONUS_NUMBER = -30;
        expect(() => {
            new BonusNumber(INPUT_BONUS_NUMBER, WINNING_NUMBERS);
        }).toThrow(new BonusNumberError(ERROR_MESSAGE.bonus_number_in_range));
    });

    test("보너스 번호가 공백일 경우 예외가 발생한다.", () => {
        const INPUT_BONUS_NUMBER = '';
        expect(() => {
            new BonusNumber(INPUT_BONUS_NUMBER, WINNING_NUMBERS);
        }).toThrow(new BonusNumberError(ERROR_MESSAGE.input_is_empty));
    });

    test("보너스 번호가 당첨 번호와 중복될 경우 예외가 발생한다.", () => {
        const INPUT_BONUS_NUMBER = 6;
        expect(() => {
            new BonusNumber(INPUT_BONUS_NUMBER, WINNING_NUMBERS);
        }).toThrow(new BonusNumberError(ERROR_MESSAGE.bonus_number_no_duplicates));
    });
});