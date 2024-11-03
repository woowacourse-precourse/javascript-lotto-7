import {purchasePriceUtils} from "../../src/utils/purchasePrice.utils.js";
import {ERROR_CODE, PURCHASE_PRICE, WINNING_NUMBER} from "../../src/constants/constants.js";
import {winningNumbersUtils} from "../../src/utils/winningNumbers.utils.js";
import {bonusNumberUtils} from "../../src/utils/bonusNumber.utils.js";

describe.skip("로또 구입 금액 테스트", () => {

    test("정상 테스트", () => {
        const purchasePrice = "1000"
        expect(purchasePriceUtils.validate(purchasePrice)).toEqual(1000);
    });

    test("정상 테스트", () => {
        const purchasePrice = 9007199254740000
        expect(purchasePriceUtils.validate(purchasePrice)).toEqual(9007199254740000);
    });

    test("예외 테스트 : 숫자가 아닌 값", () => {
        const purchasePrice = "12ab"
        expect(() => purchasePriceUtils.validate(purchasePrice)).toThrow(ERROR_CODE.NOT_POSITIVE_NUMBER);
    });

    test("예외 테스트 : 0 이하의 값 ", () => {
        const purchasePrice = "0"
        expect(() => purchasePriceUtils.validate(purchasePrice)).toThrow(ERROR_CODE.NOT_POSITIVE_NUMBER);
    });

    test("예외 테스트 : 음수값 ", () => {
        const purchasePrice = "-1000"
        expect(() => purchasePriceUtils.validate(purchasePrice)).toThrow(ERROR_CODE.NOT_POSITIVE_NUMBER);
    });

    test("예외 테스트 : 1000단위가 아닌 금액", () => {
        const purchasePrice = "9007199254740991"
        expect(() => purchasePriceUtils.validate(purchasePrice)).toThrow(ERROR_CODE.NOT_DIVIDED_BY_VALUE(PURCHASE_PRICE.MIN_CURR_UNIT));
    });

    test("예외 테스트 : 범위를 벗어난 값", () => {
        const purchasePrice = "9007199254740993"
        expect(() => purchasePriceUtils.validate(purchasePrice)).toThrow(ERROR_CODE.OUT_OF_RANGE(1, Number.MAX_SAFE_INTEGER));
    });
});


describe.skip("당첨 번호 유효성 테스트", () => {

    test("정상 테스트", () => {
        const winningNumber = [1, 2, 3, 4, 5, 6]
        expect(winningNumbersUtils.validate(winningNumber)).toEqual(winningNumber);
    });

    test("정상 테스트", () => {
        const winningNumber = [3, 12, 14, 35, 41, 45]
        expect(winningNumbersUtils.validate(winningNumber)).toEqual(winningNumber);
    });


    test("예외 테스트 : 양의 정수가 아닌 값 포함", () => {
        const winningNumber = [3, -12, 14, 35, 0, 42]
        expect(() => winningNumbersUtils.validate(winningNumber)).toThrow(ERROR_CODE.NOT_POSITIVE_NUMBER);
    });

    test("예외 테스트 : 양의 정수가 아닌 값 포함", () => {
        const winningNumber = ["1ab", 12, 14, 35, 41, 42]
        expect(() => winningNumbersUtils.validate(winningNumber)).toThrow(ERROR_CODE.NOT_POSITIVE_NUMBER);
    });

    test("예외 테스트 : 유효범위(1~45) 이상의 값이 포함된 경우", () => {
        const winningNumber = [1, 12, 14, 35, 41, 46]
        expect(() => winningNumbersUtils.validate(winningNumber)).toThrow(ERROR_CODE.OUT_OF_RANGE(WINNING_NUMBER.MIN_NUMBER, WINNING_NUMBER.MAX_NUMBER));
    });

    test("예외 테스트 : 당첨 번호 값이 6개 미만 경우", () => {
        const winningNumber = [1, 12, 14, 35, 41]
        expect(() => winningNumbersUtils.validate(winningNumber)).toThrow(ERROR_CODE.SIZE_OUT_OF_RANGE(WINNING_NUMBER.SIZE));
    });

    test("예외 테스트 : 당첨 번호 값이 7개 이상 경우", () => {
        const winningNumber = [1, 12, 14, 35, 41, 42, 43]
        expect(() => winningNumbersUtils.validate(winningNumber)).toThrow(ERROR_CODE.SIZE_OUT_OF_RANGE(WINNING_NUMBER.SIZE));
    });

    test("예외 테스트 : 당첨 번호에 중복값이 존재하는 경우", () => {
        const winningNumber = [1, 12, 12, 35, 41, 42]
        expect(() => winningNumbersUtils.validate(winningNumber)).toThrow(ERROR_CODE.NUMBER_DUPLICATE);
    });
});

describe.only("보너스 번호 유효성 테스트", () => {

    test("정상 테스트", () => {
        const bonusNumber = 43
        expect(bonusNumberUtils.validate(bonusNumber)).toEqual(Number(bonusNumber));
    });

    test("예외 테스트 : 양의 정수를 입력하지 않은 경우", () => {
        const bonusNumber = "0"
        expect(() => bonusNumberUtils.validate(bonusNumber)).toThrow(ERROR_CODE.NOT_POSITIVE_NUMBER);
    });

    test("예외 테스트 : 양의 정수를 입력하지 않은 경우", () => {
        const bonusNumber = "abc"
        expect(() => bonusNumberUtils.validate(bonusNumber)).toThrow(ERROR_CODE.NOT_POSITIVE_NUMBER);
    });

    test("예외 테스트 : 보너스 번호가 범위를 넘어간 경우(1~45)", () => {
        const bonusNumber = "46"
        expect(() => bonusNumberUtils.validate(bonusNumber)).toThrow(ERROR_CODE.OUT_OF_RANGE(WINNING_NUMBER.MIN_NUMBER, WINNING_NUMBER.MAX_NUMBER));
    });

    test("예외 테스트 : 당첨 번호에 중복값이 존재하는 경우", () => {
        const winningNumber = [1, 12, 14, 35, 41, 42]
        const bonusNumber = 1
        expect(() => bonusNumberUtils.validateWithWinningNumbers(bonusNumber, winningNumber)).toThrow(ERROR_CODE.BONUS_NUMBER_DUPLICATE);
    });

});
