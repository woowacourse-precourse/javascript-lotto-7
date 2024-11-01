import WinningNumbers from "../../src/models/WinningNumbers.js";
import WinningNumbersError from "../../src/errors/WinningNumbersError.js";
import { ERROR_MESSAGE } from "../../src/constants/errorMessages.js";

describe("당첨 번호(WinningNumbers) 클래스 테스트", () => {
    test("당첨 번호 정상 기능 테스트_1", () => {
        const INPUT_WINNING_NUMBERS = "1,2,3,4,5,6";
        const result = WinningNumbers.getWinningNumbers(INPUT_WINNING_NUMBERS);
        expect(result).toStrictEqual([1, 2, 3, 4, 5, 6]);
    });

    test("당첨 번호 정상 기능 테스트_2", () => {
        const INPUT_WINNING_NUMBERS = "22,1,16,8,33,45";
        const result = WinningNumbers.getWinningNumbers(INPUT_WINNING_NUMBERS);
        expect(result).toStrictEqual([1, 8, 16, 22, 33, 45]);
    });

    test("당첨 번호가 1부터 45 사이의 숫자가 아닐 경우 예외가 발생한다.", () => {
        const NUMBERS = [0, 2, 3, 4, 5, 6];
        expect(() => {
            new WinningNumbers(NUMBERS);
        }).toThrow(new WinningNumbersError(ERROR_MESSAGE.lotto_in_range));
    });

    test("당첨 번호가 숫자가 아닐 경우 예외가 발생한다.", () => {
        const NUMBERS = [1, 'two', 3, 4, 5, 6];
        expect(() => {
            new WinningNumbers(NUMBERS);
        }).toThrow(new WinningNumbersError(ERROR_MESSAGE.lotto_is_numeric));
    });

    test("당첨 번호가 음수일 경우 예외가 발생한다.", () => {
        const NUMBERS = [-5, 11, 13, 14, 20, 30];
        expect(() => {
            new WinningNumbers(NUMBERS);
        }).toThrow(new WinningNumbersError(ERROR_MESSAGE.lotto_in_range));
    });

    test("당첨 번호가 6개가 아닐 경우 예외가 발생한다.", () => {
        const NUMBERS = [10, 20, 30, 40, 15, 25, 35];
        expect(() => {
            new WinningNumbers(NUMBERS);
        }).toThrow(new WinningNumbersError(ERROR_MESSAGE.lotto_not_negative));
    });

    test("당첨 번호가 중복될 경우 예외가 발생한다.", () => {
        const NUMBERS = [10, 15, 20, 25, 30, 30];
        expect(() => {
            new WinningNumbers(NUMBERS);
        }).toThrow(new WinningNumbersError(ERROR_MESSAGE.lotto_no_duplicates));
    });
});