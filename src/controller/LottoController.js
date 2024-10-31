import InputView from "../view/InputView.js";
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
  async run() {
    try {
      const lottoAmount = await this.#inputView.readLottoAmount();
      this.validateLottoAmount(Number(lottoAmount));
    } catch (error) {
      console.log(error);
      this.run();
    }
  }
}
export default LottoController;
