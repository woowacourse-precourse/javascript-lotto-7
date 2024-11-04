import {Console} from '@woowacourse/mission-utils'
import LottoGameController from './LottoGameController.js'

class LottoGameView{
    async getPurchaseQuantity(){
        const input = await Console.readLineAsync('구입금액을 입력해 주세요.');
        return LottoGameController.onGetPurchaseQuantity(input);
    }

    async getAnswerNumber(){
        const input = await Console.readLineAsync('당첨 번호를 입력해 주세요.');
        return LottoGameController.onGetAnswerNumber(input);
    }

    async getBonusNumber(){
        const input = await Console.readLineAsync('보너스 번호를 입력해 주세요.');
        return LottoGameController.onGetBonusNumber(input);
    }
    showPurchaseResult(purchaseQuantity, issuedLottos){
        Console.print(`${purchaseQuantity}개를 구매했습니다.`);
        issuedLottos.forEach((lotto) => {
            Console.print(lotto.getNumbers());
        });
    }
    showLottoGameResult(result){
        let outputMessages = [];
        outputMessages.push('당첨 통계\n---\n');
        outputMessages.push(`3개 일치 (5,000원) - ${result.gradeQuantity['4등']}개\n`);
        outputMessages.push(`4개 일치 (50,000원) - ${result.gradeQuantity['3등']}개\n`);
        outputMessages.push(`5개 일치 (1,500,000원) - ${result.gradeQuantity['2등']}개\n`);
        outputMessages.push(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${result.gradeQuantity['보너스']}개\n`);
        outputMessages.push(`6개 일치 (2,000,000,000원) - ${result.gradeQuantity['1등']}개\n`);
        outputMessages.push(`총 수익률은 ${result.incomeRate}%입니다.\n`);
        const output = outputMessages.join('');
        Console.print(output);
    }
}
export default LottoGameView
