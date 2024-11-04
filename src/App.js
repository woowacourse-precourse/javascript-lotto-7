import { getLottoNumbers, offerLottoSheet } from "./LottoMachine.js";
import { getMoney } from "./View.js";

class App {
  async run() {
    const  lottoQuantity = await getMoney();
    offerLottoSheet(lottoQuantity);
  }
}

export default App;
