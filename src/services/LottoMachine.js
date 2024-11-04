import {MissionUtils} from "@woowacourse/mission-utils";
import {sortAsc} from "../utils/methods.js";
import {purchaseValid} from "./utils/validation.js";

class LottoMachine {
    #number

    constructor(number) {
        this.#validate(number);
        this.#number = number / 1000
    }

    lottoRelease() {
        const lottos = []
        for (let i = 0; i < this.#number; i++) {
            const sortedLotto = sortAsc(this.getSixRandomValues())
            lottos.push(sortedLotto)
        }
        return lottos
    }

    getSixRandomValues() {
        return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
    }

    #validate(purchase) { //함수로 나중에 분리
        const {hasError, message} = purchaseValid(purchase)
        if (hasError) {
            throw new Error(message)
        }
    }

}

export default LottoMachine