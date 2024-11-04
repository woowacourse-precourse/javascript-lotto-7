import {
    bonusNumbersValidate,
    bonusNumbersValidateWithWinningNumber,
    winningNumbersValidate
} from "../validation/validator.js";
import {lottoUtils} from "../utils/lotto.utils.js";

class LottoGame {
    #winningNumber
    #bonusNumber
    #lottos //Lotto 객체

    constructor(winningNumber, bonusNumber, lottos) {
        this.#validate(winningNumber, bonusNumber)
        this.#winningNumber = winningNumber.map(Number);
        this.#bonusNumber = Number(bonusNumber);
        this.#lottos = lottos;
    }

    #validate(winningNumber, bonusNumber) {
        winningNumbersValidate(winningNumber);
        bonusNumbersValidate(bonusNumber);
        bonusNumbersValidateWithWinningNumber(bonusNumber, winningNumber);
    }

    getLottoMatchResultArray() {
        let lottoResult = Array(8).fill(0);
        this.#lottos.forEach((lotto) => {
            const matchNumber = lotto.getLottoResult(this.#winningNumber, this.#bonusNumber);
            lottoResult[matchNumber]++
        })
        return lottoResult;
    }

    calculateProfitRate(purchasePrice) {
        const profitRate = this.calculateTotalPrize() / purchasePrice * 100;
        return Math.round(profitRate * 100) / 100;
    }

    calculateTotalPrize() {
        let totalPrize = 0;
        this.getLottoMatchResultArray().forEach((amount, index) => {
            totalPrize += amount * lottoUtils.getPrize(index);
        })
        return totalPrize;
    }

}

export default LottoGame;