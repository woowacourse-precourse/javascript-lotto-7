import { Console } from "@woowacourse/mission-utils";
import CostManager from "./CostManager.js";
import LottoGenerator from "./LottoGenerator.js";

class App {
  async run() {
    const costManager = new CostManager();
    const lottoGenerator = new LottoGenerator();
    
    try {
      await this.purchaseLottos(costManager, lottoGenerator);
    } catch (error) {
      console.error(error.message);
      this.run(); // 재귀 호출
    }
  }

  async purchaseLottos(costManager, lottoGenerator) {
    const lottoCount = await costManager.getLottoCountFromCost();
    Console.print(`${lottoCount}개를 구매했습니다.`);
    lottoGenerator.generateLottos(lottoCount);
  }
}

export default App;
