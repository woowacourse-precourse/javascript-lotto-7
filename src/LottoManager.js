import Lotto from "./Lotto";
import {Random, Console} from '@woowacourse/mission-utils';
import ResultCalculator from './ResultCalculator';

class LottoManager{
    constructor(purchaseAmount){
        this.lottos = this.generateLottos(purchaseAmount / 1000);
        this.printLottos();
    }

    generateLottos(count){
        return Array.from({length: count}, () =>{
            const numbers = Random.pickUniqueNumbersInRange(1,45,6).sort((a,b) => a - b);
            return new Lotto(numbers);
        });
    }

    printLottos(){
        Console.print(`${this.lottos.length}개를 구매했습니다.\n`);
        this.lottos.forEach((lotto) => {
            Console.print(`[${lotto.getNumbers().join(', ')}]`);
        });
    }

    checkResults(winningNumbers, bonusNumber) {
        const resultCalculator = new ResultCalculator(this.lottos, winningNumbers, bonusNumber);
        resultCalculator.printResults();
    }
}

export default LottoManager;