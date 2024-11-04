import InputValidator from "../src/validators/InputValidator.js";

describe("구매 금액 유효성 검사 테스트", () => {
    test("빈 문자열이 들어오면 예외가 발생해야 한다.", () => {
        expect(() => {
            InputValidator.isValidLottoAmount("");
        }).toThrow("[ERROR]");
    });

    test("숫자 외 문자가 들어오면 예외가 발생해야 한다.", () => {
        expect(() => {
            InputValidator.isValidLottoAmount("1000abc");
        }).toThrow("[ERROR]");
    });

    test("음수가 들어오면 예외가 발생해야 한다.", () => {
        expect(() => {
            InputValidator.isValidLottoAmount("-1000");
        }).toThrow("[ERROR]");
    });

    test("1,000 단위로 떨어지지 않으면 예외가 발생해야 한다.", () => {
        expect(() => {
            InputValidator.isValidLottoAmount("1010");
        }).toThrow("[ERROR]");
    });

    test("0원이 입력되면 예외가 발생해야 한다.", () => {
        expect(() => {
            InputValidator.isValidLottoAmount("1010");
        }).toThrow("[ERROR]");
    });
});

describe("로또 당첨 번호 유효성 검사 테스트", () => {
    test("빈 문자열이 들어오면 예외가 발생해야 한다.", () => {
        expect(() => {
            InputValidator.isValidWinningNumbers("");
        }).toThrow("[ERROR]");
    });

    test("정수가 아닌 값이 들어오면 예외가 발생해야 한다.", () => {
        expect(() => {
            InputValidator.isValidWinningNumbers("1, 2, 3, 4, a, 6");
        }).toThrow("[ERROR]");
    });

    test("로또 번호가 1~45 범위의 값이 아니면 예외가 발생해야 한다.", () => {
        expect(() => {
            InputValidator.isValidWinningNumbers("1, 2, 3, 46, 5, 6");
        }).toThrow("[ERROR]");
    });

    test("로또 번호의 개수가 6개가 아닐 경우 예외가 발생해야 한다.", () => {
        expect(() => {
            InputValidator.isValidWinningNumbers("1, 2, 3, 4, 5");
        }).toThrow("[ERROR]");
    });

    test("중복된 번호가 포함된 경우 예외가 발생해야 한다.", () => {
        expect(() => {
            InputValidator.isValidWinningNumbers("1, 2, 3, 4, 5, 5");
        }).toThrow("[ERROR]");
    });

    test("유효한 로또 번호라면 정상적으로 처리되어야 한다.", () => {
        const result = InputValidator.isValidWinningNumbers("1, 2, 3, 4, 5, 6");
        expect(result).toEqual([1, 2, 3, 4, 5, 6]);
    });
});

describe("보너스 번호 유효성 검사 테스트", () => {
    test("빈 문자열이 들어오면 예외가 발생해야 한다.", () => {
        expect(() => {
            InputValidator.isValidLottoAmount("1,2,3,4,5,6", "");
        }).toThrow("[ERROR]");
    });

    test("숫자 외 문자가 들어오면 예외가 발생해야 한다.", () => {
        expect(() => {
            InputValidator.isValidLottoAmount("1,2,3,4,5,6", "6a");
        }).toThrow("[ERROR]");
    });

    test("로또 번호가 1~45 범위의 값이 아니면 예외가 발생해야 한다.", () => {
        expect(() => {
            InputValidator.isValidLottoAmount("1,2,3,4,5,6", "46");
        }).toThrow("[ERROR]");
    });

    test("당첨 번호 중 보너스 번호가 포함되어 있다면 예외가 발생해야 한다.", () => {
        expect(() => {
            InputValidator.isValidLottoAmount("1,2,3,4,5,6", "6");
        }).toThrow("[ERROR]");
    });
});
