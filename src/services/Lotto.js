import {MATCH_COUNTER} from "../constants/objects.js";
import {calculateAmount, findKeyToIncrease, toObjectValueArr} from "../utils/objectUtils.js";

class Lotto {
    #numbers;

    constructor(numbers) {
        this.#validate(numbers);
        this.#numbers = numbers;
    }

    #validate(numbers) {
        if (numbers.length !== 6) {
            throw new Error("[ERROR] 로또 번호는 6개여야 합니다.");
        }
    }

    recordStats(lottos, bonusNum) { //2 차원 배열
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
            .toFixed(2)
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
