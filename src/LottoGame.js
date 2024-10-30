import Lotto from "./Lotto.js";
import { MissionUtils } from '@woowacourse/mission-utils';

class LottoGame {
    constructor(amount) {
        this.quantity = amount / 1000;
        this.lottoList = [];
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
}

export default LottoGame;