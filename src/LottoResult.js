import { Console } from "@woowacourse/mission-utils"
import { PRIZE } from "./constants/rank.js";

class LottoResult {
    #matchCounts = {
        matchCount_3: 0,
        matchCount_4: 0,
        matchCount_5_withoutBonus: 0,
        matchCount_5_withBonus: 0,
        matchCount_6: 0,
        unrank: 0
    }
    #totalProfit = 0

    constructor(){}

    updateLottoResult(eachLottoResult){
        if (this.#matchCounts.hasOwnProperty(eachLottoResult)) {
            this.#matchCounts[eachLottoResult] += 1;
        } else {
            Console.print("Invalid result field.");
        }
    }

    calculateProfit(){
        let profit = 0;
        profit += this.getMatchCount(3) * PRIZE.matchCount_3;
        profit += this.getMatchCount(4) * PRIZE.matchCount_4;
        profit += this.getMatchCount(5, false) * PRIZE.matchCount_5_withoutBonus;
        profit += this.getMatchCount(5, true) * PRIZE.matchCount_5_withBonus;
        profit += this.getMatchCount(6) * PRIZE.matchCount_6;
        Console.print(`profit${profit}`);
        this.#totalProfit = profit;
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

    getTotalProfit(){
        return this.#totalProfit;
    }
}

export default LottoResult;