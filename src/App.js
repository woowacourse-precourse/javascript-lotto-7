// import { createLottoSheet } from "./LottoMachine.js";
import { getLottoNumber, getMoney } from "./View.js";

class App {
  async run() {
    const lottoQuantity = await getMoney();
    const userLotto = createLottoSheet(lottoQuantity);
    const winningNumbers = getLottoNumber();
  }
}

export default App;
