import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import LottoNumberGenerator from '../services/LottoNumberGenerator.js';
import LottoRepository from '../models/LottoRepository.js';
import LottoDrawingMachine from '../services/LottoDrawingMachine.js';

class LottoController {
  async start() {
    const purchaseAmount = await InputView.getPurchaseAmount();
    const lottoRepository = new LottoRepository();
    const lottoNumberGenerator = new LottoNumberGenerator(purchaseAmount);
    lottoNumberGenerator.generateLotto(lottoRepository);
    OutputView.printNewLine();
    OutputView.printLottoAmount(lottoRepository.getLottoAmount());
    OutputView.printLottoNumbers(lottoRepository.getLottoArray());
    OutputView.printNewLine();
    const winningNumber = await InputView.getWinningNumber();
    OutputView.printNewLine();
    const bonusNumber = await InputView.getBonusNumber();
    const lottoDrawingMachine = new LottoDrawingMachine(winningNumber, bonusNumber, lottoRepository);
    const drawResult = lottoDrawingMachine.drawLotto();
    OutputView.printNewLine();
    OutputView.printWinningStatistics();
    OutputView.printUnderBar();
  }
}

export default LottoController;
