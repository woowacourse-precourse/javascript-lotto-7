import Money from "./Money.js";
class App {
  async run() {
    const money = await this.getMoney();
  }

  async getMoney() {
    return Money.inputMoney();
  }
}

export default App;