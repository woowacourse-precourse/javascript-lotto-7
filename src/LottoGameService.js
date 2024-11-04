import IssuedLotto from './Lotto/IssuedLotto.js'
import AnswerLotto from './Lotto/AnswerLotto.js'

const WINNING_GRADE_PRIZE = {
    '1등': 2000000000, 
    '2등': 1500000, 
    '3등': 50000, 
    '4등': 5000, 
    '보너스': 30000000,
    '꼴등': 0,
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
            '보너스': 0,
            '꼴등': 0,
        };
        this.#purchaseAmount = 0;
        
    }

    start(purchaseAmount, issuedLottos, answerLotto){
        this.#purchaseAmount = purchaseAmount;
        this.#issuedLottos = issuedLottos;
        this.#answerLotto = answerLotto;
        this.#issuedLottos.forEach((lotto) => {
            lotto.checkWinningIssuedLotto(this.#answerLotto);
            this.#countWinningLotto(lotto);
        });
        this.#getTotalIncome();
        this.#calculateIncomeRate();
    }
    
    #countWinningLotto(issuedLotto){
        this.#winningGradeQuantity[issuedLotto.getWinningGrade()]++;
    }
    #calculateIncomeRate(){
        this.#incomeRate = this.#totalIncome / this.#purchaseAmount * 100;
    }
    #getTotalIncome(){
        this.#totalIncome = 0;
        Object.keys(this.#winningGradeQuantity).forEach((key) => {
            const gradePrize = WINNING_GRADE_PRIZE[key];
            const gradeQuantity = this.#winningGradeQuantity[key];
            this.#totalIncome += gradePrize * gradeQuantity;
        });
    }
    getResult(){
        return {
            gradeQuantity : this.#winningGradeQuantity,
            incomeRate : this.#incomeRate
        };
    }
}

export default LottoGameService