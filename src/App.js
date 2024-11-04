import { Console, MissionUtils } from '@woowacourse/mission-utils';
import Lotto from './Lotto.js';
import { INPUT_MESSAGES } from './Constants/input.js';
import { OUTPUT_MESSAGES } from './Constants/output.js';
import { PRIZE_MONEY, RANK_DESCRIPTIONS } from './Constants/prize.js';
import { validatePurchaseAmount, validateWinningNumbers, validateBonusNumber } from './utils/validateInput.js';

class App {
  async run() {
    const buyCost = await this.getBuyAmount();
    const STANDARD_COST = 1000;
    const buyCount = buyCost / STANDARD_COST;

    Console.print(`${buyCount}${OUTPUT_MESSAGES.LOTTO_COUNT}`);
    const myLottoNumbers = [];

    for (let i = 0; i < buyCount; i++) {
      const lottoNumber = this.generateNumber();
      Console.print(`[${lottoNumber.join(', ')}]`);
      new Lotto(lottoNumber);
      myLottoNumbers.push(lottoNumber);
    }
  }

  async getBuyAmount() {
    try {
      const input = await Console.readLineAsync(INPUT_MESSAGES.PURCHASE_AMOUNT);
      return validatePurchaseAmount(input);
    } catch (error) {
      Console.print(error.message);
      return this.getBuyAmount(); // 에러 발생 시 다시 입력 받기
    }
  }

  generateNumber() {
    const lottoNumber = MissionUtils.Random.pickUniqueNumbersInRange(1, 45, 6);
    lottoNumber.sort((a, b) => a - b);
    return lottoNumber;
  }
}

export default App;
