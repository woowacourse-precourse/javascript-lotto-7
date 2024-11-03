import { Console } from '@woowacourse/mission-utils';
import InputManagement from './InputManagement.js';
import LottoPublication from './LottoPublication.js';
import VerifyingLotto from './VerifyingLotto.js';
import RevenueRate from './RevenueRate.js';

class App {
  async run() {
    const inputManagement = new InputManagement();
    const lottoPublication = new LottoPublication();
    const verifyingLotto = new VerifyingLotto();
    const revenueRate = new RevenueRate();

    try {
      await inputManagement.inputPurchaseAmount();

      lottoPublication.publicationLotto(inputManagement.getPublicationCount());
      lottoPublication.showPublishedLottoList();

      await inputManagement.inputWinningNumbers();
      await inputManagement.inputBonusNumber();
    } catch (error) {
      Console.print(error.message);
    }

    verifyingLotto.verifyWinningLottoList(
      inputManagement.getWinningNumbers(),
      inputManagement.getBonusNumber(),
      lottoPublication.getPublishedLottoList()
    );
    verifyingLotto.printWinningHistory();

    revenueRate.calculate(
      inputManagement.getPurchaseAmount(),
      verifyingLotto.getWinningHistory()
    );
    revenueRate.print();
  }
}

export default App;
