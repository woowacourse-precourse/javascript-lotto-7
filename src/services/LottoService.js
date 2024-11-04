import { Console } from '@woowacourse/mission-utils';
import InputHandler from '../handlers/InputHandler.js';
import LottoGenerator from '../utils/LottoGenerator.js';

class LottoService {
  static async setupLottoGame() {
    const purchaseAmount = await InputHandler.getPurchaseAmount();
    const lottoList = this.generateLottos(purchaseAmount);
    return { lottoList, purchaseAmount };
  }

  static generateLottos(purchaseAmount) {
    const lottoCount = purchaseAmount / 1000;
    const lottoList = LottoGenerator.generateLottos(lottoCount);
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    lottoList.forEach((lotto) =>
      Console.print(`[${lotto.getNumbers().join(', ')}]`),
    );
    return lottoList;
  }
}

export default LottoService;
