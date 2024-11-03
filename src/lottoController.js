import { Console, Random } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';

class LottoController {
    getLottoNumbers() {
        return Random.pickUniqueNumbersInRange(1, 45, 6);
    }

    async buyLotto(inputMoney) {
        const lottoCount = Math.floor(inputMoney / 1000);
    
        const lottos = Array.from({ length: lottoCount }, () => {
            const numbers = this.getLottoNumbers();
            return new Lotto(numbers);
        });
    
        return lottos;
    }

    printLottos(lottos) {
        Console.print('');
        Console.print(`${lottos.length}개를 구매했습니다.`);
        lottos.forEach((lotto) => {
            Console.print(lotto.getNumbers());
        });
    }

}

export default LottoController;