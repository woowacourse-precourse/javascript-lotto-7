import IssuedLotto from './Lotto/IssuedLotto.js'
import AnswerLotto from './Lotto/AnswerLotto.js'


class LottoGameService{
    #issuedLottos;
    #answerLotto;
    #winningGrade;

    constructor(){
        this.#winningGrade = {'1등': 0, 
            '2등': 0, 
            '3등': 0, 
            '4등': 0, 
            '보너스': 0};
    }

    ready(purchaseAmount, winningNumbers, bonusNumber){
        this.#issuedLottos = IssuedLotto.create(purchaseAmount);
        this.#answerLotto = AnswerLotto.create(winningNumbers, bonusNumber);
    }
    start(){
        this.#setEachLottoWinngGrade();
    }
    #setEachLottoWinngGrade(){
        this.#issuedLottos.forEach((issuedLotto) => {
            issuedLotto.setWinningGrade(this.#answerLotto)
        })
    }
}

export default LottoGameService