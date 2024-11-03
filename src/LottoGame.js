import Lotto from "./Lotto.js";
import { MissionUtils } from '@woowacourse/mission-utils';

class LottoGame {
    constructor(amount) {
        this.quantity = amount / 1000;
        this.lottoList = [];
        this.winRankList = [];
        this.amount = amount;
    }

    createLottoList() {
        for (let i = 0; i < this.quantity; i++) {
            const lottoNumber = new Lotto(MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6));
            this.lottoList.push(lottoNumber.getlottoList());
        }
        return this.lottoList;
    }

    lottoQuantity() {
        return this.quantity;
    }

    getWholeWinResult(winNumbers, bonusNumber) {
        this.winRankList = this.lottoList.map(a => {
            const lottoObj = new Lotto(a);
            return lottoObj.getWinResult(winNumbers, bonusNumber);
        });
        return this.winRankList.filter(a => a <= 5);
    }

    getWinResult() {
        const FORM = [
            '3개 일치 (5,000원)',
            '4개 일치 (50,000원)',
            '5개 일치 (1,500,000원)',
            '5개 일치, 보너스 볼 일치 (30,000,000원)',
            '6개 일치 (2,000,000,000원)'
        ];
        const results = [];

        FORM.forEach((a, idx) => {
            const rank = 5 - idx;
            const matchCount = this.getWinCount(this.winRankList, rank);
            results.push(`${a} - ${matchCount}개`);
        });
        return results;
    }

    calTotalWinAmount() {
        const winAmount = [5000, 50000, 1500000, 30000000, 2000000000];
        return winAmount.reduce((acc, cur, idx) => {
            const rank = 5 - idx;
            const matchCount = this.getWinCount(this.winRankList, rank);
            return acc + cur * matchCount;
        }, 0);
    }

    getWinCount(result, rank) {
        return result.filter(a => a === rank).length;
    }

    getYield() {
        return (this.calTotalWinAmount() / this.amount * 100).toFixed(1);
    }
}

export default LottoGame;