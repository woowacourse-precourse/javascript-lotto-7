import LottoMoneyValidator from "../src/validator/LottoMoneyValidator.js"
import ErrorMessages from "../src/constant/ErrorMessage.js";
describe("로또 구입 금액 테스트", () => {

    test("로또 구입 금액이 1000의 배수가 아닌 경우", () => {
        const lottoMoneyValidator = new LottoMoneyValidator();
        expect(() => lottoMoneyValidator.validateLottoMoney(1500)).toThrow(ErrorMessages.LOTTO_MONEY_MULTIPLE_THOUSAND);
    });

    test("로또 구입 금액이 1000원 미만인 경우", () => {
        const lottoMoneyValidator = new LottoMoneyValidator();
        expect(() => lottoMoneyValidator.validateLottoMoney(500)).toThrow(ErrorMessages.LOTTO_MONEY_POSITIVE);
    });

    test("로또 구입 금액이 공백일 경우", () => {
        const lottoMoneyValidator = new LottoMoneyValidator();
        expect(() => lottoMoneyValidator.validateLottoMoney(" ")).toThrow(ErrorMessages.LOTTO_MONEY_MUST_NUMBER);
    });

    test("로또 구입 금액이 숫자가 아닐 경우", () => {
        const lottoMoneyValidator = new LottoMoneyValidator();
        expect(() => lottoMoneyValidator.validateLottoMoney("abc")).toThrow(ErrorMessages.LOTTO_MONEY_MUST_NUMBER);
    });

    test("로또 구입 금액이 정상인 경우", () => {
        const lottoMoneyValidator = new LottoMoneyValidator();
        const result = lottoMoneyValidator.validateLottoMoney(5000)
        expect(result).toEqual(5000);
    });

});