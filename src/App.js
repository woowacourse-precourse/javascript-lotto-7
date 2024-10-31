import { Console } from "@woowacourse/mission-utils";
import Input from "./inputInfo.js";

class App {
  async run() {
    let price = new Input();
    let purchase = await price.inputPrice();
    Console.print("");
    let count = price.NumberOfPurchase(purchase);
    price.printLottos(count);
  }
}

export default App;
