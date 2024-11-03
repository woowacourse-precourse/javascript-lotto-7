import {Console} from "@woowacourse/mission-utils";
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
            let matchCnt = this.countMatches(lotto)
            this.makeRecord(matchCnt)
            if (matchCnt === 5 && lotto.includes(bonusNum)) {
                MATCH_COUNTER.five -= 1
                MATCH_COUNTER.bonus += 1
            }
        }
        return MATCH_COUNTER
    }

    makeRecord(matchCnt) {
        switch (matchCnt) {
            case 3:
                MATCH_COUNTER.three += 1;
                break;
            case 4:
                MATCH_COUNTER.four += 1;
                break;
            case 5:
                MATCH_COUNTER.five += 1;
                break;
            case 6:
                MATCH_COUNTER.six += 1;
                break;
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

    resultOutput(statMatch) {
        Console.print(`당첨통계\n---`)
        Object.values(statMatch).map((elem, idx) => {
            Console.print(obj[idx].content + elem + "개")
        })
    }
}

const obj = [
    {match: "three", content: "3개 일치 (5,000원) - "},
    {match: "four", content: "4개 일치 (50,000원) -"},
    {match: "five", content: "5개 일치 (1,500,000원) - "},
    {match: "bonus", content: "5개 일치, 보너스 볼 일치 (30,000,000원) - "},
    {match: "six", content: "6개 일치 (2,000,000,000원) - "}
]
export default Lotto;
