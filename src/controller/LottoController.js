import Lotto from "../model/Lotto.js";
import InputView from "../view/InputView.js";
import { Random } from "@woowacourse/mission-utils";
class LottoController {
  #inputView;
  constructor() {
    this.#inputView = new InputView();
  }
  validateLottoAmount(amount) {
    if (isNaN(amount)) {
      throw new Error(`[ERROR] 로또 금액은 숫자로 입력해야합니다.\n`);
    }

    if (amount < 0 || amount % 1000 !== 0) {
      throw new Error(`[ERROR] 로또 금액은 1000원 단위의 양수여야 합니다.\n`);
    }
  }
  makeLottoTickets(numberOfLotto) {
    const tickets = [];
    for (let i = 0; i < numberOfLotto; i++) {
      const numbers = Random.pickUniqueNumbersInRange(1, 45, 6);
      tickets.push(new Lotto(numbers));
    }
    return tickets;
  }
  async run() {
    try {
      const lottoAmountInput = await this.#inputView.readLottoAmount();
      const lottoAmount = Number(lottoAmountInput);

      this.validateLottoAmount(lottoAmount);

      const numberOfLotto = lottoAmount / 1000;
      this.makeLottoTickets(numberOfLotto);
    } catch (error) {
      console.log(error);
      this.run();
    }
  }
}
export default LottoController;
