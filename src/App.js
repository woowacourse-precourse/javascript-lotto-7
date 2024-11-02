import  Input  from './Input.js';
import Lotto from './Lotto.js';
import { validateBonusNum, validatePurchaseAmount, validateWinnigNum } from './validate.js';
import { COMMON_MESSAGE } from './message.js';
import { Console, MissionUtils } from "@woowacourse/mission-utils";

class App {
  async run() {
    const inputPurchaseAmount = new Input(validatePurchaseAmount.validation);
    await inputPurchaseAmount.inputValue(COMMON_MESSAGE.INPUT_PURCHASE);
    const lottoCount = inputPurchaseAmount.getLottoCount();

    Console.print(`${lottoCount}개를 구매했습니다.`);

    const lottos = [];
    for(let i = 0; i < lottoCount; i++){
      const numbers = this.generateLottoNumbers();
    }

    const inputWinningNum = new Input(validateWinnigNum.validation);
    await inputWinningNum.inputValue(COMMON_MESSAGE.INPUT_WINNING_NUM);
    inputWinningNum.changeArray();
    const winnigNum = inputWinningNum.getValue();

    const inputBonusNum = new Input((bonusNum) => validateBonusNum.validation(bonusNum, winnigNum));
    await inputBonusNum.inputValue(COMMON_MESSAGE.INPUT_BONUS_NUM);
    inputBonusNum.changeNum();
    const bonusNum = inputBonusNum.getValue();
  }

  generateLottoNumbers(){
    return Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a- b);
  }
}

export default App;
