import Lotto from './Lotto.js'
import {random} from '../utils/random.js'

class IssuedLotto extends Lotto {
    #lottoTable;
    #matchNumber;
    #winningGrade;

    constructor(numbers) {
        super(numbers);
        this.#winningGrade = '꼴등';
        this.#matchNumber = 0;
    }

    static create(amount) {
        return Array.from({length: amount}, () => new IssuedLotto(random.makeUniqueNumbers(1, 45, 6)));
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
        this.applyLottoToTable(super.getNumbers());
        answer.getNumbers().forEach((element) => {
            this.#matchNumber += this.#lottoTable[element-1];
        });
    }
    checkWinningIssuedLotto(answer){
        this.setWinningGrade(answer);
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
    getLottoTable(){
        return this.#lottoTable;
    }
}

export default IssuedLotto