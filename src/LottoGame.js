import Lotto from "./Lotto.js";
import { MissionUtils } from '@woowacourse/mission-utils';

class LottoGame {
    constructor(amount) {
        this.quantity = amount / 1000;
        this.lottoList = [];
        this.winRankList = [];
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
}

export default LottoGame;