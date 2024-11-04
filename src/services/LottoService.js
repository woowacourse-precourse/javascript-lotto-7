import Lotto from "../models/Lotto.js";
import { WINNING_CRITERIA, PICK_AMOUNT, THOUSAND_UNIT, RANK_INDEX, MINIMUM_INDEX, HUNDRED_PERCENT } from "../constants/Constants.js";

class LottoService {
    getLottoCount(inputAmount) {
        return inputAmount / THOUSAND_UNIT;
    }

    getGeneratedLottos(lottoCount) {
        return Array.from({ length: lottoCount }, () => new Lotto());
    }

    async getWinningRecord(lottos, inputWinningNumbers, inputBonusNumber) {
        let winningRecord = Array(PICK_AMOUNT).fill(0);
        lottos.forEach((lotto) => {
            winningRecord[lotto.convertRank(inputWinningNumbers, inputBonusNumber)]++;
        });
        return winningRecord;
    }

    async getProfitRate(winningRecord, inputAmount) {
        let profitRate = 0;
        for (let i = RANK_INDEX; i >= MINIMUM_INDEX; i--) {
            profitRate += winningRecord[i] * WINNING_CRITERIA[i].price;
        }

        return (profitRate / inputAmount) * HUNDRED_PERCENT;
    }
}

export default LottoService;