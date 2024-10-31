import InputView from '../views/InputView.js';
import OutputView from '../views/OutputView.js';
import LottoNumberGenerator from '../services/LottoNumberGenerator.js';
import LottoRepository from '../models/LottoRepository.js';

class LottoController {
  async start() {
    const purchaseAmount = await InputView.getPurchaseAmount();
    const lottoRepository = new LottoRepository();
    const lottoNumberGenerator = new LottoNumberGenerator(purchaseAmount);
    lottoNumberGenerator.generateLotto(lottoRepository);
    OutputView.printNewLine();
    OutputView.printLottoAmount(lottoRepository.getLottoAmount());
    OutputView.printLottoNumbers(lottoRepository);
    OutputView.printNewLine();
  }
}

export default LottoController;
