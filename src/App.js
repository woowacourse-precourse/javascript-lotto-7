import Lotto from "./model/Lotto.js";
import LottoRanker from "./model/LottoRanker.js";
import LottoGenerator from "./model/LottoGenerator.js";
import WinningStatistics from "./service/WinningStatistics.js";
import View from "./view/View.js";

class App {
  async run() {
    const payment = await View.getPayment();

    // 로또 생성
    const lottoGenerator = new LottoGenerator(payment);
    const lotto = lottoGenerator.buyLotto();

    // 당첨번호 및 보너스 번호 입력
    const winningNums = await View.getWinningNumbers();
    const winningLotto = new Lotto(winningNums);
    const bonusNum = await View.getBonusNumber();

    // 로또 번호와 당첨 번호 비교
    const lottoRanker = new LottoRanker(winningLotto.getNumbers(), bonusNum);
    const winning = lottoRanker.countWinning(lotto);

    // 통계 출력
    const statistics = new WinningStatistics(winning);
    statistics.printStatistics();
    statistics.printReturnRate(payment);
  }
}

export default App;
