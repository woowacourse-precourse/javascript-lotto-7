import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import Lotto from './Lotto.js';
import LottoModel from './model/LottoModel.js';
import LottoController from './controller/LottoController.js';
import Validator from './validator/Validator.js';

class App {
  async run() {
    const model = new LottoModel();
    const lottoController = new LottoController(model);

    // 구입 금액 입력
    while (true) {
      try {
        const buyLottoCount = await InputView.getBuyLottoCount();
        Validator.validateBuyLottoCount(buyLottoCount);
        model.setBuyLottoCount(buyLottoCount);
        break;
      } catch (error) {
        OutputView.printMessage(error.message);
      }
    }

    // 랜덤 로또 번호 생성
    model.generateRandomLottoNumbers();
    OutputView.printRandomLottoNumbers(model.getRandomLottoNumbers());

    // 당첨 번호 및 보너스 번호 입력
    const pickLottoNumber = await InputView.getPickLottoNumber();
    const pickBonusNumber = await InputView.getBonusLottoNumber();
    model.setPickLottoNumber(pickLottoNumber);
    model.setPickBonusNumber(pickBonusNumber);

    // 당첨 통계 및 수익률 계산
    const statistics = lottoController.calculateStatistics();
    const earningRate = lottoController.calculateEarningRate(statistics);
    OutputView.printWinningStatistics(statistics);
    OutputView.printEarningRate(earningRate);
  }
}

export default App;
