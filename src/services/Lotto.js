import {MATCH_COUNTER} from "../constants/objects.js";
import {calculateAmount, findKeyToIncrease, toObjectValueArr} from "../utils/objectUtils.js";
import {bonusNumValid, lottoValid} from "./utils/validation.js";

class Lotto {
    #numbers;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers;
    }

    #validate(numbers) {
        return lottoValid(numbers)
    }

    bonusNumValidate(number) {
        return bonusNumValid(this.#numbers, number)
    }

    recordStats(lottos, bonusNum) {
        for (const lotto of lottos) {
            const matchCnt = this.countMatches(lotto)
            const foundKey = findKeyToIncrease(matchCnt)
            foundKey && (MATCH_COUNTER[foundKey].cnt += 1)
            if (matchCnt === 5 && lotto.includes(bonusNum)) {
                MATCH_COUNTER.five.cnt -= 1
                MATCH_COUNTER.bonus.cnt += 1
            }
        }
    }

    calculateYield(purchaseAmount) {
        return (calculateAmount(toObjectValueArr(MATCH_COUNTER)) / purchaseAmount * 100)
            .toFixed(1)
    }


    countMatches(lotto) {
        let matchCnt = 0
        for (const lottoNum of lotto) {
            if (this.#numbers.includes(lottoNum)) {
                matchCnt++
            }
        }
        return matchCnt
    }
}

export default Lotto;
