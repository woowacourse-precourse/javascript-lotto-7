import {MATCH_COUNTER} from "../constants/objects.js";

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

    setStats(lottos, bonusNum) { //2 차원 배열
        for (const lotto of lottos) {
            const matchCnt = this.countMatches(lotto)
            const foundKey = this.findKeyToIncrease(matchCnt)
            foundKey && (MATCH_COUNTER[foundKey] += 1)
            if (matchCnt === 5 && lotto.includes(bonusNum)) {
                MATCH_COUNTER.five -= 1
                MATCH_COUNTER.bonus += 1
            }
        }
        return MATCH_COUNTER
    }

    findKeyToIncrease(matchCnt) {
        switch (matchCnt) {
            case 3:
                return "three"
            case 4:
                return "four"
            case 5:
                return "five"
            case 6:
                return "six"
            default:
                return null
        }
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
