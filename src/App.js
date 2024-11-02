import View from "./View.js";

class App {
  async run() {
    const {
      inputPrice,
      parseNumber,
      parseBonusNumber
    } = await this.readLineLottoInputs();

    const getLottoCount = (number) => number / 1000;

    const lottoCount = getLottoCount(inputPrice);

    View.printLotto(lottoCount);
  }

  async readLineLottoInputs() {
    const inputPrice = await View.readLinePrice();
    const parseNumber = await View.readLineNumber();
    const parseBonusNumber = await View.readLineBonusNumber();

    return { inputPrice, parseNumber, parseBonusNumber }
  }
}

export default App;
