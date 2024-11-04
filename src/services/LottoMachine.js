import {MissionUtils} from "@woowacourse/mission-utils";
import {sortAsc} from "../utils/conversionUtils.js";
import {purchaseValid} from "./utils/validation.js";

class LottoMachine {
    #number

    constructor(number) {
        this.#validate(number);
        this.#number = number / 1000
    }

    #validate(number) {
        return purchaseValid(number)
    }

    lottoRelease() {
        const lottos = []
        for (let i = 0; i < this.#number; i++) {
            const sortedLotto = sortAsc(this.#getSixRandomValues())
            lottos.push(sortedLotto)
        }
        return lottos
    }

    #getSixRandomValues() {
        return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
    }


}

export default LottoMachine