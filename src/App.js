import View from "./View.js";

class App {
  #view = new View();
  async run() {
    const PURCHASE_MONEY = await this.#view.getPurchaseMoney();
  }
}

export default App;
