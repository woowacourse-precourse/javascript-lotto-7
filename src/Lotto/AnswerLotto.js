import Lotto from './Lotto.js'

import {lottoNumberValidatePipe} from '../lottoNumberValidatePipe.js'
import {bonusNumberValidatePipe} from '../bonusNumberValidatePipe.js'

class AnswerLotto extends Lotto {
    #bonus;

    constructor(numbers, bonus){
        super(numbers);
        this.#validateAnswerLotto(numbers, bonus);
        this.#bonus = bonus;
    }

    static create(numbers, bonus) {
        return new AnswerLotto(numbers, bonus);
    }
    #validateAnswerLotto(numbers, bonus){
        lottoNumberValidatePipe(numbers);
        bonusNumberValidatePipe(bonus);
    }
    getBonusNumber(){
        return this.#bonus;
    }

}

export default AnswerLotto