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
    #purchaseQuantity;
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
    inSetting(purchaseAmount, purchaseQuantity, onMakeIssuedLotto){
        this.#purchaseAmount = purchaseAmount;
        this.#purchaseQuantity= purchaseQuantity;
        this.#issuedLottos = IssuedLotto.create(purchaseQuantity);
        onMakeIssuedLotto(this.#purchaseQuantity, this.#issuedLottos);
    }
    start(answerNumbers, bonusNumber){
        this.#answerLotto = AnswerLotto.create(answerNumbers, bonusNumber);
        this.#issuedLottos.forEach((issuedLotto) => {
            issuedLotto.checkWinningIssuedLotto(this.#answerLotto);
            this.#countWinningLotto(issuedLotto);
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