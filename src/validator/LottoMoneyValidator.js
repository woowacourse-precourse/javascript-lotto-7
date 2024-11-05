import ErrorMessages from "../constant/ErrorMessage.js";

class LottoMoneyValidator {
    checkMoneyIsMultipleOfThousand(lottoMoney) {
        if (lottoMoney % 1000 !== 0) {
            throw new Error(ErrorMessages.LOTTO_MONEY_MULTIPLE_THOUSAND);
        }
    }

    checkMoneyIsAtLeastThousand(lottoMoney) {
        if (lottoMoney < 1000) {
            throw new Error(ErrorMessages.LOTTO_MONEY_POSITIVE);
        }
    }

    checkMoneyIsEmpty(lottoMoney) {
        if (String(lottoMoney).trim() === "") {
            throw new Error(ErrorMessages.LOTTO_MONEY_MUST_NUMBER);
        }
    }

    checkMoneyIsNumber(lottoMoney) {
        if (isNaN(lottoMoney)) {
            throw new Error(ErrorMessages.LOTTO_MONEY_MUST_NUMBER);
        }
    }

    validateLottoMoney(lottoMoney) {
        this.checkMoneyIsEmpty(lottoMoney);
        this.checkMoneyIsNumber(lottoMoney);
        this.checkMoneyIsAtLeastThousand(lottoMoney);
        this.checkMoneyIsMultipleOfThousand(lottoMoney);
        return lottoMoney;
    }
}

export default LottoMoneyValidator;