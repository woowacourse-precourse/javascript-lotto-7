import Lotto from './Lotto.js'

class IssuedLotto extends Lotto {
    #lottoTable;
    #matchNumber;
    #winningGrade;

    constructor(numbers) {
        super(numbers);
        this.#lottoTable = this.applyLottoToTable(numbers);
        this.#winningGrade = '꼴등';
        this.#matchNumber = 0;
    }

    static create(amount) {
        return Array.from({length: amount}, () => new IssuedLotto(randomNumber.getUniqueRandomNumbers(1, 45, 6)));
    }
    // makeLottoTable(numbers) {
    //     let lottoTables = []
    //     numbers.forEach((oneLotto) => {
    //         tables.push(this.applyLottoToTable(oneLotto));
    //     });
    //     return lottoTables;
    // }
    getWinningGrade(){
        return this.#winningGrade;
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
    #setMatchNumber(answer) {
        answer.getNumbers().forEach((element) => {
            this.#matchNumber += this.#lottoTable[element];
        });
    }
    setWinningGrade(answer) {
        this.#setMatchNumber(answer);
        if(this.#matchNumber === 6){
            this.#winningGrade = '1등';
            return;
        }
        if(this.#matchNumber === 5){
            this.#winningGrade = '2등';
            return;
        }
        if(this.#matchNumber === 5 && isMatchedBonus){
            this.#winningGrade = '보너스';
            return;
        }
        if(this.#matchNumber === 4){
            this.#winningGrade = '3등';
            return;
        }
        if(this.#matchNumber === 3){
            this.#winningGrade = '4등';
            return;
        }
        this.#winningGrade = '꼴등';
        return;
    }
    isMatchedBonus(bonus){
        return this.#lottoTable[bonus] === 1;
    }
}

export default IssuedLotto