import { inputHandler } from "./handlers/inputHandler.js";
import { MESSAGES } from "./config/config.js";
import { outputHandler } from "./handlers/outputHandler.js";
import { getLottoCount } from "./features/getLottoCount.js";
import { createBuyMsg } from "./features/createBuyMsg.js";
import { getLottos } from "./features/getLottos.js";
import { calculateProfit } from "./features/calculateProfit.js";
import { getLottoRanks } from "./features/getLottoRanks.js";
import { getTotalAmount } from "./features/getTotalAmount.js";
import { createResultMsg } from "./features/createResultMsg.js";
import { parseNumbers } from "./features/parseNumbers.js";

class App {
  async run() {
    const [amount, lottoList] = await this.processLotto();
    const [lottoRankMap, profit] = await this.processCalc(amount, lottoList);
    this.processOutput(lottoRankMap, profit);
  }

  /**
   * 로또 발행 프로세스
   * 구입 금액을 입력받아 로또횟수만큼 로또를 발행하고 그 결과를 출력한다.
   *
   * @async
   * @returns {[number, Array]} 구입한 로또 금액과 생성된 로또 리스트를 포함하는 배열
   * - 'amount' {number}: 로또 금액
   * - 'lottoList' {Array}: 로또 리스트, Lotto 객체 리스트
   */
  async processLotto() {
    const amount = await inputHandler(MESSAGES.INPUT_BUY_COST);
    const lottoCount = getLottoCount(amount);
    const [lottoList, lottoStrings] = getLottos(lottoCount);

    outputHandler(createBuyMsg(lottoCount, lottoStrings));

    return [amount, lottoList];
  }

  /**
   * 로또 통계 계산 프로세스
   * 당첨 번호와 보너스 번호를 입력받아 로또 리스트와 대조하여,
   * 당첨 갯수를 확인하고, 수익률을 계산한다.
   *
   * @async
   * @param {number} amount - 로또 금액
   * @param {Array} lottoList - 로또 리스트
   * @returns {[Map<number, number>, string]}
   * - 'lottoLankMap' {Map<number, number>}: 로또 등수 당첨 인원 Map
   * - 'profit' {string}: 수익률
   */
  async processCalc(amount, lottoList) {
    const strWinningNum = await inputHandler(MESSAGES.INPUT_WIN_NUM);
    const bonusNumber = await inputHandler(MESSAGES.INPUT_BONUS_NUM);

    const winningNumbers = parseNumbers(strWinningNum);
    const lottoRankMap = getLottoRanks(lottoList, winningNumbers, bonusNumber);
    const totalAmount = getTotalAmount(lottoRankMap);
    const profit = calculateProfit(amount, totalAmount);

    return [lottoRankMap, profit];
  }

  /**
   * 로또 결과 출력 프로세스
   * 로또 등수와 수익률을 받아 로또 결과를 출력한다.
   *
   * @param {Map<number, number>} lottoRankMap - 로또 등수
   * @param {string} profit - 수익률
   */
  processOutput(lottoRankMap, profit) {
    const resultMessage = createResultMsg(lottoRankMap, profit);

    outputHandler(resultMessage);
  }
}

export default App;
