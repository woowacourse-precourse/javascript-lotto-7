import InputView from "../views/InputView.js";

class LottoController {
  async #setMoney() {
    const inputMoney = await InputView.readInputMoney();

    return inputMoney;
  }

  async purchase() {
    const money = await this.#setMoney();
    console.log(money);
  }
}

export default LottoController;
