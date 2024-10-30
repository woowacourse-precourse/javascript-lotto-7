class LottoMoneyValidator {
    checkMoneyIsMultipleOfThousand(lottoMoney) {
        if (lottoMoney % 1000 !== 0) {
            throw new Error("[ERROR] 로또 구입 금액은 1000원 단위여야 합니다.");
        }
    }

    checkMoneyIsAtLeastThousand(lottoMoney) {
        if (lottoMoney < 1000) {
            throw new Error("[ERROR] 로또 구입 금액은 1000원 이상이어야 합니다.");
        }
    }

    checkMoneyIsEmpty(lottoMoney) {
        if (String(lottoMoney).trim() === "") {
            throw new Error("[ERROR] 로또 구입 금액은 공백일 수 없습니다.");
        }
    }

    checkMoneyIsNumber(lottoMoney) {
        if (isNaN(lottoMoney)) {
            throw new Error("[ERROR] 로또 구입 금액은 숫자여야 합니다.");
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