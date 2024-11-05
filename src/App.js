import Lotto from "./model/Lotto.js";
import LottoRanker from "./model/LottoRanker.js";
import LottoGenerator from "./model/LottoGenerator.js";
import OutputView from "./view/OutputView.js";
import InputView from "./view/InputView.js";
import restart from "./restart.js";

class App {
  async generatingLotto() {
    const payment = await InputView.getPayment();
    const lottoGenerator = new LottoGenerator(payment);

    return { payment, lottoGenerator };
  }

  async generatingWinningLotto() {
    const winningNums = await InputView.getWinningNumbers();
    const winningLotto = new Lotto(winningNums);

    return winningLotto;
  }

  async generatingLottoRanker(winningLotto) {
    const bonusNum = await InputView.getBonusNumber();
    const lottoRanker = new LottoRanker(winningLotto.getNumbers(), bonusNum);

    return lottoRanker;
  }

  async run() {
    // 로또 생성
    const { payment, lottoGenerator } = await restart(this.generatingLotto);
    const amount = lottoGenerator.buyLotto();
    OutputView.printLottoQuantity(amount);
    const lottoBundle = lottoGenerator.generateLotto();
    OutputView.printLottoBundle(lottoBundle);

    // 당첨번호 및 보너스 번호 입력
    const winningLotto = await restart(this.generatingWinningLotto);
    const lottoRanker = await restart(() =>
      this.generatingLottoRanker(winningLotto)
    );

    // 로또 번호와 당첨 번호 비교
    const winning = lottoRanker.countWinning(lottoBundle);
    const returnRate = lottoRanker.calculateReturnRate(payment);

    // 통계 출력
    OutputView.printStatistics(winning);
    OutputView.printReturnRate(returnRate);
  }
}

export default App;
