import {Console} from '@woowacourse/mission-utils'
import LottoGameController from './LottoGameController.js'

class LottoGameView{
    async getPurchaseAmount(){
        const input = await Console.readLineAsync('구입금액을 입력해 주세요.');
        return LottoGameController.onGetPurchaseAmount(input);
    }

    async getWinningNumber(){
        const input = await Console.readLineAsync('당첨 번호를 입력해 주세요.');
        return LottoGameController.onGetWinningNumber(input);
    }

    async getBonusNumber(){
        const input = await Console.readLineAsync('보너스 번호를 입력해 주세요.');
        return LottoGameController.onGetBonusNumber(input);
    }
}
export default LottoGameView