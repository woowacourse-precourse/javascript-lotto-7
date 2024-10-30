import LottoMoneyValidator from "../src/validator/LottoMoneyValidator.js"

describe("로또 구입 금액 테스트", () => {

    test("로또 구입 금액이 1000의 배수가 아닌 경우", () => {
        const lottoMoneyValidator = new LottoMoneyValidator();
        expect(() => lottoMoneyValidator.validateLottoMoney(1500)).toThrow(
            "[ERROR] 구입 금액은 1000원 단위여야 합니다."
        );
    });

    test("로또 구입 금액이 1000원 미만인 경우", () => {
        const lottoMoneyValidator = new LottoMoneyValidator();
        expect(() => lottoMoneyValidator.validateLottoMoney(500)).toThrow(
            "[ERROR] 로또 구입 금액은 1000원 이상이어야 합니다."
        );
    });

    test("로또 구입 금액이 공백일 경우", () => {
        const lottoMoneyValidator = new LottoMoneyValidator();
        expect(() => lottoMoneyValidator.validateLottoMoney("")).toThrow(
            "[ERROR] 로또 구입 금액은 공백일 수 없습니다."
        );
    });

    test("로또 구입 금액이 숫자가 아닐 경우", () => {
        const lottoMoneyValidator = new LottoMoneyValidator();
        expect(() => lottoMoneyValidator.validateLottoMoney("abc")).toThrow(
            "[ERROR] 로또 구입 금액은 숫자여야 합니다."
        );
    });

    test("로또 구입 금액이 정상인 경우", () => {
        const lottoMoneyValidator = new LottoMoneyValidator();
        expect(() => lottoMoneyValidator.validateLottoMoney(5000)).not.toThrow();
    });

});