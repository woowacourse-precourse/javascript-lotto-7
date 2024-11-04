import Lotto from "./Lotto.js";
import LottoMessage from "./messages/LottoMessage.js";

class LottoResult {
  constructor(myLotto) {
    this.lottos = myLotto.map((numbers) => new Lotto(numbers));
    this.results = this.initializeResults();
    this.reward = 0;
  }

  initializeResults() {
    return {
      "3개 일치 (5,000원)": 0,
      "4개 일치 (50,000원)": 0,
      "5개 일치 (1,500,000원)": 0,
      "5개 일치, 보너스 볼 일치 (30,000,000원)": 0,
      "6개 일치 (2,000,000,000원)": 0,
      None: 0,
    };
  }

  start(winningLotto) {
    this.lottos.forEach((lotto) => {
      lotto.checkResult(winningLotto);
      this.updateResults(lotto.result);
    });
  }

  updateResults(result) {
    if (this.results.hasOwnProperty(result)) {
      this.results[result] += 1;
    }
  }

  generateStatistics() {
    this.statistics = "";
    Object.entries(this.results).forEach(([key, value]) => {
      this.appendStatistics(key, value);
    });
  }

  appendStatistics(key, value) {
    if (key !== LottoMessage.NONE) {
      this.statistics += `\n${key} - ${value}개`;
      this.reward += LottoMessage.PRIZE[key] * value;
    }
  }
}

export default LottoResult;
