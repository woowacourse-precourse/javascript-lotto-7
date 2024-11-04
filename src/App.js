import Input from "./inputInfo.js";

class App {
  async run() {
    let input = new Input();
    await input.inputPrice();
    input.purchaseNumber();

    input.listLottos();
    input.printLottos();

    await input.winLottoNumbers();
    await input.winBonusNumber();

    input.checkLottoMatch();
    input.printResult();
  }
}

export default App;
