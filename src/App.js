import View from "./View.js";
import Model from "./Model.js";

class App {
  #VIEW = new View();
  #MODEL = new Model();
  async run() {
    const PURCHASE_MONEY = await this.#VIEW.getPurchaseMoney();

    const LOTTOS = this.#MODEL.buyLottos(PURCHASE_MONEY);

    this.#VIEW.printLottos(LOTTOS);

    const WINNING_NUMBERS = await this.#VIEW.getWinningNumbers();

    const BONUS_NUMBER = await this.#VIEW.getBonusNumber();

    const RESULTS = this.#MODEL.getResults(
      LOTTOS,
      WINNING_NUMBERS,
      BONUS_NUMBER,
    );
    console.log(RESULTS);
  }
}

export default App;
