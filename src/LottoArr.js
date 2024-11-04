import Lotto from "./Lotto.js"
import { MissionUtils } from "@woowacourse/mission-utils"

class LottoArr {
    #lottoArr = []
    #TIMES
    #PAY_INPUT

    constructor(PAY_INPUT) {
        this.#PAY_INPUT = PAY_INPUT
        this.#TIMES = this.#calculateTIMES()
        this.#getLottoArr()
    }

    #calculateTIMES() {
        return this.#PAY_INPUT / 1000
    }

    #getLottoArr() {
        for (let i = 0; i < this.#TIMES; i++) {
            const LOTTO_NUMBERS = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b)
            this.#lottoArr[i] = new Lotto(LOTTO_NUMBERS).toArr()
        }
    }

    print() {
        let result = this.#TIMES + "개를 구매했습니다.\n"

        for (let i = 0; i < this.#lottoArr.length; i++) {
            result += this.#lottoArr[i] + "\n"
        }
        return result
    }

    toString() {
        return `[${this.#lottoArr.join(', ')}]`
    }

    toArr() {
        return this.#lottoArr
    }

}

export default LottoArr