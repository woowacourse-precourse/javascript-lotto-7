import Input from "./inputInfo.js";

class App {
  async run() {
    let price = new Input();
    await price.inputPrice();
    price.purchaseNumber();
    price.listLottos();
    price.printLottos();
    await price.winLottoNumbers();
    await price.winBonusNumber();
    price.checkLottoMatch();
    price.printResult();
  }
}

export default App;
