import PurchaseAmount from "../../src/models/PurchaseAmount.js";
import PurchaseAmountError from "../../src/errors/PurchaseAmountError.js";
import { ERROR_MESSAGE } from "../../src/constants/errorMessages.js";

describe("로또 구입 금액(PurchaseAmount) 클래스 테스트", () => {

    const AMOUNT_UNIT = 1000;

    test("로또 구입 금액 정상 기능 테스트_1", () => {
        const INPUT_PURCHASE_AMOUNT = 1000;
        const result = PurchaseAmount.getPurchaseAmount(INPUT_PURCHASE_AMOUNT);
        expect(result).toStrictEqual(INPUT_PURCHASE_AMOUNT/AMOUNT_UNIT);
    });

    test("로또 구입 금액 정상 기능 테스트_2", () => {
        const INPUT_PURCHASE_AMOUNT = 35000;
        const result = PurchaseAmount.getPurchaseAmount(INPUT_PURCHASE_AMOUNT);
        expect(result).toStrictEqual(INPUT_PURCHASE_AMOUNT/AMOUNT_UNIT);
    });

    test("로또 구입 금액이 1,000 단위가 아닐 경우 예외가 발생한다.", () => {
        const INPUT_PURCHASE_AMOUNT = 8700;
        expect(() => {
            new PurchaseAmount(INPUT_PURCHASE_AMOUNT);
        }).toThrow(new PurchaseAmountError(ERROR_MESSAGE.input_purchase_amount_multiple));
    });

    test("로또 구입 금액이 1,000 아래일 경우 예외가 발생한다.", () => {
        const INPUT_PURCHASE_AMOUNT = 900;
        expect(() => {
            new PurchaseAmount(INPUT_PURCHASE_AMOUNT);
        }).toThrow(new PurchaseAmountError(ERROR_MESSAGE.input_purchase_amount_multiple));
    });

    test("로또 구입 금액이 공백일 경우 예외가 발생한다.", () => {
        const INPUT_PURCHASE_AMOUNT = '';
        expect(() => {
            new PurchaseAmount(INPUT_PURCHASE_AMOUNT);
        }).toThrow(new PurchaseAmountError(ERROR_MESSAGE.input_is_empty));
    });

    test("로또 구입 금액이 숫자가 아닐 경우 예외가 발생한다.", () => {
        const INPUT_PURCHASE_AMOUNT = '천';
        expect(() => {
            new PurchaseAmount(INPUT_PURCHASE_AMOUNT);
        }).toThrow(new PurchaseAmountError(ERROR_MESSAGE.input_purchase_amount_minimum));
    });
});