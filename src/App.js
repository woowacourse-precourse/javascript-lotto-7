import { Console } from "@woowacourse/mission-utils";
import { setAmount } from "./utils/setAmount.js";
import { setAnswerNum } from "./utils/setAnswerNum.js";
import { setBonusNum } from "./utils/setBonusNum.js";
import { printRevenue } from "./utils/printRevenue.js";
import { getWinningData } from "./utils/getData.js";
import { generateLottoNum } from "./utils/generateLottoNum.js";
import { printLottoNumbers } from "./utils/printLottoNumbers.js";
import { compareLottoNum } from "./utils/compareLottoNum.js";
import { printWinningStatistics } from "./utils/printWinningStatistics.js";

class App {
  async run() {
    try {
      const { CORRECT_NUMBER, CORRECT_MESSAGE, MONEY } = getWinningData();

      let amount = await setAmount();

      let count = amount / 1000;
      Console.print(`\n${count}개를 구매했습니다.`);

      let lottoArray = generateLottoNum(count);

      printLottoNumbers(lottoArray);

      let answerNum = await setAnswerNum();
      let bonusNum = await setBonusNum(answerNum);

      let correctLottoArray = compareLottoNum(lottoArray, answerNum, bonusNum);

      let revenue = printWinningStatistics(
        correctLottoArray,
        CORRECT_NUMBER,
        CORRECT_MESSAGE,
        MONEY
      );
      printRevenue(revenue, amount);
    } catch (error) {
      throw error;
    }
  }
}

export default App;
