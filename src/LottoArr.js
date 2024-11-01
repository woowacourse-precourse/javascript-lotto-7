import Lotto from "./Lotto.js"
import { MissionUtils } from "@woowacourse/mission-utils"

class LottoArr {
    #lottoArr = []
    #TIMES
    #PAY_INPUT

    constructor(PAY_INPUT) {
        this.#PAY_INPUT = PAY_INPUT
        this.#TIMES = this.#calculateTIMES()
    }

    #calculateTIMES() {
        return this.#PAY_INPUT / 1000
    }

    create() {
        for (let i = 0; i < this.#TIMES; i++) {
            const LOTTO_NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6)
            this.#lottoArr[i] = new Lotto(LOTTO_NUMBERS)
        }
        return this.#lottoArr
    }
}

// 테스트 코드
const lottoArr = new LottoArr(5000);
const result = lottoArr.create();
console.log(result);
