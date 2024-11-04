import Lotto from "../Lotto.js";
import { errorMessage } from "../constant/errorMessage.js";

export class Comparison {
    #winningNumber;
    #bonusNumber;

    constructor(winningNumber, bonusNumber) {
        this.#validate(winningNumber, bonusNumber);
        this.#winningNumber = winningNumber;
        this.#bonusNumber = bonusNumber;
    }

    #validate(number, bonus){
        const lotto = new Lotto(number);

        if (number.includes(bonus)){
            throw new Error(errorMessage.duplicateLottoNumbers);
        }
        if (bonus < 1 || bonus > 45){
            throw new Error(errorMessage.invalidCountLottoNumbers);
        }
    }

    compareWithLotto(lotto){
        const lottoNumbers = lotto.getLotto();
        const matchCount = this.#countMatches(lottoNumbers);

        return {
            matchCount,
            matchBonus: this.#matchBonus(lottoNumbers),
            rank: this.#returnRank(matchCount, this.#matchBonus(lottoNumbers))
        };
    }

    #countMatches(lottoNumbers){
        return lottoNumbers.filter(number => this.#winningNumber.includes(number)).length;
    }

    #matchBonus(lottoNumbers){
        return lottoNumbers.includes(this.#bonusNumber);
    }

    #returnRank(matchCount, matchBonus){
        if (matchCount === 6) return 1;
        if (matchCount === 5 && matchBonus) return 2;
        if (matchCount === 5) return 3;
        if (matchCount === 4) return 4;
        if (matchCount === 3) return 5;
        return 0;
    }
}