import IssuedLotto from './Lotto/IssuedLotto.js'
import AnswerLotto from './Lotto/AnswerLotto.js'

const WINNING_GRADE_PRIZE = {
    '1등': 2000000000, 
    '2등': 1500000, 
    '3등': 50000, 
    '4등': 5000, 
    '보너스': 30000000
};

class LottoGameService{
    #issuedLottos;
    #answerLotto;
    #winningGradeQuantity;
    #purchaseAmount;
    #totalIncome;
    #incomeRate;

    constructor(){
        this.#winningGradeQuantity = {
            '1등': 0, 
            '2등': 0, 
            '3등': 0, 
            '4등': 0, 
            '보너스': 0};
        this.#purchaseAmount = 0;
        this.#totalIncome = 0;
    }

    ready(purchaseAmount, purchaseQuantity, winningNumbers, bonusNumber){
        this.#purchaseAmount = purchaseAmount;
        this.#issuedLottos = IssuedLotto.create(purchaseQuantity);
        this.#answerLotto = AnswerLotto.create(winningNumbers, bonusNumber);
    }
    start(){
        this.#checkIssuedLotto();
        this.#getTotalIncome();
        this.#calculateIncomeRate();
    }
    #checkIssuedLotto(){
        this.#issuedLottos.forEach((issuedLotto) => {
            this.#checkIssuedLottoWinngGrade(issuedLotto);
            this.#countWinningLotto(issuedLotto);
        })
    }
    #checkIssuedLottoWinngGrade(issuedLotto){
        issuedLotto.setWinningGrade(this.#answerLotto);
    }
    #countWinningLotto(issuedLotto){
        this.#winningGradeQuantity[issuedLotto.getWinningGrade()]++;
    }
    #calculateIncomeRate(){
        this.#incomeRate = this.#totalIncome / this.#purchaseAmount * 100;
    }
    #getTotalIncome(){
        Object.keys(this.#winningGradeQuantity).forEach((key) => {
            const gradePrize = WINNING_GRADE_PRIZE[key];
            const gradeQuantity = this.#winningGradeQuantity[key];

            this.#totalIncome += gradePrize * gradeQuantity;
        });
    }
}

export default LottoGameService