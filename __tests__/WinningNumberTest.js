import WinningNumberValidator from "../src/validator/WinningNumberValidator"

describe("당첨 번호 입력 테스트", () => {

    test("당첨 번호가 중복되는 경우", () => {
        const winningNumberValidator = new WinningNumberValidator();
        expect(() => winningNumberValidator.validateWinningNumber("1,2,2,3,4,5")).toThrow(
            "[ERROR] 당첨 번호는 중복될 수 없습니다"
        );
    });

    test("당첨 번호에 숫자가 아닌 문자가 포함된 경우", () => {
        const winningNumberValidator = new WinningNumberValidator();
        expect(() => winningNumberValidator.validateWinningNumber("1,2,@,3,4,5")).toThrow(
            "[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다."
        );
    });

    test("당첨 번호가 1~45가 아닌 경우", () => {
        const winningNumberValidator = new WinningNumberValidator();
        expect(() => winningNumberValidator.validateWinningNumber("1,2,3,20,46,49")).toThrow(
            "[ERROR] 당첨 번호는 1부터 45 사이의 숫자여야 합니다."
        );
    });

    test.each([
        ["1,2,3,4,5,6,7"],
        ["1,2,3,4"]
    ])("당첨 번호의 개수가 6개가 아닌 경우", (input) => {
        const winningNumberValidator = new WinningNumberValidator();
        expect(() => winningNumberValidator.validateWinningNumber(input)).toThrow(
            "[ERROR] 당첨 번호는 6개여야 합니다."
        );
    });

    test("당첨 번호 입력이 정상인 경우", () => {
        const winningNumberValidator = new WinningNumberValidator();
        const result = winningNumberValidator.validateWinningNumber("4,6,10,26,39,40")
        expect(result).toEqual([4, 6, 10, 26, 39, 40]);
    });
});