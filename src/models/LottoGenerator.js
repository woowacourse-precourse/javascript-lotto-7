import { Random } from '@woowacourse/mission-utils';
import { LOTTO } from '../utils/constants.js';
import Lotto from './Lotto.js';

class LottoGenerator {
    static generateNumbers() {
        return new Lotto([...Random.pickUniqueNumbersInRange(LOTTO.MIN_NUMBER, LOTTO.MAX_NUMBER, LOTTO.SIZE)]);
    }

    static generateMany(count) {
        return Array.from({ length: count }, () => this.generateNumbers());
    }
}

export default LottoGenerator;