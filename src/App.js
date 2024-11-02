import Profit from './Profit.js';
import Rank from './Rank.js';
import OutputView from './view/OutputView.js';
import LottoController from './controller/LottoController.js';

class App {
  async run() {
    const lottoController = new LottoController();
    await lottoController.prepareLotto();

    // 로또 등수 확인
    const rankCounter = [0, 0, 0, 0, 0];
    lottoList.forEach((lotto) => {
      const rank = new Rank(
        winningLotto.getNumbers(),
        bonusLotto.getBonusNumber(),
        lotto,
      );

      if (rank.getRank() !== 6) {
        rankCounter[5 - rank.getRank()] += 1;
      }
    });

    // 로또 수익률 확인
    const profit = new Profit(lottoMoney.getMoney(), rankCounter);
    OutputView.printLottoStatics(rankCounter, profit.getProfit());
  }
}

export default App;
