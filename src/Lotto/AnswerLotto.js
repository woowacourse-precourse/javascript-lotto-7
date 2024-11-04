import Lotto from '../Lotto.js'

import {bonusNumberValidatePipe} from '../bonusNumberValidatePipe.js'
import {validateBonusOverlap} from '../validate.js'

class AnswerLotto extends Lotto {
    #bonus;
    #lottoTable;

    constructor(numbers, bonus){
        super(numbers);
        
        this.#bonus = bonus;
        this.applyLottoToTable(numbers);
        this.#validateAnswerLotto(bonus);
    }

    static create(numbers, bonus) {
        return new AnswerLotto(numbers, bonus);
    }
    #validateAnswerLotto(bonus){
        bonusNumberValidatePipe(bonus);
        validateBonusOverlap(this.#lottoTable, bonus);
    }
    getBonusNumber(){
        return this.#bonus;
    }
    #setInitialStateLottoTable(){
        this.#lottoTable = Array.from({ length: 45 }, () => 0);
    }
    applyLottoToTable(numbers) {
        this.#setInitialStateLottoTable();
        numbers.forEach((element) => {
            this.#lottoTable[element - 1] += 1;
        });
    }

}

export default AnswerLotto