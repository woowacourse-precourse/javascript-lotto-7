import Lotto from './Lotto.js'

import {bonusNumberValidatePipe} from '../bonusNumberValidatePipe.js'

class AnswerLotto extends Lotto {
    #bonus;

    constructor(numbers, bonus){
        super(numbers);
        
        this.#validateAnswerLotto(bonus);
        this.#bonus = bonus;
    }

    static create(numbers, bonus) {
        return new AnswerLotto(numbers, bonus);
    }
    #validateAnswerLotto(bonus){
        bonusNumberValidatePipe(bonus);
    }
    getBonusNumber(){
        return this.#bonus;
    }

}

export default AnswerLotto