import { PROMPTS } from "./constants.js";
import { printParam } from "./handler/printHandlers.js";
import {
  handlePurchaseInput,
  handleLotteryNumInput,
  handleBonusLotteryNum,
} from "./handler/inputHandlers.js";
import { MissionUtils } from "@woowacourse/mission-utils";
import Lotto from "./class/Lotto.js";

class App {
  async run() {
    const userPurchaseLotteries = await handlePurchaseInput();
    const lotteriesToCompare = this.makeLotteries(userPurchaseLotteries);

    printParam(userPurchaseLotteries + PROMPTS.PURCAHSE_INFO_PROMPT);

    const userLotteryNumbers = await handleLotteryNumInput();
    const bonusLotteryNumber = await handleBonusLotteryNum(userLotteryNumbers);
  }

  makeLotteries(counts) {
    const UNIQUE_NUMBERS_RANGE = [1, 45, 6];
    return Array.from({ length: counts }).map((_) => {
      const randomNums = MissionUtils
        .Random
        .pickUniqueNumbersInRange(...UNIQUE_NUMBERS_RANGE)
        .sort((a, b) => a - b);

      return new Lotto(randomNums);
    });
  }
}

export default App;
