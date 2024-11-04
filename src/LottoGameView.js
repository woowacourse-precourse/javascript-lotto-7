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
}
export default LottoGameView