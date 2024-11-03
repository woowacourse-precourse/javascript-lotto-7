import lottoNumberValidatePipe from '../lottoNumberValidatePipe.js'
import bonusNumberValidatePipe from '../bonusNumberValidatePipe.js'
class AnswerLotto extends Lotto {
    #bonus;

    constructor(numbers, bonus){
        super(numbers);
        this.#validateAnswerLotto(numbers, bonus);
        this.#bonus = bonus;
    }

    #validateAnswerLotto(numbers, bonus){
        lottoNumberValidatePipe(numbers);
        bonusNumberValidatePipe(bonus);
    }

}