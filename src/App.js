import InputView from './views/InputView.js';
import OutputView from './views/OutputView.js';
import Lotto from './Lotto.js';
import LottoModel from './model/LottoModel.js';
import LottoController from './controller/LottoController.js';
import BuyLottoCountValidator from './validator/BuyLottoCountValidator.js';
import PickLottoNumberValidator from './validator/PickLottoNumberValidator.js';
import PickBonusNumberValidator from './validator/PickBonusNumberValidator.js';

class App {
  async run() {
    const model = new LottoModel();
    const lottoController = new LottoController(model);

    // 구입 금액 입력
    while (true) {
      try {
        const buyLottoCount = await InputView.getBuyLottoCount();
        BuyLottoCountValidator.validateBuyLottoCount(buyLottoCount);
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
    while (true) {
      try {
        const pickLottoNumber = await InputView.getPickLottoNumber();
        PickLottoNumberValidator.validatePickLottoNumber(pickLottoNumber);
        model.setPickLottoNumber(pickLottoNumber);
        break;
      } catch (error) {
        OutputView.printMessage(error.message);
      }
    }

    while (true) {
      try {
        const pickBonusNumber = await InputView.getBonusLottoNumber();
        PickBonusNumberValidator.validateBonusNumber(pickBonusNumber, model.getPickLottoNumber());
        model.setPickBonusNumber(pickBonusNumber);
        break;
      } catch (error) {
        OutputView.printMessage(error.message);
      }
    }

    // 당첨 통계 및 수익률 계산
    const statistics = lottoController.calculateStatistics();
    const earningRate = lottoController.calculateEarningRate(statistics);
    OutputView.printWinningStatistics(statistics);
    OutputView.printEarningRate(earningRate);
  }
}

export default App;
