import { MissionUtils } from '@woowacourse/mission-utils';
import { LOTTO_CONFIG } from '../constants/index.js';

class Output {
    static print(message) {
        MissionUtils.Console.print(message);
    }

    static printPurchaseAmount(count) {
        this.print(`${count}개를 구매했습니다.`);
    }

    static printLottos(lottos) {
        lottos.forEach((lotto) => {
            this.print(`[${lotto.join(', ')}]`);
        });
    }
    static printWinningStatus(results) {
        Object.entries(results).forEach(([key, value]) => {
            this.print(`${LOTTO_CONFIG.WINNING_MESSAGES[key]} - ${value}개`);
        });
    }
    static printEarningsRate(rate) {
        this.print(`총 수익률은 ${rate}%입니다.`);
    }
}

export default Output;
