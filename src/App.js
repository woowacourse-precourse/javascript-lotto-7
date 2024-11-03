import  Input  from './Input.js';
import Lotto from './Lotto.js';
import LottoResultCalculator from './LottoResultCalculator.js';
import { validateBonusNum, validatePurchaseAmount, validateWinnigNum } from './validate.js';
import { COMMON_MESSAGE } from './message.js';
import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const inputPurchaseAmount = new Input(validatePurchaseAmount.validation);
    await inputPurchaseAmount.inputValue(COMMON_MESSAGE.INPUT_PURCHASE);
    const purchaseAmount = inputPurchaseAmount.getValue();
    const lottoCount = inputPurchaseAmount.getLottoCount();

    Console.print(`\n${lottoCount}개를 구매했습니다.`);

    const lottos = [];
    for(let i = 0; i < lottoCount; i++){
      const numbers = this.generateLottoNumbers();
      const lotto = new Lotto(numbers);
      lottos.push(lotto);
    }

    lottos.forEach((lotto) => {
      Console.print(lotto.getNumbers());
    });

    const inputWinningNums = new Input(validateWinnigNum.validation);
    await inputWinningNums.inputValue(COMMON_MESSAGE.INPUT_WINNING_NUM);
    inputWinningNums.changeArray();
    const winnigNums = inputWinningNums.getValue();

    const inputBonusNum = new Input((bonusNum) => validateBonusNum.validation(bonusNum, winnigNums));
    await inputBonusNum.inputValue(COMMON_MESSAGE.INPUT_BONUS_NUM);
    const bonusNum = inputBonusNum.getValue();

    Console.print(COMMON_MESSAGE.WINNING_STATS);
    const lottoResultCalculator = new LottoResultCalculator();
    lottoResultCalculator.calculateResults(winnigNums, bonusNum, lottos);
    lottoResultCalculator.printLottoResult();
    lottoResultCalculator.calculateRate(purchaseAmount);
    lottoResultCalculator.printReturnOfRate();
  }

  generateLottoNumbers(){
    return MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b);
  }
}

export default App;
