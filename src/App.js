import InputView from "./view/InputView.js";
import OutputView from "./view/OutputView.js";

class App {
  async run() {
    const inputPrice = await InputView.readLinePrice();
    const getLottoCount = (number) => number / 1000;

    const lottoCount = getLottoCount(inputPrice);
    OutputView.printLotto(lottoCount);

    const parseNumber = await InputView.readLineNumber();
    const parseBonusNumber = await InputView.readLineBonusNumber();
  }
}

export default App;
