import { MissionUtils } from '@woowacourse/mission-utils';

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
        const MESSAGES = {
            3: '3개 일치 (5,000원)',
            4: '4개 일치 (50,000원)',
            5: '5개 일치 (1,500,000원)',
            5.5: '5개 일치, 보너스 볼 일치 (30,000,000원)',
            6: '6개 일치 (2,000,000,000원)',
        };

        Object.entries(results).forEach(([key, value]) => {
            this.print(`${MESSAGES[key]} - ${value}개`);
        });
    }
    static printEarningsRate(rate) {
        this.print(`총 수익률은 ${rate}%입니다.`);
    }
}

export default Output;
