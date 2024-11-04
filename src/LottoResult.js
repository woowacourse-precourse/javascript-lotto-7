import { Console } from "@woowacourse/mission-utils"

class LottoResult {
    #matchCounts = {
        matchCount_3: 0,
        matchCount_4: 0,
        matchCount_5_withoutBonus: 0,
        matchCount_5_withBonus: 0,
        matchCount_6: 0,
        unrank: 0
    }

    constructor(){}

    updateLottoResult(eachLottoResult){
        if (this.#matchCounts.hasOwnProperty(eachLottoResult)) {
            this.#matchCounts[eachLottoResult] += 1;
        } else {
            Console.print("Invalid result field.");
        }
    }

    getMatchCount(countNumber, isWithBonus = false) {
        if(countNumber == 5){
            if(isWithBonus){
                return this.#matchCounts.matchCount_5_withBonus;
            }
            else{
                return this.#matchCounts.matchCount_5_withoutBonus;
            }
        }
        else if(countNumber == 3 | countNumber == 4 | countNumber == 6){
            return this.#matchCounts[`matchCount_${countNumber}`];
        }
    }
}

export default LottoResult;