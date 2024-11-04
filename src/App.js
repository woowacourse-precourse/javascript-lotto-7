import { Console } from "@woowacourse/mission-utils";
import CostManager from "./services/CostManager.js";
import LottoGenerator from "./services/LottoGenerator.js";
import GetNumber from "./services/GetNumber.js";
import CheckNumber from "./services/CheckNumber.js";
import WinningPrizeTable from "./models/WinningPrizeTable.js";
import PrintResult from "./services/PrintResult.js";
import ReturnOfInvestment from "./services/ReturnOfInvestment.js";

class App {
  constructor() {
    this.getNumber = new GetNumber();
    this.checkNumber = new CheckNumber(this.getNumber);
  }

  async run() {
    const costManager = new CostManager();
    const lottoGenerator = new LottoGenerator(this.checkNumber);
    const winningPrizeTable = new WinningPrizeTable(this.checkNumber);
    const printResult = new PrintResult(winningPrizeTable);
    const returnOfInvestment = new ReturnOfInvestment(winningPrizeTable,costManager);

    await this.handlePurchaseLottos(costManager, lottoGenerator);
    await this.handleGetWinNumber(this.getNumber);
    await this.handleGetBonusNumber(this.getNumber);

    winningPrizeTable.updateWinningPrizeTable();
    printResult.printingResult();
    returnOfInvestment.calculator();

  }

  async handlePurchaseLottos(costManager, lottoGenerator) {
    try {
      await this.purchaseLottos(costManager, lottoGenerator);
    } catch (error) {
      Console.print(error.message);
      await this.handlePurchaseLottos(costManager, lottoGenerator);
    }
  }

  async handleGetWinNumber(getNumber) {
    try {
      await getNumber.getWinNumber();
    } catch (error) {
      Console.print(error.message);
      await this.handleGetWinNumber(getNumber);
    }
  }

  async handleGetBonusNumber(getNumber) {
    try {
      await getNumber.getBonusNumber();
    } catch (error) {
      Console.print(error.message);
      await this.handleGetBonusNumber(getNumber);
    }
  }

  async purchaseLottos(costManager, lottoGenerator) {
    const lottoCount = await costManager.getLottoCountFromCost();
    Console.print(`\n${lottoCount}개를 구매했습니다.`);
    lottoGenerator.generateLottos(lottoCount);
  }
}

export default App;