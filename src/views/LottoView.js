import {MissionUtils} from "@woowacourse/mission-utils";

class LottoView {
    static #console = MissionUtils.Console;

    static printPurchaseCount(count) {
        this.#console.print(`${count}개를 구매했습니다.`);
    }

    static printLottos(lottos) {
        lottos.forEach(numbers => {
            this.#console.print(`[${numbers.join(', ')}]`);
        });
        this.#console.print('');
    }

    static printResults(results) {
        this.#console.print('당첨 통계');
        this.#console.print('---');
        this.#console.print(`3개 일치 (5,000원) - ${results.matchThree}개`);
        this.#console.print(`4개 일치 (50,000원) - ${results.matchFour}개`);
        this.#console.print(`5개 일치 (1,500,000원) - ${results.matchFive}개`);
        this.#console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${results.matchFiveBonus}개`);
        this.#console.print(`6개 일치 (2,000,000,000원) - ${results.matchSix}개`);
    }

    static printReturnRate(purchaseAmount, totalPrize) {
        const returnRate = (totalPrize / purchaseAmount * 100).toFixed(1);
        this.#console.print(`총 수익률은 ${returnRate}%입니다.`);
    }
}

export default LottoView;