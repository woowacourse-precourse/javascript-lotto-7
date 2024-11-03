import {MissionUtils} from "@woowacourse/mission-utils";
import {sortAsc} from "../utils/methods.js";

class LottoMachine {
    #number

    constructor(number) {
        this.#validate(number);
        this.number = number
    }

    lottoRelease(purchaseNum) {
        const lottos = []
        for (let i = 0; i < purchaseNum; i++) {
            const sortedLotto = sortAsc(this.getSixRandomValues())
            lottos.push(sortedLotto)
        }
        return lottos
    }

    getSixRandomValues() {
        return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
    }

    #validate(purchase) { //함수로 나중에 분리
        if (isNaN(purchase)) {
            throw new Error("[Error]")
        }
    }

}

export default LottoMachine