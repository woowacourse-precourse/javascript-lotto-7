import {purchasePriceValidation} from "../../src/validation/validationCheck.js";
import {ERROR_CODE, PURCHASE_PRICE} from "../../src/constants/constants.js";

describe("로또 구입 금액 테스트", () => {

    test("정상 테스트", () => {
        const purchasePrice = "1000"
        expect(purchasePriceValidation.isValidPurchasePrice(purchasePrice)).toEqual(1000);
    });

    test("정상 테스트", () => {
        const purchasePrice = 9007199254740000
        expect(purchasePriceValidation.isValidPurchasePrice(purchasePrice)).toEqual(9007199254740000);
    });

    test("예외 테스트 : 숫자가 아닌 값", () => {
        const purchasePrice = "12ab"
        expect(() => purchasePriceValidation.isValidPurchasePrice(purchasePrice)).toThrow(ERROR_CODE.NOT_POSITIVE_NUMBER);
    });

    test("예외 테스트 : 0 이하의 값 ", () => {
        const purchasePrice = "0"
        expect(() => purchasePriceValidation.isValidPurchasePrice(purchasePrice)).toThrow(ERROR_CODE.NOT_POSITIVE_NUMBER);
    });

    test("예외 테스트 : 음수값 ", () => {
        const purchasePrice = "-1000"
        expect(() => purchasePriceValidation.isValidPurchasePrice(purchasePrice)).toThrow(ERROR_CODE.NOT_POSITIVE_NUMBER);
    });

    test("예외 테스트 : 1000단위가 아닌 금액", () => {
        const purchasePrice = "9007199254740991"
        expect(() => purchasePriceValidation.isValidPurchasePrice(purchasePrice)).toThrow(ERROR_CODE.NOT_DIVIDED_BY_VALUE(PURCHASE_PRICE.MIN_CURR_UNIT));
    });

    test("예외 테스트 : 범위를 벗어난 값", () => {
        const purchasePrice = "9007199254740993"
        expect(() => purchasePriceValidation.isValidPurchasePrice(purchasePrice)).toThrow(ERROR_CODE.OUT_OF_RANGE(1, Number.MAX_SAFE_INTEGER));
    });
});
