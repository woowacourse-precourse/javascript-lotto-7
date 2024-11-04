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
}

export default LottoResult;