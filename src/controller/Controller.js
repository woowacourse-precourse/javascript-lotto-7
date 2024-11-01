import InputView from '../view/InputView.js';
import OutputView from '../view/OutputView.js';
import { validateMoney } from '../utils/validation.js';
import Lotto from '../Lotto.js';
import { getUniqueNumbers } from '../utils/getUniqueNumbers.js';
import { LOTTO } from '../constant/constants.js';

export default class Controller {
  constructor() {
    this.inputView = new InputView();
    this.outputView = new OutputView();
  }

  async start() {
    const paidMoney = await this.getMoney();
    const lottoCount = paidMoney / LOTTO.LOTTO_PRICE;
    const lottos = this.generateLottos(lottoCount);
    const lottosNumber = lottos.map((lotto) =>
      lotto.getNumbers().sort((a, b) => a - b),
    );

    this.outputView.printLottoPurchaseHistory(lottosNumber);
  }

  generateLottos(lottoCount) {
    return Array.from({ length: lottoCount }, () => this.createLotto());
  }

  createLotto() {
    const lottoNumbers = getUniqueNumbers();

    return new Lotto(lottoNumbers);
  }

  async getMoney() {
    try {
      const input = await this.inputView.getInput('구입금액을 입력해 주세요.');
      validateMoney(input);

      return input;
    } catch (error) {
      this.outputView.printError(error.message);
      await this.getMoney();
    }
  }
}
